import Button from 'react-bootstrap/Button';
import React from 'react'
import Logo from './assets/ireviwelogo.jpg'
import { IoMdAdd, IoMdPower } from "react-icons/io";
import PreviousResults from './PreviousResults';
import { useNavigate } from 'react-router-dom';
import { changeProfile, changeLoginResponse } from '../components/redux/FormSlice';
import { useDispatch } from 'react-redux';
export default function Sidedrawer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout=()=>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('storedEmail');
    localStorage.removeItem('username');
    dispatch(changeProfile({ name: '', email: '', userToken: '' }));
    dispatch(changeLoginResponse({ name: '', email: '', userToken: '' }));
  
    navigate("/")
  }
  return (
    <div className='sidedrawer'>
 <div >
  <div className='sidemainhead'>
    <img className='sidemainheadimg'  style={{ borderRadius:50}} src={Logo} alt='logoimg' />
  <h6 className='sidemainheadimgh6'>iRe-view.ai</h6>
      </div>
<div className='sidebuttonmain' >

  <Button className='sidedrawerbutton'  onClick={()=>navigate("/Home")}>
  <IoMdAdd size={20}/>
    Upload New Contract
  </Button>
  </div>
  <PreviousResults/>
 </div>
 <div style={{paddingLeft:20}}>
  <div className='sidedrawerlogoutmain' >
  <IoMdPower size={20} color='#FB5B5B'/>
 <h6 className='sidedrawerlogouth6 mt-2 '  style={{cursor:"pointer",}} onClick={logout}>Log out</h6>
 </div>

      <p className='sidedrawerversionstyle'>Version 1.0</p>
 </div>
    </div>
  )
}
