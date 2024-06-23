import '../App.css';
import React,{useRef} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidedrawer from '../components/Sidedrawer';
import Accordionprevious from '../components/Accordionprevious'
import { PiUpload } from "react-icons/pi";
import { IoPrintOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';
import Pdf from './Pdf'; // Import your PDF component

import jsPDF from 'jspdf';

import { toPng } from 'html-to-image';


function Previous() {
  
const  fileName = useSelector((state) => state.form.previous.fileName);
const  result = useSelector((state) => state.form.previous.reviewResult.reviewData);

const username = localStorage.getItem('username');

 // Function to handle print
 const componentRef = useRef();
 const pdfComponentRef = useRef();
 const handlePrint = useReactToPrint({
  content: () => componentRef.current,
});
// Function to handle share
// 
const handleShare = () => {
  handleConvertToPdf()
  if (navigator.share) {
    navigator.share({
      title: 'Share PDF',
      text: 'Check out this PDF',
      url: window.location.href
    })
      .then(() => console.log('Shared successfully'))
      .catch(error => console.error('Error sharing:', error));
  } else {
    alert('Sharing is not supported on this device.');
  }
};
const handleConvertToPdf = () => {
  console.log('Convert to PDF button clicked');
  if (!pdfComponentRef.current) return;
  toPng(pdfComponentRef.current)
  .then((dataUrl) => {
    console.log('Data URL:', dataUrl);
  // Create new jsPDF instance
  const pdf = new jsPDF();

  // Select the printed content from Pdf component

  // Add content to PDF
  pdf.addImage(dataUrl, 'PNG', 0, 0);

  // Save PDF
  pdf.save('generatedPdf.pdf');
})
.catch((error) => {
  console.error('Error converting to PDF:', error);
});
};

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
{/* <img src={Avatar} alt='avat' /> */}
</div>


<div style={{backgroundColor:'#2D3748',height:'fit-content',marginTop:30,borderRadius:6,padding:'3%',paddingLeft:'5%',paddingRight:'5%'}}>

<div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
    <h4 style={{color:'#ffffff'}}>{fileName}</h4>
    <div style={{display:'flex'}}>
        <div style={{paddingRight:20}}>
<PiUpload size={25} color='#ffffff'style={{cursor:"pointer"}}  onClick={handleShare}/>
</div>
<div>

<IoPrintOutline size={25} color='#ffffff' style={{cursor:"pointer"}}onClick={handlePrint}/>

</div>
    </div>



</div>

<div style={{paddingTop:20}}>
<Accordionprevious />
</div>

</div>

        </div>
      </Col>
    </Row>
    <div style={{ display: "none" }}> 
    <Pdf ref={componentRef} />
    </div>
    <div style={{ display: "none" }}> 
    <Pdf ref={pdfComponentRef} fileName={fileName} result={result}  />
    </div>
    </div>
  );
}

export default Previous;
