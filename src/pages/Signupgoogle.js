import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
  
import Signup from './Signup';

function Signupgoogle() {
  return (
    <GoogleOAuthProvider clientId="976277479082-mipb6uue99hddbd9gbo4qddac606amqv.apps.googleusercontent.com"> {/* Provide the client ID */}
      <Signup />
    </GoogleOAuthProvider>
  );
}

export default Signupgoogle;
