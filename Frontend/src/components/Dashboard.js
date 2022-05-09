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
import {  Col, Row } from 'react-bootstrap';


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
    },
    
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

  return (
    <div>
    {(
      <Box sx={{ display: 'flex' }}  >
        <CssBaseline />

        <AppBar position="absolute" open={open}  >

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
          {/*}</Toolbar>*/}
        </AppBar>
        <Drawer variant="permanent" open={open}>

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
          <Container maxWidth="100" sx={{ mt: -7, mb: 4 }} >
          <Typography style ={{align: "left", fontWeight:"bold", fontSize:"40px",paddingBottom:"30px"}}>{`Welcome Back ${user.fname}!!!`}</Typography>
         
          <Row>
     {/* Chart */}
     <Col>
              <Grid item xs={12} md={8} lg={10}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}

                >
                  {/* <Chart /> */}
                  <Typography variant='h5'>Book your Ride in 3 easy Steps! <br/>
                  Lets get you started.</Typography>
                  <div             style={{paddingLeft:"120px"}}
>                  <BookRideButton/>
</div>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={8} lg={10} style={{paddingTop:"30px"}}>
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
              </Col>
              {/* Recent Orders */}
              <Col>
              <Grid item xs={12}>
              <Typography fontWeight="bold" color="black" variant='h5' paddingBottom="10px" fontFamily={"arial"} style={{paddingBottom:"20px"}}>  Trip Status </Typography>

                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Typography fontWeight="bold" color="black" variant='h5' paddingBottom="10px" fontFamily={"arial"}>Ride Status</Typography>

                  <InProgressRideList/>
                </Paper>
              </Grid></Col>
             
            {/* <Copyright sx={{ pt: 4 }} /> */}
            </Row>

          </Container>
        </Box>
      </Box>
    )}
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
