import React from 'react';
import "./PricingTable.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidedrawer from '../components/Sidedrawer';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap'
const plans = [
  {
    title: 'For the price of a coffee',
    description: 'Know what you are signing up for. Know the details of your employment contract, compensation, performance incentives, non-compete and other clauses you must be aware and careful about.',
    price: '$5.99',
    features: 'Review 1 agreement, continued online access anytime you need the documents or the summary.',
    tier: 'Tier 1'
  },
  {
    title: 'For the price of a lunch',
    description: 'Know what you are signing up for. Know the details of your employment contract, compensation, performance incentives, non-compete and other clauses you must be aware and careful about.',
    price: '$17.99',
    features: 'Review 5 agreements, continued online access anytime you need the documents or the summary.',
    tier: 'Tier 2'
  },
  {
    title: 'Anytime buffet, pay for 1 meal a month',
    description: 'Know what you are signing up for. Know the details of your employment contract, compensation, performance incentives, non-compete and other clauses you must be aware and careful about.',
    price: '$19.99/month or $175/year',
    features: 'Review unlimited agreements, continued online access anytime you need the documents or the summary. Cancel any time.',
    tier: 'Tier 3'
  }
];

const PricingTable = () => {
    const navigate = useNavigate();
  const profile = useSelector((state) => state.form.profile);
  const login = useSelector((state) => state.form.loginResponse);
  console.log("profile", profile);
  console.log("login", login);
  const username = localStorage.getItem('username');
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
              {/* <img src={Avatar} alt='avat' /> */}
            </div>

            <div className='mainpara'>
              <h3 className='headingtext'>Choose your plan</h3>
            </div>
            <Card className="plans">
              {plans.map((plan, index) => (
                <div key={index} className="plan">
                  <h2>{plan.title}</h2>
                  <p>{plan.description}</p>
                  <h3>{plan.price}</h3>
                  <p className="features">{plan.features}</p>
                  <Button className="buy-btn" onClick={()=>navigate("./CheckoutForm")}>Buy Now</Button>
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
