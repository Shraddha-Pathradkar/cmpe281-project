import React, {useContext, useEffect, useState} from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Wallet from './wallet';
import { Col, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ProvideAuth, { AuthContext } from '../authenticaion/ProvideAuth';
import Button from '@mui/material/Button';
import {updateUserProfile, getUserDetails} from '../../services/userService';
import {useHistory} from 'react-router-dom';

export default function Profile(props) {
  const history = useHistory();

  const [loading, setLoading] = useState(true);

  const authContext = useContext(AuthContext);
  const [userId, setUserId] = useState(authContext.user.userId);
  const [user, setUser] = useState();


  useEffect(()=>{
    fetchUserDetails();
  },[]);

  const fetchUserDetails = async () =>{
    setLoading(true);

    const res = await getUserDetails(userId);
    if(res.status === 200){
      setUser(res.data.payload);
      setLoading(false);
    }
    else{
      console.log('Error Occured');
    }

  }

  const updateUserData = async () => {
    const obj = {
      userId: user.userId,
      fname : document.getElementById('firstName').value === '' ?
        user.fname :
        document.getElementById('firstName').value,
      lname : document.getElementById('lastName').value === '' ?
        user.lname :
        document.getElementById('lastName').value,
      email : document.getElementById('email').value === '' ?
        user.email :
        document.getElementById('email').value,
      phone : document.getElementById('phoneNumber').value === ''?
        user.phone :
        document.getElementById('phoneNumber').value,
      zip : document.getElementById('zip').value === '' ?
        user.zip :
        document.getElementById('zip').value,
      address : document.getElementById('address1').value === '' ?
        user.address :
        document.getElementById('address1').value,
      country : document.getElementById('country').value === '' ?
        user.country :
        document.getElementById('country').value,
      state : document.getElementById('state').value === '' ?
        user.state :
        document.getElementById('state').value,
      walletBalance: 890,
    }
    setUser(obj);

    const response = await updateUserProfile(obj);
    if(response.status === 200){
      setUser(response.data.payload.data);
      setTimeout(()=>{
        history.push('/Dashboard');
      }, 500);
    }
    else{
      console.log('Error Occuered');
    }



  }

  return (
      <React.Fragment>
        {!loading && (
        <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
         <Row>
        {/* <Col>
        <Paper variant="" sx={{ my: { xs: 1, md: 1 }, p: { xs: 1, md: 1 } }}>
            <Card style={{maxHeight:"300px", objectFit:"cover" , maxWidth:"300px"}}>
            <CardMedia
            component="img"
            // sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image="data:image/png;base64,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"
            alt="{post.imageLabel}"
          />
            </Card>
        </Paper>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Wallet></Wallet>
        </Paper>
        </Col> */}
        <Col>
        <br></br><br></br>
        <Typography variant="h6" gutterBottom>
        Personal Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            defaultValue={user.fname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            defaultValue={user.lname}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            variant="standard"
            defaultValue={user.phone}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
            defaultValue={user.email}
          />
        </Grid>
        </Grid>
        <br></br><br></br>
        <Typography variant="h6" gutterBottom>
        Billing Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            defaultValue={user.address}
          />

        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            defaultValue={user.city}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            defaultValue={user.state}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip Code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            defaultValue={user.zip}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            defaultValue={user.country}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={updateUserData}
                style={{backgroundColor:"black"}}
              >
                Update Details
              </Button>
      </Grid>
      </Col></Row>
      </Container>
    )}
    </React.Fragment>
  );
}
