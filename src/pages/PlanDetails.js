import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Sidedrawer from '../components/Sidedrawer';
import axios from 'axios';
import { Divider } from '@mui/material';

const PlanDetails = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('accessToken');
  const profile = useSelector((state) => state.form.getprofile);
  console.log("profilehis", profile);

  const handleBackToHome = () => {
    navigate('/home');
  };

  // Find the highest plan if profile data exists
  const highestPlan = Array.isArray(profile) && profile.length > 0 
    ? profile.reduce((prev, current) => (prev.id > current.id ? prev : current)) 
    : null;

  // Format the subscription start date
  const formattedDate = highestPlan 
  ? (() => {
      const date = new Date(highestPlan.subscriptionStarts);
      const day = date.getDate(); // Get the day
      const month = date.toLocaleString('en-GB', { month: 'short' }); // Get the month in short format
      const year = date.getFullYear(); // Get the full year
      return `${day} - ${month} - ${year}`; // Concatenate with spaces and dashes
    })() 
  : "Not Available";


  return (
    <div className="App">
      <Row>
        <Col lg={2} sm={3} xs={2}>
          <Sidedrawer />
        </Col>
        <Col lg={10} sm={9} xs={10}>
          <div className='rightmain'>
            <div className='heading'>
              <h3 className='headingtext'>Good Morning {username}</h3>
            </div>
            <div style={{ backgroundColor: '#2D3748', height: 'fit-content', marginTop: 30, borderRadius: 6, padding: '3%', paddingLeft: '5%', paddingRight: '5%' }}>
              <h3 style={{ color: "#ffff" }}>Active Plan</h3>

              {/* Conditionally render the active plan details if highestPlan exists */}
              {highestPlan ? (
                <Card className="plan-details-card">
                  <Card.Body>
                    <div className="current-plan">
                      <h4>{highestPlan.subscriptionPlan}</h4>
                      <p>Reference Number: {highestPlan.paymentToken}</p>
                      <p>Purchase Date & Time: {formattedDate}</p>
                      <p>Total Amount: {highestPlan.price}</p>
                    </div>
                  </Card.Body>
                </Card>
              ) : (
                <p style={{ color: '#fff' }}>No active plan available</p>
              )}

              <div className="past-history">
                <h3 style={{ color: "#ffff" }}>Past History</h3>

                {/* Make this div scrollable */}
                <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {/* Render past plans if any */}
                  {Array.isArray(profile) && profile.length > 0 ? (
                    profile.map((plan) => (
                      <Card className="history-card" key={plan.id}>
                        <Card.Body>
                          <p>Reference Number: {plan.paymentToken}</p>
                          <p>Purchase Date & Time: {(() => {
      const date = new Date(highestPlan.subscriptionStarts);
      const day = date.getDate(); // Get the day
      const month = date.toLocaleString('en-GB', { month: 'short' }); // Get the month in short format
      const year = date.getFullYear(); // Get the full year
      return `${day} - ${month} - ${year}`; // Concatenate with spaces and dashes
    })()}</p>
                          <p>Payment Status: {plan.paymentStatus}</p>
                          <p>Total Amount: {plan.price}</p>
                        </Card.Body>
                        <Divider/>
                      </Card>
                      
                    ))
                  ) : (
                    <p style={{ color: '#fff' }}>No past history available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetails;
