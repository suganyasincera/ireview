import '../App.css';
import React,{useRef} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import Sidedrawer from '../components/Sidedrawer';
import Accordion from '../components/Accordion'


import { PiUpload } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { useReactToPrint } from 'react-to-print';
import ResultPdf from './ResultPdf'; // Import your PDF component

function Result() {
  
  const fileName = useSelector((state) => state.form.fileName);
  const username = localStorage.getItem('username');
  const firstFileName = fileName.length > 0 ? fileName[0].name : '';
  console.log("filename",firstFileName)
  const componentRef = useRef();
 const handlePrint = useReactToPrint({
  content: () => componentRef.current,
});
// Function to handle share
const handleShare = async () => {

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'Share Document',
        text: 'Check out this document:',
        url: window.location.href, // You can replace this with the URL of the document you want to share
      });
      console.log('Successful share');
    } catch (error) {
      console.log('Error sharing', error);
    }
  } else {
    console.log('Web Share API not supported');
  }
};
  // Function to handle the upload action
  

  return (
   <div className='App'>
    <Row>
      <Col lg={2} sm={3} xs={2} >
       <Sidedrawer/>
      </Col>

      <Col lg={10} sm={9} xs={10} >
        <div className='rightmain'>
          <div className='heading' >
<h3 className='headingtext'>Good Morning {username}</h3>
</div>


<div style={{backgroundColor:'#2D3748',height:'fit-content',marginTop:30,borderRadius:6,padding:'3%',paddingLeft:'5%',paddingRight:'5%'}}>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <h4 style={{color:'#ffffff'}}>{firstFileName}</h4>
    <div style={{display:'flex'}}>
        <div style={{paddingRight:20,cursor:"pointer"}}>
<PiUpload size={25} color='#ffffff' style={{cursor:"pointer"}} onClick={handleShare} />
</div>
<div onClick={handlePrint}style={{cursor:"pointer"}}>
<IoPrintOutline size={25} color='#ffffff'  />
</div>
    </div>



</div>

<div style={{paddingTop:20}}>
<Accordion />
</div>

</div>

        </div>
      </Col>
    </Row>
    <div style={{ display: "none" }}> 
    <ResultPdf ref={componentRef} />
    </div>

    </div>
  );
}

export default Result;
