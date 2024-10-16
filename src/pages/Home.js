import '../App.css';
import React,{useState,useEffect} from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidedrawer from '../components/Sidedrawer';
import Fileupload from '../components/Fileupload';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import * as pdfjs from "pdfjs-dist";
import { useDispatch, useSelector } from 'react-redux';
import {changeGetProfile } from '../components/redux/FormSlice';
import { Navigation } from '@mui/icons-material';
import axios from 'axios';
const workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[planhistory,setPlanhistory]=useState([]);
  const profile = useSelector((state) => state.form.profile);
  const login = useSelector((state) => state.form.loginResponse);
  const getprofile = useSelector((state) => state.form.getprofile);
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('accessToken');
  console.log("profile", profile);
  console.log("login", login);
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const fetchResults = () => {

    
    axios
      .get(apiUrl+"/userDetails/subscriptionHistory", {
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          Authorization: token,  // Ensure token is correctly fetched
        },
      })
      .then((response) => {
        console.log('API response:', response.data);
        setPlanhistory(response.data);  
        dispatch(changeGetProfile(response.data));// Ensure correct data structure
      })
      .catch((error) => {
        console.error('Error fetching subscription history:', error);
      });
  };
 
  useEffect(() => {
    fetchResults();
  console.log("history",planhistory);
}, []);
  
  const highestPlan = planhistory.length > 0 ? planhistory.reduce((prev, current) => {
    return (prev.id > current.id) ? prev : current;
  }) : null;

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


  // Default values in case any of these are null


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
              <Dropdown align="end" className="profile-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{ display: "flex", alignItems: "center" }}>
                  <FaUserCircle size={30} className="profile-icon" />
                  <text style={{ paddingLeft: 10, paddingRight: 10 }}>{username}</text>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div className="plan-details">
                      <h4>Plan Details</h4>
                      {highestPlan ? (
                        <div>
                      <p><strong>Plan:</strong> {highestPlan.subscriptionPlan}</p>
                      <p><strong>Purchase Date & Time:</strong>{formattedDate}</p>
                      <p><strong>Total Amount:</strong> {highestPlan.price}</p>
                      </div>
                    ) : (
                      <div>
                        <p><strong>Plan:</strong> Free</p>
                        <p><strong>Total Amount:</strong> $0</p>
                      </div>
                    )}
                      <Dropdown.Divider />
                      
                      <h4 onClick={() => { navigate("/PlanDetails") }}>Plan History</h4>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>

            <div className='mainpara'>
              <p className='parastyle'>
                Reviewing an employment contract is crucial to safeguarding your rights and ensuring a clear
                understanding of your job responsibilities. With our AI-powered software, you can review your
                contract in less than 5 minutes, making informed decisions with ease. Don't risk surprises or
                unreasonable clauses - review your contract now.
              </p>
            </div>
            <div style={{ padding: '3%' }}>
              <Fileupload />
            </div>
          </div>
        </Col>
      </Row>

      <style jsx>{`
        .profile-dropdown {
          position: relative;
        }

        .profile-icon {
          color: #343a40;
          cursor: pointer;
        }

        .mainpara {
          padding: 20px;
        }

        .parastyle {
          font-size: 16px;
          line-height: 1.6;
          color: #333;
        }

        .rightmain {
          padding: 20px;
        }

        .plan-details {
          font-size: 14px;
          color: #333;
        }

        .plan-details h4 {
          margin-bottom: 10px;
          font-size: 16px;
          font-weight: bold;
        }

        .plan-details p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}

export default Home;
