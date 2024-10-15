import React, { useState, useEffect } from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from '@react-oauth/google';
import TermsandCondition from './TermsandCondition';
import PrivacyPolicy from './PrivacyPolicy';
import goo from "../components/assets/gpt_Google icon.png";
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { changeProfile, changeLoginResponse } from '../components/redux/FormSlice'; 
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';

const defaultTheme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showTCModal, setShowTCModal] = useState(false);
  const [showPPModal, setShowPPModal] = useState(false);
  const [canAcceptTerms, setCanAcceptTerms] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [showPassword, setShowPassword] = React.useState(false);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  const apiUrl = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleAcceptTerms = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };
  
  const handleOpenTCModal = () => setShowTCModal(true);
  const handleCloseTCModal = () => setShowTCModal(false);
  
  const handleOpenPPModal = () => setShowPPModal(true);
  const handleClosePPModal = () => setShowPPModal(false);

  const googlelogin = async (codeResponse) => {
    try {
      const response = await fetch(
        "https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/userDetails/googleSignIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ token: codeResponse.access_token }),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        if (responseData.id != null) {
          localStorage.setItem('accessToken', responseData.id);
          localStorage.setItem('username', responseData.firstName);
          localStorage.setItem('storedEmail', responseData.email);
          
          dispatch(changeProfile({
            name: responseData.firstName,
            email: responseData.email,
            userToken: responseData.id,
          }));
          navigate("/Home");
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'This email is already registered. Please login using password.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid login.',
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred during login.',
      });
    }finally {
      setIsLoading(false); // Set loading state to false
    }
  };
  
  const login = useGoogleLogin({
      onSuccess: (codeResponse) => {
          setIsGoogleLogin(true); // Set to true when Google login is successful
          if (isTermsAccepted) {
            setIsGoogleLogin(true)
              googlelogin(codeResponse);
          } else {
              Swal.fire({
                  icon: 'warning',
                  title: 'Hey',
                  text: 'Please accept the Terms and Conditions and Privacy Policy before login.',
              });
          }
      },
      onError: (error) => console.log('Login Failed:', error),
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    if(!email.trim() || !password.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email and password are required.',
      });
      return;
    }
  
   if (checkValidEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid email format.',
      });
      return;
    }
 
    setIsLoading(true); // Set loading state to true
    try {
      const response = await fetch(
        apiUrl + "/userDetails/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
  
      if (rememberMe) {
        localStorage.setItem('email', email);
      } else {
        localStorage.removeItem('email');
      }

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.id != null) {
          localStorage.setItem('accessToken', responseData.id);
          localStorage.setItem('username', responseData.firstName);
          localStorage.setItem('storedEmail', responseData.email);
          localStorage.setItem('balanceReview', responseData.balanceReview);
          localStorage.setItem('subscriptionEnds', responseData.subscriptionEnds);
          navigate("/Home");
          dispatch(changeLoginResponse({
            name: responseData.firstName,
            email: responseData.email,
            userToken: responseData.id,
            balanceReview: responseData.balanceReview,
            subscriptionEnds: responseData.subscriptionEnds,
          }));
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid credentials.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid login.',
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred during login.',
      });
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };
  
  const handleForgotPassword = async () => {
    
    if (email) {
      try {
        const response = await fetch(
          "https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/userDetails/forgotPassword",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({ email: email }),
          }
        );
        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Password reset link sent to your email.',
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Failed to send password reset link.',
          });
        }
      } catch (error) {
        console.error("Error during forgot password:", error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'An error occurred during forgot password request.',
        });
      }
    }
  };

  return (
      <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
              <CssBaseline />
              <Grid item xs={12} md={6} className='img'
                  sx={{
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                      backgroundColor: '#2D3748',
                  }}
              />
              <Grid item xs={12} md={6} component={Paper} elevation={0} square>
                  <Box
                      sx={{
                          my: 4,
                          mx: { xs: 2, sm: 4, md: 12 },
                          display: 'flex',
                          flexDirection: 'column',
                      
                      }}
                  >
                      <Typography component="h1" variant="h5" style={{ alignItems: 'flex-start', display: 'flex', fontSize: 32, fontWeight: 700 }}>
                        Login
                      </Typography>
                      <p style={{ display: 'flex', marginTop: 5 }}>
                          Don't have an account? &nbsp;
                          <span style={{ color: '#50C878', cursor: 'pointer' }} onClick={() => navigate("/Signup")}>
                              Sign up
                          </span>
                      </p>
                      <Button
                              fullWidth
                              variant="outlined"
                              color="primary"
                              sx={{ mt: 7, mb: 3 }}
                              style={{ height: 48, width: '100%', borderRadius: 4, display: 'flex', borderColor: '#DADCE0', color: '#3C4043' }}
                              startIcon={<img src={goo} alt="Google Icon" style={{ width: 20, height: 20 }} />}
                              onClick={() => {
                                  if (isTermsAccepted) {
                                      login();
                                  } else {
                                      Swal.fire({
                                          icon: 'warning',
                                          title: 'Hey',
                                          text: 'Please accept the Terms and Conditions and Privacy Policy before login.',
                                      });
                                  }
                              }}
                          >
                              Sign in with Google
                          </Button>
                          <Divider sx={{ mt: 3, mb: 3 }} style={{ color: '#707070' }}>Or Login with Email</Divider>
                      <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 4, alignItems: 'center', justifyContent: 'center', }}>
                      <TextField style={{ height: 48, width: '100%', borderRadius: 5 }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={handleEmailChange} // Add this line
              />
                          <TextField sx={{ mt: 5 }} style={{ height: 48, width: '100%', borderRadius: 5 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={password}
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                onChange={handlePasswordChange} // Add this line
                InputProps={{
                 endAdornment: (
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility />:<VisibilityOff />}
                    </IconButton>
                 )
                }}
              />
              <Grid container style={{ alignItems: 'center' }} sx={{ mt: 3 }}>
              <Grid item xs>
              <FormControlLabel style={{ display: 'flex', color: '#2A2A2A' }}
                    control={<Checkbox value="remember" />}
                    label="Remember me"
                    checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
                 />
                </Grid>
                <Grid item>
                 <Link href="#" variant="body2" style={{ color: '#50C878' }}onClick={handleForgotPassword}>
                    {"Forget Password?"}
                 </Link>
                </Grid>
              </Grid>
                          <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              color="primary"
                              sx={{ mt: 5, mb: 2 }}
                              style={{ backgroundColor: '#50C878', color: '#FFFFFF', height: 48, width: '100%', borderRadius: 5 }}
                          >
                              {isLoading ? "Logging in..." : "Login"}
                          </Button>
                          </Box>
                        
                    
                         
                          <FormControlLabel
                              control={<Checkbox checked={isTermsAccepted} readOnly disabled onChange={handleAcceptTerms} />}
                              label={
                                  <>
                                      I agree to the{' '}
                                      <Link href="#" onClick={handleOpenTCModal}>
                                          Terms and Conditions
                                      </Link>{' '}
                                      and{' '}
                                      <Link href="#" onClick={handleOpenPPModal}>
                                          Privacy Policy
                                      </Link>
                                  </>
                              }
                          />
                          <TermsandCondition show={showTCModal} handleClose={handleCloseTCModal} onAccept={handleAcceptTerms} checked={isTermsAccepted} />
                          <PrivacyPolicy showPP={showPPModal} handleClosePP={handleClosePPModal} onAcceptPP={handleAcceptTerms} checked={isTermsAccepted} />
                      </Box>
                  
              </Grid>
          </Grid>
      </ThemeProvider>
  );
}