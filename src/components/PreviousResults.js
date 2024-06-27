import React,{useState,useEffect} from 'react'
import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {  changePreviousresponse } from './redux/FormSlice';
export default function PreviousResults() {
  const[results,setResults]=useState([]);
  const [selectedReview, setSelectedReview] = useState(null);
   const dispatch=useDispatch();
  const apiUrl = process.env.REACT_APP_BASE_URL
    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');
 
    const fetchResults = () => {
      axios
        .get(`${apiUrl}/reviewDetails/getReviewResults`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
            Authorization: token,
          },
        })
        .then((response) => setResults(response.data))
        
        
        .catch((error) => console.error('Error fetching company data:', error));
    };
    console.log("res",results);
    useEffect(() => {
      fetchResults();
      
    }, []);
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.getMonth() + 1; // Months are zero-indexed
      const year = date.getFullYear();
  
      // Add leading zeros if necessary
      const formattedDay = day < 10 ? '0' + day : day;
      const formattedMonth = month < 10 ? '0' + month : month;
  
      return `${formattedDay}/${formattedMonth}/${year}`;
  }
    const handleFileNameClick = (id) => {
      const selected = results.find(review => review.id === id);
      setSelectedReview(selected);   
    console.log("selected",selected)
dispatch(changePreviousresponse(selected));

navigate("/Previous");
      // Handle click event for filename here
      // For example, you can display the corresponding response
    };
  return (
    <div style={{paddingTop:30,}}>
        <h6 style={{color:'#ffffff',fontSize:12,fontWeight:400,fontFamily:'poppins'}}>Previous results</h6>
        <div style={{display:'flex',flexDirection:"column", paddingTop:20,height:"50vh",overflow:"scroll",overflowX:"hidden"}}>
        {results&&results.map((result, index) => (
          <div style={{display:"flex",cursor:"pointer"}}onClick={() => handleFileNameClick(result.id)}>
            <div>
              
    <FiMessageSquare size={20} color='#ffffff' />
    </div>
    <div style={{paddingLeft:10}}>
        <h6 style={{color:'#ffffff',fontSize:14,fontWeight:500,textOverflow:"clip"}}>{result.fileName}</h6>
        <p style={{color:'rgba(229, 229, 229, 0.4)',fontSize:11,fontWeight:500}}>{formatDate(result.created)}</p>
    </div>
    </div>
    ))}
        </div>
    </div>
  )
}
