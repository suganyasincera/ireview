import React, { useState, useEffect } from 'react';
import { FiMessageSquare } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { changePreviousresponse } from './redux/FormSlice';

export default function PreviousResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const token = localStorage.getItem('accessToken');

  const fetchResults = async () => {
    try {
      const response = await axios.get(`${apiUrl}/reviewDetails/getReviewResults`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          Authorization: token,
        },
      });
      setResults(response.data);
      setLoading(false); // Set loading to false after fetch
    } catch (error) {
      console.error('Error fetching company data:', error);
      setError('Failed to fetch results.'); // Set error message
      setLoading(false); // Set loading to false even after error
    }
  };

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
    if (selected) {
      dispatch(changePreviousresponse(selected));
      navigate("/Previous");
    }
  };

  if (loading) {
    return <div style={{ color: '#fff' }}>Loading previous results...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  // Conditionally render Previous Results section only if results exist
  if (results.length === 0) {
    return null; // Hide the entire section if no results exist
  }

  return (
    <div style={{ paddingTop: 30 }}>
      <h6 style={{ color: '#ffffff', fontSize: 12, fontWeight: 400, fontFamily: 'Poppins' }}>Previous Results</h6>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: 20,
          height: '50vh',
          overflowY: 'scroll',
          overflowX: 'hidden',
        }}
      >
        {results.map((result, index) => (
          <div
            key={index}
            style={{ display: 'flex', cursor: 'pointer', marginBottom: 15 }}
            onClick={() => handleFileNameClick(result.id)}
          >
            <FiMessageSquare size={20} color='#ffffff' />
            <div style={{ paddingLeft: 10 }}>
              <h6
                style={{
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '200px', // Limit the width of the filename
                }}
              >
                {result.fileName}
              </h6>
              <p style={{ color: 'rgba(229, 229, 229, 0.4)', fontSize: 11, fontWeight: 500 }}>
                {formatDate(result.created)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
