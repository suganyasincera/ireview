import  React,{useState,useEffect} from 'react';
import '../App.css';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Divider from '@mui/material/Divider';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin} from '@react-oauth/google';
import { changeProfile,changeLoginResponse } from '../components/redux/FormSlice';
import goo from "../components/assets/gpt_Google icon.png";


const defaultTheme = createTheme();

export default function Login() {
  const dispatch=useDispatch();
    const navigate = useNavigate();
 const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ user, setUser ] = useState([]);

  const [showPassword, setShowPassword] = React.useState(false);
  const apiUrl = process.env.REACT_APP_BASE_URL
  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(true);
    }
  }, []);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      googlelogin(codeResponse); // Call the googlelogin function here
    },
    onError: (error) => console.log('Login Failed:', error),
  });
const googlelogin = async(codeResponse)=>{
  setIsLoading(true); // Set loading state to true
  try {
    const response = await fetch(
     apiUrl+ "/api/userDetails/googleSignIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",

        },
        body: JSON.stringify({"token":codeResponse.access_token}),
      }
    );
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
    
    }))
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

const handleEmailChange = (e) => {
  setEmail(e.target.value);
  // Add any additional logic you need for email validation
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  // Add any additional logic you need for password validation
};
 const handleTogglePassword = () => {
    setShowPassword(!showPassword);
 };
 const handleLogin = async (e) => {
  e.preventDefault();
  if (!email.trim() || !password.trim()) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email and password are required.',
    });
    
    return;
  }
  console.log("2")
  // Check if the email format is valid
  if (checkValidEmail) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Invalid email format.',
    });
    
    return;
  }
  console.log("3")
  setIsLoading(true); // Set loading state to true
  try {
    const response = await fetch(
     apiUrl+ "/userDetails/signIn",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password:password,
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
      if(responseData.id!=null){
      console.log("response",responseData);
      
      localStorage.setItem('accessToken', responseData.id);
      localStorage.setItem('username', responseData.firstName);
      localStorage.setItem('storedEmail', responseData.email);
      dispatch(changeLoginResponse({
        name:responseData.firstName,
        email:responseData.email,
        userToken:responseData.id,
    
    }));
    navigate("/Home");
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid credentials',
        });
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid login',
      });
    }
  }
     

   catch (error) {
    console.error("Error during login:", error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'An error occurred during login',
    });
  } finally {
    setIsLoading(false); // Set loading state to false
  }


};
const Signup=()=>{
  navigate("/Signup")
}
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
              mx: { xs: 2, sm: 4, md: 12 }, // Adjusting margins for different screen sizes
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography component="h1" variant="h5" style={{ alignItems: 'flex-start', display: 'flex', fontSize: 32, fontWeight: 700 }}>
              Login
            </Typography>

            <p style={{ display: 'flex', marginTop: 5 }}>Don't have an account ? &nbsp;<span style={{ color: '#50C878',cursor:'pointer' }} onClick={()=> navigate("/Signup")}> Sign up </span></p>
            <Button fullWidth
               variant="outlined" href="#outlined-buttons" sx={{ mt: 7, mb: 3, }} style={{ height: 48, width: '100%', borderRadius: 4, display: 'flex', borderColor: '#DADCE0', color: '#3C4043' }} onClick={() => login()}>
              <img src={goo}  alt='goole' style={{ marginRight: '10px', color: '#DB4437' }} /> Sign-in with Google
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
                 <Link href="#" variant="body2" style={{ color: '#50C878' }}>
                    {"Forget Password?"}
                 </Link>
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 5, mb: 2 }}
                style={{ backgroundColor: '#50C878', color: '#FFFFFF', height: 48, width: '100%', borderRadius: 5 }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
 );
}