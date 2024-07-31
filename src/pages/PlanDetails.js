import React from 'react';
import './PlanDetails.css';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

const PlanDetails = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/home');
  };

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
              <h3>Past History (12)</h3>
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
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetails;
