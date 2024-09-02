import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Upload from './assets/documentupload.png';
import { useDropzone } from 'react-dropzone';
import Tesseract from 'tesseract.js';
import Spinner from "../components/Spinner";
import { useDispatch, useSelector } from 'react-redux';
import { changeApiresponse, changeFilename } from '../components/redux/FormSlice';
import * as pdfjs from "pdfjs-dist";
import { TiDeleteOutline } from "react-icons/ti";
import axios from 'axios';
import Swal from 'sweetalert2';
import { TextTranslationClient, TranslatorCredential } from "@azure/ai-text-translation";

const workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

const translateApiKey = process.env.REACT_APP_AZURE_TRANSLATE_API_KEY; // Your Azure Translator API key
const translateEndpoint = process.env.REACT_APP_AZURE_TRANSLATE_ENDPOINT; // Your Azure Translator Endpoint

const client = new TextTranslationClient(translateEndpoint, new TranslatorCredential(translateApiKey));

export default function Fileupload() {
  const dispatch = useDispatch();
  const token = localStorage.getItem('accessToken');

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [responses, setResponses] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BASE_URL;

  const onDrop = (acceptedFiles) => {
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFileChange = (event) => {
    const files = event.target.files;
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const payloads = [ /* Payloads array remains unchanged */ ];

  const handleDeleteFile = (fileName) => {
    const fileIndex = uploadedFiles.findIndex(file => file.name === fileName);
    if (fileIndex !== -1) {
      const updatedFiles = [...uploadedFiles];
      updatedFiles.splice(fileIndex, 1);
      setUploadedFiles(updatedFiles);
    }
  };

  const fetchResults = () => {
    axios
      .get("https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/userDetails/getProfile", {
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => {
        const profileArray = response.data;
        const profileObject = profileArray.reduce((acc, item) => {
          return {
            ...acc,
            subscriptionEnds: item.subscriptionEnds,
            balanceReview: item.balanceReview,
          };
        }, {});
        setProfile(profileObject);
      })
      .catch((error) => console.error('Error fetching company data:', error));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const translateText = async (text) => {
    try {
      const [translationResult] = await client.translate({
        from: "",
        to: ["en"],
        texts: [text],
      });

      return translationResult.translations[0].text;
    } catch (error) {
      console.error('Error translating text:', error);
      return text; // Fallback in case of an error
    }
  };

  const submitFiles = async () => {
    setLoading(true);
    const allResponses = [];
    let allText = '';
    try {
      for (let file of uploadedFiles) {
        dispatch(changeFilename(uploadedFiles));
        if (file.type === 'application/pdf') {
          const dataBuffer = await file.arrayBuffer();
          const data = new Uint8Array(dataBuffer);
          pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
          const pdf = await pdfjs.getDocument({ data }).promise;
          const numPages = pdf.numPages;

          for (let i = 1; i <= numPages; i++) {
            const page = await pdf.getPage(i);
            const textContent = await page.getTextContent();
            allText += textContent.items.map((s) => s.str).join(" ");
          }
        } else if (file.type.startsWith('image/')) {
          const imageData = await Tesseract.recognize(file);
          allText += imageData.data.text;
        }
      }

      if (!allText.trim()) {
        Swal.fire({
          icon: 'error',
          title: 'Unable to Parse Document',
          text: 'We could not extract any text from the document. Please check the file and try again.',
        });
        setLoading(false);
        setButtonClicked(false);
        return;
      }

      // Translate the extracted text to English
      const translatedText = await translateText(allText);
      console.log('Extracted and Translated Text:', translatedText);

      const apiUrlchatgpt = translatedText.length > 200000 ? `${apiUrl}/gpt/gpt41106preview` : `${apiUrl}/gpt/gpt35turbo`;

      const responses = await Promise.all(payloads.map(async (payload) => {
        const response = await fetch(apiUrlchatgpt, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Authorization': token,
          },
          body: JSON.stringify({
            qry: translatedText + payload.value,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          return { label: payload.label, content: data?.choices?.[0]?.message.content };
        } else {
          console.error("API request failed:", response.statusText);
          return { label: payload.label, content: null };
        }
      }));

      allResponses.push(...responses);

      const flattenedResponses = allResponses.flat();
      setResponses(flattenedResponses);
      dispatch(changeApiresponse(flattenedResponses));

      const reviewData = flattenedResponses.reduce((acc, curr) => {
        if (!acc[curr.label]) {
          acc[curr.label] = [];
        }
        acc[curr.label].push(curr.content);
        return acc;
      }, {});

      const fileNames = uploadedFiles.map((file) => file.name);

      const response = await fetch(`${apiUrl}/reviewDetails/createReview`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          title: "Employee agreement",
          fileName: fileNames,
          reviewResult: { reviewData },
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Response Data:", responseData);
        if(responseData==="subscribe"){
          navigate("/PricingTable")
        }else{
          navigate("/Result")
        }
      } else {
        console.error("Failed to submit responses to the backend.");
      }
    } catch (error) {
      console.error('Error processing files:', error);
    }
    setLoading(false);
  };

  const handleUpload = async () => {
    setButtonClicked(true);
    if (profile.subscriptionEnds) {
      const subscriptionEndDate = new Date(profile.subscriptionEnds);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to the start of the day
    
      if (profile.balanceReview > 0 || subscriptionEndDate > today) {
        await submitFiles();
      } else {
        navigate("/PricingTable");
        return;
      }
    }
  };

  return (
    <div className='fileupload'>
      <h4 className='uploadh4'>Please submit your employment contract below.</h4>
      <Card className='uploadcard' div {...getRootProps()}>
        <input {...getInputProps()} />
        <img src={Upload} alt='uplimg' />
        <h6 className='uploadcardh6'>Drag & drop files here</h6>
        <p className='uploadcardp'>Only PDF, JPEG, JPG, PNG are supported</p>
      </Card>

      {uploadedFiles.length > 0 && (
        <Card className="file-display-card">
          <div className="file-display-wrapper">
            <ul>
              {uploadedFiles.map((file) => (
                <li key={file.name}>
                  {file.name}
                  <TiDeleteOutline
                    size={20}
                    onClick={() => handleDeleteFile(file.name)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </Card>
      )}

      {buttonClicked ? (
        <Spinner />
      ) : (
        <Button onClick={handleUpload} disabled={uploadedFiles.length === 0}>
          Submit
        </Button>
      )}
    </div>
  );
}
//npm install @azure/ai-text-translation
