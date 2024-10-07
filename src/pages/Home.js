import '../App.css';
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidedrawer from '../components/Sidedrawer';
import Fileupload from '../components/Fileupload';
import Dropdown from 'react-bootstrap/Dropdown';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import  * as pdfjs from "pdfjs-dist";
import { Navigation } from '@mui/icons-material';
const workerSrc ="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
 pdfjs.GlobalWorkerOptions.workerSrc= workerSrc;
function Home() {
  const navigate = useNavigate();
  const profile = useSelector((state) => state.form.profile);
  const login = useSelector((state) => state.form.loginResponse);
  console.log("profile",profile);
  console.log("login",login);
        const username = localStorage.getItem('username');
      


 


  return (
   <div className='App'>
    <Row>
      <Col lg={2} sm={3} xs={2} >
       <Sidedrawer/>
      </Col>

      <Col lg={10} sm={9} xs={10} >
        <div className='rightmain'>
          <div className='heading' >
<h3 className='headingtext'>Welcome {username}</h3>
<Dropdown align="end" className="profile-dropdown">
                <Dropdown.Toggle variant="light" id="dropdown-basic" style={{display:"flex",alignItems:"center"}}>
                  <FaUserCircle size={30} className="profile-icon"  />
                  <text style={{paddingLeft:10,paddingRight:10}}>{username}</text>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                
    
                  <Dropdown.Item href="#/action-1">
                    <div className="plan-details">
                      <h4>Plan Details</h4>
                      <p><strong>Plan:</strong> For the price of a lunch</p>
                      <p><strong>Reference Number:</strong> 233 256093212</p>
                      <p><strong>Purchase Date & Time:</strong> 30-07-2024, 18:42:16</p>
                      <p><strong>Total Amount:</strong> $17.99</p>
                      <Dropdown.Divider />
                      <h4 onClick={()=>{navigate("/PlanDetails")}}>Plan History</h4>
                    </div>

                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
</div>

<div className='mainpara'>
<p className='parastyle'>
Reviewing an employment contract is crucial to safeguarding your rights and ensuring a clear
 understanding of your job responsibilities. With our AI-powered software, you can review your
  contract in less than 5 minutes, making informed decisions with ease. Don't risk surprises or 
  unreasonable clauses - review your contract now
</p>
</div>
<div style={{padding:'3%'}}>
  <Fileupload/>
</div>

        </div>
      </Col>
    </Row>
    <style jsx>{`
        // .heading {
        //   display: flex;
        //   justify-content: space-between;
        //   align-items: center;
        //   padding: 20px;
        //   background-color: #f8f9fa;
        // }

        // .headingtext {
        //   margin: 0;
        //   font-size: 24px;
        //   font-weight: bold;
        // }

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
