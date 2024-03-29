import React, {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {signin} from '../../services/authenticationService';
import { AuthContext } from '../authenticaion/ProvideAuth';
import { useHistory } from 'react-router-dom';
import Radio from '@mui/material/Radio';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const authContext = useContext(AuthContext);

  const {setUser, setAuthState, updateLocalStorage} = authContext;
  const history = useHistory();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    var customer = data.get('customer');
    var carOwner = data.get('carOwner');
    var admin = data.get('admin');
    var persona;
    if (customer === 'on') persona = "customer";
    if (carOwner === 'on') persona = "carOwner";
    if (admin === 'on') persona = "admin";
    // eslint-disable-next-line no-console

    const response = await signin({
      email: data.get('email'),
      password: data.get('password'),
      persona:data.get('persona'),
    })
    if(response.status === 200){
      setUser(response.data.payload.data[0]);
      setAuthState(true)
      setTimeout(()=>{
        history.push('/Dashboard');
      }, 500);
    }
    else{
      setAuthState(false);
      console.log('Error', response);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://www.automotiveplastics.com/wp-content/uploads/Redundant-Safety-iStock-872673304.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
        <Grid style={{paddingLeft:"400px"}}/>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <br></br>
            <Grid item xs={12}>
                  {/* <div class="form-check form-check-inline">
                    <input onChange={handlPersona} value="customer" class="form-check-input" type="radio" name="customer" id="customer"/>
                    <label class="form-check-label" for="customer">
                    Customer
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input onChange={handlPersona} value="customer" class="form-check-input" type="radio" name="carOwner" id="carOwner"/>
                    <label class="form-check-label" for="carOwner">
                    Car Owner
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input onChange={handlPersona} value="customer" class="form-check-input" type="radio" name="admin" id="admin"/>
                    <label class="form-check-label" for="admin">
                    Admin
                    </label>
                  </div> */}
                  {/* <Radio value={'customer'} checked={row.carId === props.ride.carId} onChange={selectCar}>Customer</Radio>
                  <Radio value={JSON.stringify(row)} checked={row.carId === props.ride.carId} onChange={selectCar}>Owner</Radio>
                  <Radio value={JSON.stringify(row)} checked={row.carId === props.ride.carId} onChange={selectCar}>Admin</Radio> */}

              </Grid>
              <br></br>

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{backgroundColor:"black"}}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" style={{color:"black" }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" style={{color:"black" }}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
