
import './PaymentSuccess.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle, } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [params, setParams] = useState({});
  const [message, setMessage] = useState('');
  const handleBackToHome = () => {
    navigate('/home');
  };
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const success = searchParams.get('success');
    const sessionId = searchParams.get('sessionId');
    const paymentToken = searchParams.get('paymentToken');
    const subscriptionPlan = searchParams.get('subscriptionPlan');
    const subscriptionStarts = searchParams.get('subscriptionStarts');
    const subscriptionEnds = searchParams.get('subscriptionEnds');
    const paymentStatus = searchParams.get('paymentStatus');
    const price = searchParams.get('price');
    const date = searchParams.get('date');
    const formattedDate = new Date(date).toLocaleString();
    setParams({
      success,
      sessionId,
      paymentToken,
      subscriptionPlan,
      subscriptionStarts,
      subscriptionEnds,
      paymentStatus,
      price,
      date:formattedDate,
    });

    if (success === 'true') {
      setMessage('Payment Successful!');
    } else {
      setMessage('Payment Failed. Please try again.');
    }
  }, [location.search]);
  return (
    <div className="App">
      <Row>
        <Col lg={2} sm={3} xs={2} className="sidebar">
          <div className="sidebar-content">
            <div className="logo">
              <img src="/path/to/logo.png" alt="iReview.ai Logo" />
            </div>
            <Button className="upload-btn">Upload New Contract</Button>
            <div className="logout">
              <Button className="logout-btn">Log out</Button>
              <span className="version">Version 1.0</span>
            </div>
          </div>
        </Col>
        <Col lg={10} sm={9} xs={10}>
          <div className="main-content">
            <Card className="payment-card">
              <Card.Body>
                {params.success === 'true' ?(
                <div>
                  <FaCheckCircle className="success-icon" />
                </div>):(<div>
                  <FaTimesCircle className="failure-icon" />
                </div>)}
                <h2>{message}</h2>
                <h3>$17.99</h3>
                <hr />
                {params.success === 'true' ? (
                <div className="payment-details">
                  <p>Ref Number: {params.paymentToken}</p>
                  <p>Plan Name: {params.subscriptionPlan}</p>
                  <p>Payment Time: {params.date}</p>
                  <p>Payment Status: {params.paymentStatus}</p>
              
                  <p>Total Amount: {params.price}</p>
                </div>):(
                  <div className="payment-details">
                  <p>Ref Number: {params.paymentToken}</p>
                  <p>Plan Name: {params.subscriptionPlan}</p>
                  <p>Payment Time: {params.date}</p>
                  <p>Payment Status: {params.paymentStatus}</p>
              
          
                </div>
                )}
                <Button className="back-home-btn" onClick={handleBackToHome}>
                  Back to Home
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentSuccess;
