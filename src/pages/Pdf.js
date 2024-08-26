import React, {  forwardRef} from 'react'
import '../App.css'
import pdflogo from "../components/assets/pdflogo.png";
import { useSelector } from 'react-redux';

const  Pdf = forwardRef((props,ref)=> {

  const  fileName = useSelector((state) => state.form.previous.fileName);
const  result = useSelector((state) => state.form.previous.reviewResult.reviewData);

  return(

    <div className='align' style={{marginTop:10}} ref={ref}>
 
        <img src={pdflogo}  alt='img'/>
       
      <h2 style={{display:'flex',alignItems:'center',justifyContent:'center'}}>{fileName}  </h2>
      <br />
      <div className='content'>
      <h4 className='color'>Summary</h4>
      <p>{result?result.summary:""}</p>
      <br />
      <h4 className='color'>Salary</h4>
      <p>{result?result.salary:""}</p>
      <br />
      <h4 className='color'>Incentive Plans</h4>
      <p>{result?result.incentiveplans:""}</p>
      <br />
      <h4 className='color'>Insurance</h4>
      <p>{result?result.insurance:""}</p>
      <br />
      <h4 className='color'>Other Monetary Benefits</h4>
      <p>{result?result.othermonetarybenifits:""}</p>
      <br />
      <h4 className='color'>Non-Compete and Exclusivity Clauses</h4>
      <p>{result?result.noncompetency:""}</p>
      <br />
      <h4 className='color'>Performance Monitoring</h4>
      <p>{result?result.performance:""}</p>
      <br />
      <h4 className='color'>Causes For Termination</h4>
      <p>{result?result.causes:""}</p>
      <br />
      <h4 className='color'>Notice Period</h4>
      <p>{result?result.notice:""}</p>
      <br />
      <h4 className='color'>Non-Solicitation</h4>
      <p>{result?result.nonsoliicitation:""}</p>
      <br />
      <h4 className='color'>Bond Period</h4>
      <p>{result?result.termofagreement:""}</p>
      <br />
      </div>
    </div>
  
  );
  
});
export default Pdf;