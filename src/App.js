import React, { useEffect } from 'react';
import './App.css';
import {Route,Routes,Navigate,useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Result from './pages/Result';
import Previous from './pages/Previous';
import Pdf from './pages/Pdf';
import ResultPdf from './pages/ResultPdf';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './pages/CheckoutForm';
import Return from './components/Return';
import Login from './pages/Login';
import LoginGoogle from './pages/LoginGoogle';
import PrivateRoute from './pages/PrivateRoute';

import { useSelector } from 'react-redux';
function App() {
  const stripePromise = loadStripe('pk_test_51Ou7j0SIgrfsrVy23Jru7s4v44HEHwSE7yrts3yHXng0m09mAJOYqznTkwR2tfEl9MX5VxveN7hzY2pHe3ykr38M00bbji3gDO');
  const isAuthenticated = useSelector((state) => !!state.form.loginResponse.userToken);
  const navigate = useNavigate();
  useEffect(() => {
    // Allow direct access to the signup page without requiring a token
    if (!isAuthenticated && window.location.pathname!== '/Signup') {
      navigate('/');
    }
  
    // Prevent access to the home page without logging in
    if (isAuthenticated && window.location.pathname === '/') {
      navigate('/Home');
    }
  }, [isAuthenticated, navigate, window.location.pathname]);
  
  return (
  
        <Elements stripe={stripePromise} >
  
    <Routes>
     <Route exact path='/' element={<LoginGoogle/>} />
      <Route exact path='/Home' element={
      <PrivateRoute>
      <Home/>
      </PrivateRoute>} />
      <Route exact path='/Result' element={<Result/>} />
      <Route exact path='/Previous' element={<Previous/>} />
      <Route exact path='/Signup' element={<Signup/>} />
      <Route exact path='/Pdf' element={<Pdf/>} />
      <Route exact path='/ResultPdf' element={<ResultPdf/>} />
      <Route exact path='/CheckoutForm' element={<CheckoutForm/>} /> 
      <Route exact path="/Return" element={<Return />} />
    </Routes>

    </Elements>
    
   
    

  );
}

export default App;
