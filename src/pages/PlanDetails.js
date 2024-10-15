import React,{useState,useEffect} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import Sidedrawer from '../components/Sidedrawer';
import axios from 'axios';
const PlanDetails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('accessToken');
  const[planhistory,setPlanhistory]=useState([]);
  const handleBackToHome = () => {
    navigate('/home');
  };
  
  const fetchResults = () => {
    axios
      .get("https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/userDetails/subscriptionHistory", {
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => setPlanhistory(response.data))
      .catch((error) => console.error('Error fetching company data:', error));
  };
  useEffect(() => {
    fetchResults();
    console.log("history",planhistory)
  }, []);
  return (
    <div className="App">
      <Row>
      <Col lg={2} sm={3} xs={2} >
       <Sidedrawer/>
      </Col>
        <Col lg={10} sm={9} xs={10}>
        <div className='rightmain'>
          <div className='heading' >
<h3 className='headingtext'>Good Morning {username}</h3>
{/* <img src={Avatar} alt='avat' /> */}
</div>
<div style={{backgroundColor:'#2D3748',height:'fit-content',marginTop:30,borderRadius:6,padding:'3%',paddingLeft:'5%',paddingRight:'5%'}}>
            <Card className="plan-details-card">
              <Card.Body>
                <div className="current-plan">
                  <h3>Current Active Plan</h3>
                  <h4>For the price of a lunch</h4>
                  <p>Reference Number: 233 256093212</p>
                  <p>Purchase Date & Time: 30-07-2024, 18:42:16</p>
                  <p>Payment Method: Card</p>
                  <p>Total Amount: $17.99</p>
                </div>
              </Card.Body>
            </Card>
            <div className="past-history">
              <h3>Past History</h3>
              <Card className="history-card">
                <Card.Body>
                  <h4>For the price of a lunch</h4>
                  <p>Reference Number: 233 256093212</p>
                  <p>Purchase Date & Time: 30-07-2024, 18:42:16</p>
                  <p>Payment Method: Card</p>
                  <p>Total Amount: $17.99</p>
                </Card.Body>
              </Card>
              {/* Repeat the above Card component for each history entry */}
            </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetails;
