import React from 'react';
import {screen, render,fireEvent, getByLabelText } from '@testing-library/react';


import Login from './Login';

// Mocking dependencies
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
jest.mock('@react-oauth/google', () => ({
  useGoogleLogin: jest.fn(),
}));

describe('Login component', () => {
  test('renders correctly', () => {
     render(<Login />);
    const headinglog= screen.getByRole('heading',{name:'Login'});
 expect(headinglog).toBeInTheDocument();
     const googlesignin = screen.getByText('Sign-in with Google',{name:'Sign-in with Google'});
   expect(googlesignin).toBeInTheDocument();
  
   const remembertext= screen.getByText('Remember me')
   expect(remembertext).toBeInTheDocument();
  const forgetpassword= screen.getByText('Forget Password?')
  expect(forgetpassword).toBeInTheDocument();

  });

  test('allows user to toggle password visibility', () => {
    render(<Login />);
    const emailInput = screen.getByRole('textbox');
    expect(emailInput).toBeInTheDocument();
    const passwordInput = screen.getByRole('textbox');
    expect(passwordInput).toBeInTheDocument();
const remember = screen.getByRole('checkbox');
expect(remember).toBeInTheDocument();

  });
  test('calls handleLogin when the button is clicked', () => {
    const handleLoginMock = jest.fn(); // Create a mock function
    
   render(<Login handleLogin={handleLoginMock} />);
 
    const loginButton =screen.getByText('Login');
    fireEvent.click(loginButton);
  
    expect(handleLoginMock).toHaveBeenCalled(1);
  });


  // Additional test cases can be added for various scenarios
});


