import React, {forwardRef} from 'react'
import '../App.css'
import pdflogo from "../components/assets/pdflogo.png";
import { useSelector } from 'react-redux';

const  ResultPdf = forwardRef((props,ref)=> {

  const fileName = useSelector((state) => state.form.fileName);
  let apiresponse=[];
  apiresponse = useSelector((state) => state.form.apiresponse);
  const firstFileName = fileName.length > 0 ? fileName[0].name : '';
console.log("apipdf",apiresponse)

  return(

    <div className='align' style={{marginTop:10}} ref={ref}>
 
        <img src={pdflogo}  alt='img' style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:70}}/>
       
      <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{firstFileName}  </h2>
      <br />
      <div className='content'>
      {apiresponse.map((item, index) => (
         <div key={index}>
      <h4 className='color'>{item.label}</h4>
      <p>{item.content}</p>
      <br />
      </div>))}

      </div>
    </div>
  
  );
  
});
export default ResultPdf;