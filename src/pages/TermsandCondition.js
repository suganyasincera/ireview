import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '../App.css';

function TermsandCondition({ show, handleClose, onAccept }) {
  return (
    <div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{color: "#50C878",
    fontWeight: 500,
    fontSize: 25}}>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Insert your Terms and Conditions here */}
        <div>
        
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            Information collected</b> <br/> <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}> Geo-location tracker, PII, Credit Card
            Information, IP{" "}
      
          address, type of operating system, device ID, type of device, IMEI
          number and MAC address of the computer/device from where the Platform
          were accessed, cookies,</p>
          
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Consents </b> 
          <br/><p style={{color:"#5e6670",fontSize:15,fontWeight:400}}> use/store/process your information.<br/> 
          To share it with our vendors <br/>
          To send SMS on transactional matters <br/>
          To call – DND List of Telecom regulators <br/>
          Promotional / marketing calls<br/></p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>We use cookies and tracking technologies </b>
          <br/>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Declarations </b><br/>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          18+ Age <br/>
          Providing accurate information <br/></p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Disclaimers </b> <br/>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}> YOUR USE OF INFORMATION PROVIDED ON THE SITE IS SOLELY AT YOUR OWN
          RISK.<br/>
           Not legal services / practice of law in any jurisdiction.<br/>
            Not substitute to conventional lawyer consultation or representation.<br/>
             Does not constitute legal advice, consult your lawyer before taking any
          legal action.<br/>
           Not legal opinion<br/>
            No lawyer-client relationship intended<br/>
          IN NO EVENT SHALL WE BE LIABLE TO YOU OR ANYONE ELSE FOR ANY DECISION
          MADE OR ACTION TAKEN BY YOU RELYING ON SUCH INFORMATION.<br/>
           You shall not disregard legal advice or disregard or delay seeking legal
          representation by a lawyer due to any{" "}</p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>legal rights Awareness generation Service </b> <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>provided in our app.
          We are not responsible for any loss or inconvenience suffered by You
          directly or indirectly because of our Information Service.<br/></p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>No assurance given that: </b><br/>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Information on the platform is accurate. </b><br/>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>  no liability to You for any interruption or delay in access to
          platform.</p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Errors in platform will be corrected </b><br/>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Content in platform is virus or trojan free </b><br/>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            <br/>
            Your remedy – cancellation of service, refund of annual access fee
            paid by you.{" "}
          </b>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          We shall not and are not required to mediate or resolve any disputes
          or disagreements between You and other contracting party or employer.
          Disclaim liability in connection with employment disputes, wrongful
          termination disputes, workplace discrimination disputes.
          <br/>
           We do not provide any warranty as to the quality, suitability and
          appropriateness of any Advisory Services availed by You through the
          Platform</p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            
            Not endorsement, solicitation or advertising of any employer or
            lawyer or law firm.{" "}
          </b>
          <br/><p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          All third-party advertisements, hyperlinks or other redirection tools
          on the Platform
          <br/></p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Refund policy/ service charges </b>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>  You exercise reasonable diligence and practice judgment and common
          sense before committing to any contract.
          </p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Payment Gateway Disclaimer</b> <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}> We will not be responsible for any
          loss or damage to You due to Your</p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            use of the Payment Gateway on the Platform.</b> 
            <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Use of Platform and prohibited actions.</b><br/>
            <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}> Use of our IPR and logo No disparaging feedback</b> <br/>
            <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>You indemnify us for loss caused by you.</b><br/> 
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}> If you violate terms</b>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>- Our right to remove your access, forfeit fee without notice</p>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}> Right to vary terms </b><br/>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Privacy policy </b><br/>
          <b style={{color:"#2d3748",fontSize:15,fontWeight:700}}>Consumer complaints phone help line/email id.</b>
        </div>
        
      </Modal.Body>
      <Modal.Footer>
    
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onAccept(); // Call the callback function when the user accepts
            handleClose();
          }}
        >
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default TermsandCondition;
