import  React, {useContext, useEffect, useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Wallet from './user/wallet';
import { AuthContext }from './authenticaion/ProvideAuth';
import { SettingsInputSvideoRounded } from '@mui/icons-material';
import Button from '@mui/material/Button';
import {useHistory} from 'react-router-dom';
import { fechInProgressRides } from '../services/rideService';
import InProgressRideList from './ride/InProgressRideList';
import BookRideButton from './ride/BookRideButton';
import {  Row } from 'react-bootstrap';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} style={{ marginLeft:"480px",marginTop:"200px",  position: "fixed", alignItems:"center"}}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  marginTop:'100px',
  backgroundColor:'#FFFDD0',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({
  palette:{
    primary:{
      main:"#FF0000",
      darker:"#FF0000"
    }
  }
});

const DashboardContent = () => {

  const history = useHistory();
  const authContext = useContext(AuthContext);
  const {user, authState} = authContext;
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  // const [user, setUser] = useState();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  console.log(authContext);
  return (
    <div >
    {(
    <ThemeProvider theme={mdTheme} >
      <Box sx={{ display: 'flex' }} >
        <CssBaseline />
<<<<<<< HEAD
        <AppBar position="absolute" open={open} style={{backgroundColor:""}} >
=======
{/*        <AppBar position="absolute" open={open} style={{backgroundColor:""}}>
>>>>>>> 0a272631b34ccb42e8765182a820605a19ce5175
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
            
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="black"
              noWrap
              sx={{ flexGrow: 1 }}
              fontFamily="Roboto"
              fontWeight= "bold"

            >
              Dashboard
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
<<<<<<< HEAD
        <Drawer variant="permanent" open={open} >
=======
*/}        <Drawer variant="permanent" open={open}>
>>>>>>> 0a272631b34ccb42e8765182a820605a19ce5175
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
          <Typography
            component="h1"
            variant="h6"
            color="Black"
            noWrap
            sx={{ flexGrow: 1 }}
            fontFamily="Roboto"
            fontWeight= "bold"

          >
            AV Rental System
          </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List  >{mainListItems(user.persona)}</List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
     >
          <Toolbar />
<<<<<<< HEAD
          <Container maxWidth="lg" sx={{ mt: 9, mb: 9 }}>
<div style={{display:"flex"}}>
            <Grid container spacing={3}>
              
                  
                  <BookRideButton/>
             
             
                  <Wallet />
               
            
            </Grid>
            <Grid item xs={12}>
=======
          <Container maxWidth="100" sx={{ mt: 10, mb: 4 }} >
          <h2 style ={{align: "left"}}>Welcome User ! </h2>
            <Grid container spacing={3} >
              {/* Chart */}
              <Grid item xs={12} md={8} lg={7}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                  <h2>Book your Ride in 3 easy Steps! <br/>
                  Lets get you started.</h2>
                  <BookRideButton/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={8} lg={5}>
                <Paper maxWidth="sm"
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Wallet />
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
              <h2> Trip Status </h2>
>>>>>>> 0a272631b34ccb42e8765182a820605a19ce5175
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography fontWeight="bold" color="black" variant='h5' paddingBottom="10px" fontFamily={"arial"}>Ride Status</Typography>

                  <InProgressRideList/>
                </Paper>
              </Grid>
              </div>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
    )}
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
