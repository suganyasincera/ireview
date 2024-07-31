import React, { useState,useEffect } from 'react';
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
const workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

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

  const payloads = [
    { label: "summary", value: 'Extract the salient points of the agreement and provide a summary, in bullet point format, with each bullet not more than 10 words. Cover aspects of compensation, benefits, performance management, exclusivity and termination. Set temperature to 0.' },
    { label: "salary", value: 'Extract the details that provides information on Salary. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "incentiveplans", value: 'Extract the details that provides information on incentive plans. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "insurance", value: 'Extract the details that provides information on insurance. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "othermonetarybenifits", value: 'Extract the details that provides information on other monetary benefits. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "noncompetency", value: 'Extract the details that provides information on non compete and exclusivity clauses. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "performance", value: 'Extract the details that provides information on performance monitoring. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "causes", value: 'Extract the details that provides information on causes for termination. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "notice", value: 'Extract the details that provides information on notice period. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "nonsoliicitation", value: 'Extract the details that provides information on non-solicitation. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
    { label: "bond", value: 'Extract the details that provides information on bond period. Refine the extracted data applying the concept of MECE. Print the response in 2 parts – KeyTakeAways as bullet points in 150 words or less and Reference to parts or page numbers of the document where the information was gathered from. If relevant content is not identified, return a note to indicate no references were observed, Set the temperature to 0.' },
  ];

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
  
  
  console.log("Profile",profile)
  useEffect(() => {
    fetchResults();
    
  }, []);
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

      console.log('Extracted Text:', allText);
      const apiUrlchatgpt = allText.length > 200000 ? `${apiUrl}/gpt/gpt41106preview` : `${apiUrl}/gpt/gpt35turbo`;

      const responses = await Promise.all(payloads.map(async (payload) => {
        const response = await fetch(apiUrlchatgpt, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Authorization': token,
          },
          body: JSON.stringify({
            qry: allText + payload.value,
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
        navigate("/Result")}
      } else {
        console.error("Failed to submit responses to the backend.");
      }
    } catch (error) {
    }
    setLoading(false);
  };

  const handleUpload = async () => {
    setButtonClicked(true);
    if (profile.subscriptionEnds) {
      const subscriptionEndDate = new Date(profile.subscriptionEnds);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set to the start of the day
    
    if(profile.balanceReview>0 || subscriptionEndDate < today){
      await submitFiles();
   
   }
   else{
    navigate("/PricingTable");
    return;
   }}
  };

  return (
    <div className='fileupload'>
      <h4 className='uploadh4'>Please submit your employment contract below.</h4>
      <Card className='uploadcard' div {...getRootProps()}>
        <input {...getInputProps()} />
        <img src={Upload} alt='uplimg' />
        <h6 className='uploadcardh6'>Drag & drop files here</h6>
        <h6 className='uploadcardh6'>- or -</h6>
        <Button variant="outline-dark" className='fileuploadbuttondark'>Browse Files</Button>
        <ul>
          {uploadedFiles.map((file) => (
            <li key={file.name} style={{ listStyle: "none" }}>
              {file.name}
              <TiDeleteOutline size={20} style={{ marginLeft: 5, cursor: 'pointer' }} color="red" onClick={() => handleDeleteFile(file.name)} />
            </li>
          ))}
        </ul>
      </Card>
      <Button className='fileuploadbutton'
        style={{
          color: buttonClicked ? '#2D3748' : '#fff',
          backgroundColor: buttonClicked ? '#2D3748' : '#50C878',
          cursor: "pointer"
        }} onClick={handleUpload}
        disabled={loading}
      >
        {loading ? <Spinner /> : "Submit"}
      </Button>
    </div>
  );
}
