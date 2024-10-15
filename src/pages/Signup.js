import React, { useRef } from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import goo from "../components/assets/gpt_Google icon.png";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import PasswordStrengthBar from 'react-password-strength-bar';
import TermsandCondition from './TermsandCondition';
import PrivacyPolicy from './PrivacyPolicy';
import { useGoogleLogin} from '@react-oauth/google';
import { changeProfile,changeLoginResponse } from '../components/redux/FormSlice';
import { useDispatch } from 'react-redux';
const defaultTheme = createTheme();

export default function Signup() {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const dispatch=useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState({});
  const [passwordStrength, setPasswordStrength] = React.useState(0);
  const [showTCModal, setShowTCModal] = React.useState(false);
  const [showPPModal, setShowPPModal] = React.useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [canAcceptTerms, setCanAcceptTerms] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [ user, setUser ] = React.useState([]);
  const [isGoogleLogin, setIsGoogleLogin] =React.useState(false);
  const navigate = useNavigate();
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAcceptTerms = () => {
    setIsTermsAccepted(!isTermsAccepted);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOpenTCModal = () => setShowTCModal(true);
  const handleCloseTCModal = () => setShowTCModal(false);
  
  const handleOpenPPModal = () => setShowPPModal(true);
  const handleClosePPModal = () => setShowPPModal(false);
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setIsGoogleLogin(true); 
      setUser(codeResponse);
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
const googlelogin = async(codeResponse)=>{
  setIsLoading(true); // Set loading state to true
  try {
    const response = await fetch(
     "https://1vfng64njh.execute-api.us-west-1.amazonaws.com/devApi/userDetails/googleSignIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify({"token":codeResponse.access_token}),
      }
    );
    console.log("res",response)
    if (response.ok) {
    

      const responseData = await response.json();
      if(responseData.id!=null){
      console.log("response",responseData);
     localStorage.setItem('accessToken', responseData.id);
       localStorage.setItem('username', responseData.firstName);
      localStorage.setItem('storedEmail', responseData.email);
     
      dispatch(changeProfile({
        name:responseData.firstName,
        email:responseData.email,
        userToken:responseData.id,
    
    }));
    navigate("/Home");
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'This email is already registered \n please login using password',
    });
  
  }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid login',
      });
    // Show an alert for invalid login
    }
  } catch (error) {
    console.error("Error during login:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error occurred during login',
    });
    
  } finally {
    setIsLoading(false); // Set loading state to false
  }
}
console.log("user",user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get('Name'),
      email: formData.get('email'),
      password: password,
      lastName: "",
      phoneNumber: "",
    };

    const errors = {};
    if (!data.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!validateEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.password) {
      errors.password = 'Password is required';
    }
    if (data.password !== formData.get('Confirmpassword')) {
      errors.confirmpassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch(apiUrl + '/userDetails/signUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to create account');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={6} className='signup'
          sx={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundColor: '#2D3748',
          }}
        />
        <Grid item xs={12} sm={6} component={Paper} elevation={0} square>
          <Box
            sx={{
              my: 4,
              mx: { xs: 2, sm: 4, md: 12 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component="h1" variant="h5" style={{ alignItems: 'flex-start', display: 'flex', fontSize: 32, fontWeight: 700 }}>
              Sign Up
            </Typography>
            <p style={{ display: 'flex', color: '#707070', marginTop: 5 }}>Already have an account ?&nbsp; <span style={{ color: '#50C878', cursor: "pointer" }} onClick={() => navigate("/")}>Login</span></p>
            <Button variant="outlined" href="#outlined-buttons" sx={{ mt: 5, }} style={{ height: 48, width: '100%', borderRadius: 4, display: 'flex', borderColor: '#DADCE0', color: '#3C4043' }}onClick={() => login()}>
              <img src={goo} alt='google' style={{ marginRight: '10px', color: '#DB4437' }} />  Sign-in with Google
            </Button>
            <Divider sx={{ mt: 5, mb: 1 }} style={{ color: '#707070' }}>Or Sign Up with Email</Divider>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, alignItems: 'center', justifyContent: 'center' }}>
              <TextField style={{ height: 48, width: '100%', borderRadius: 5 }}
                margin="normal"
                required
                fullWidth
                id="Name"
                label="Name"
                name="Name"
                autoComplete="Name"
                autoFocus
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
              <TextField sx={{ mt: 3 }} style={{ height: 48, width: '100%', borderRadius: 5 }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={!!formErrors.email}
                helperText={formErrors.email}
              />
              <TextField sx={{ mt: 3 }} style={{ height: 48, width: '100%', borderRadius: 5 }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                error={!!formErrors.password}
                helperText={formErrors.password}
                inputRef={passwordRef}
                onChange={handlePasswordChange}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )
                }}
              />
              {password && (
                <PasswordStrengthBar
                  password={password}
                  onChangeScore={(score) => setPasswordStrength(score)}
                  minLength={8}
                  scoreWords={['weak', 'okay', 'good', 'strong', 'stronger']}
                  shortScoreWord="too short"
                  barColors={['#ccc', '#f00', '#f90', '#ff0', '#0f0']}
                  scoreWordsStyle={{ color: '#333' }}
                  shortScoreWordStyle={{ color: '#ff0000' }}
                />
              )}

              <TextField sx={{ mt: 3 }} style={{ height: 48, width: '100%', borderRadius: 5 }}
                margin="normal"
                required
                fullWidth
                name="Confirmpassword"
                label="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                id="Confirmpassword"
                autoComplete="current-password"
                error={!!formErrors.confirmpassword}
                helperText={formErrors.confirmpassword}
                inputRef={confirmPasswordRef}
                InputProps={{
                  endAdornment: (
                    <IconButton
                      onClick={handleTogglePassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  )
                }}
              />

              <div style={{ alignItems: "center", display: "flex", marginTop: 20 }}>
                <div>
                  <input
                    style={{ height: 20, width: 20 }}
                    type="checkbox"
                    checked={isTermsAccepted}
                    onChange={handleAcceptTerms}
                    disabled={!canAcceptTerms}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 15, color: "#5e6670" }}>&nbsp; I agree to the &nbsp; </label>
                  <span onClick={handleOpenTCModal} style={{ textDecoration: 'underline', cursor: 'pointer', color: '#50c878' }}>  Terms and Conditions</span>
                  <span style={{ fontSize: 15, color: "#5e6670" }}>&nbsp; and &nbsp;</span>
                  <span onClick={handleOpenPPModal} style={{ textDecoration: 'underline', cursor: 'pointer', color: '#50c878' }}>Privacy Policy</span>
                  <TermsandCondition show={showTCModal} handleClose={handleCloseTCModal} onAccept={handleAcceptTerms} checked={isTermsAccepted} />
                  <PrivacyPolicy showPP={showPPModal} handleClosePP={handleClosePPModal} onAcceptPP={handleAcceptTerms} checked={isTermsAccepted} />
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5 }}
                style={{ backgroundColor: '#50C878', color: '#FFFFFF', height: 48, width: '100%', borderRadius: 5 }}
                disabled={!isTermsAccepted}
              >
                Sign Up
              </Button>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}