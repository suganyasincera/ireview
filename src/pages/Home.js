import '../App.css';
import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidedrawer from '../components/Sidedrawer';
import Fileupload from '../components/Fileupload';

import {useSelector } from 'react-redux';

import  * as pdfjs from "pdfjs-dist";
const workerSrc ="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";
 pdfjs.GlobalWorkerOptions.workerSrc= workerSrc;
function Home() {
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
{/* <img src={Avatar} alt='avat' /> */}
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
    </div>
  );
}

export default Home;
