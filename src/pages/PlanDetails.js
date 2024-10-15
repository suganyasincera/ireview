import React,{useState,useEffect} from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Sidedrawer from '../components/Sidedrawer';
import axios from 'axios';
const PlanDetails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('accessToken');
  const profile = useSelector((state) => state.form.getprofile);
  const handleBackToHome = () => {
    navigate('/home');
  };
  
  
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
              {planhistory.length > 0 ? (
                        planhistory.map((plan) => (
                          <div key={plan.id}>
              <Card className="history-card">
                <Card.Body>
                  <h4>For the price of a lunch</h4>
                  <p>Reference Number: 233 256093212</p>
                  <p>Purchase Date & Time: 30-07-2024, 18:42:16</p>
                  <p>Payment Method: Card</p>
                  <p>Total Amount: $17.99</p>
                </Card.Body>
              </Card>
              </div>))):(<div>
                        <p><strong>Plan:</strong>Free</p>
            
                      <p><strong>Total Amount:</strong>$0</p>
                      </div>)}
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
