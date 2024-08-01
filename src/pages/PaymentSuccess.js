import './PaymentSuccess.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidedrawer from '../components/Sidedrawer';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [params, setParams] = useState({});
  const [message, setMessage] = useState('');
  const username = localStorage.getItem('username');

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
      date: formattedDate,
    });

    if (success === 'true') {
      setMessage('Payment Successful!');
    } else {
      setMessage('Payment Failed. Please try again.');
    }
  }, [location.search]);

  return (
    <div className='App'>
      <Row style={{width:"100%"}} >
        <Col lg={2} sm={3} xs={2} >
          <Sidedrawer />
        </Col>
        <Col lg={10} sm={9} xs={10} style={{backgroundColor: "#2D3748"}}>
          <div className='rightmain'>
            <div className='heading'>
              <h3 className='headingtext'>Welcome {username}</h3>
            </div>
            <div className='main-content' style={{ backgroundColor: '#2D3748', height: 'fit-content', marginTop: 30, borderRadius: 6}}>
              <Card style={{ alignItems: 'center',width:"60%",justifyContent:"center",display:"flex"}}>
                <Card.Body>
                  {params.success === 'true' ? (
                    <div style={{alignItems:"center",display:"flex",justifyContent:"center",marginTop:5,marginBottom:9}}>
                      <FaCheckCircle className='success-icon' />
                    </div>
                  ) : (
                    <div style={{alignItems:"center",display:"flex",justifyContent:"center",marginTop:5,marginBottom:9}}>
                      <FaTimesCircle className='failure-icon' />
                    </div>
                  )}
                  <h2>{message}</h2>
                  <hr />
                  {params.success === 'true' ? (
                    <div className='payment-details'>
                      <p>Ref Number: {params.paymentToken}</p>
                      <p>Plan Name: {params.subscriptionPlan}</p>
                      <p>Payment Time: {params.date}</p>
                      <p>Payment Status: {params.paymentStatus}</p>
                      <p>Total Amount: ${params.price}</p>
                    </div>
                  ) : (
                    <div className='payment-details'>
                      <p>Ref Number: {params.paymentToken}</p>
                      <p>Plan Name: {params.subscriptionPlan}</p>
                      <p>Payment Time: {params.date}</p>
                      <p>Payment Status: {params.paymentStatus}</p>
                    </div>
                  )}
                  <Button className='back-home-btn' onClick={handleBackToHome}>
                    Back to Home
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentSuccess;
