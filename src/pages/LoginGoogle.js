import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import the provider
import Login from './Login'; // Assuming Login component is defined in Login.js

function LoginGoogle() {
  return (
    <GoogleOAuthProvider clientId="976277479082-mipb6uue99hddbd9gbo4qddac606amqv.apps.googleusercontent.com"> {/* Provide the client ID */}
      <Login />
    </GoogleOAuthProvider>
  );
}

export default LoginGoogle;
