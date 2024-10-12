import React, { useEffect } from 'react';
import './App.css';
import {Route,Routes,Navigate,useNavigate,useLocation } from 'react-router-dom';
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
import PricingTable from './pages/PricingTable';
import PaymentSuccess from './pages/PaymentSuccess';

import PlanDetails from './pages/PlanDetails';

import { useSelector } from 'react-redux';
function App() {
  const stripePromise = loadStripe('pk_live_51PiW61BXJEI3LbRpzB5enbRqNT9huzcJz6ukfMfXR4LiuxAW7zzxcLfri3P6kOD6qXjlO5MQdwW8gYi0Sr7eJP3900SCM2cD7d');
  //const stripePromise = loadStripe('pk_test_51PiW61BXJEI3LbRpLWSFcDhRBYbwh4KBkemAyYhZrOlEVXdZvSePkAhcXvQn8v8vTfvWvZwDxyszaB48nUP49Nit00qcGiNMCU');
  const isAuthenticated = useSelector((state) => !!state.form.loginResponse.userToken || !!state.form.profile.userToken)
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    // Allow direct access to the signup page without requiring a token
    if (!isAuthenticated && location.pathname!== '/Signup') {
      navigate('/');
    }
  
    // Prevent access to the home page without logging in
    if (isAuthenticated && (location.pathname === '/'&& location.pathname=== '/Signup')) {
      navigate('/Home');
    }
  }, [isAuthenticated, navigate,location.pathname]);
  
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
      <Route exact path="/PricingTable" element={<PricingTable />} />
      <Route exact path="/PricingTable/PaymentSuccess" element={<PrivateRoute><PaymentSuccess /></PrivateRoute>} />
      
      <Route exact path="/PlanDetails" element={<PlanDetails />} />
    </Routes>

    </Elements>
    
   
    

  );
}

export default App;
