import React, { useState, useEffect } from 'react';
import './PricingTable.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidedrawer from '../components/Sidedrawer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import axios from 'axios';

const PricingTable = () => {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.form.profile);
  const login = useSelector((state) => state.form.loginResponse);
  const [plans, setPlans] = useState([]);
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('accessToken');

  const fetchResults = () => {
    axios
      .get("https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/planDetails", {
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          Authorization: token,
        },
      })
      .then((response) => setPlans(response.data))
      .catch((error) => console.error('Error fetching company data:', error));
  };

  const handleCheckout = (planId) => {
    axios
      .post(
        "https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/userDetails/createCheckoutSession",
        { planId: planId },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
            Authorization: token,
          },
        }
      )
      .then((response) => {
        if (response && response.data) {
          window.location.href = response.data; // Redirect to the URL from the API response
        } else {
          console.error('Error: Invalid response format', response);
        }
      })
      .catch((error) => console.error('Error creating checkout session:', error));
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className='App'>
      <Row>
        <Col lg={2} sm={3} xs={2}>
          <Sidedrawer />
        </Col>
        <Col lg={10} sm={9} xs={10}>
          <div className='rightmain'>
            <div className='heading'>
              <h3 className='headingtext'>Welcome {username}</h3>
            </div>
            <div className='mainpara'>
              <h3 className='headingtext'>Choose your plan</h3>
            </div>
            <Card className="plans">
              {plans.map((plan, index) => (
                <div key={index} className="plan">
                  <Row>
                    <Col xs={1} className="icon-col">
                      <FaCheckCircle className="icon" />
                    </Col>
                    <Col xs={8} className="description-col">
                      <h2>{plan.planName}</h2>
                      <p>{plan.description}</p>
                      {/* <p className="features">{plan.features}</p> */}
                    </Col>
                    <Col xs={3} className="price-col">
                      <h3>{plan.price.currencySymbol}{plan.price.amount} {plan.price.currency}{plan.price.label}</h3>
                      
                      {plan.price.label === false && (
                      <Button className="buy-btn" onClick={() => handleCheckout(plan.id)}>Buy Now</Button>)}
                    </Col>
                  </Row>
                </div>
              ))}
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default PricingTable;
