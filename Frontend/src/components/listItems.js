import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Redirect } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Link } from "react-router-dom";
export const mainListItems = (persona) => {
  console.log(persona);
  return(
<<<<<<< HEAD
    <div >
      <ListItem button > 
=======
    <div>
      <ListItem button>
>>>>>>> 0a272631b34ccb42e8765182a820605a19ce5175
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'black'}} primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/profile">
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
              <ListItemText style={{color: 'black'}} primary="Profile" />
          </ListItem>
      {/* <ListItem button component={Link} to="/pricing">
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'black'}} primary="Payment Plan" />
      </ListItem> */}
      {(persona === 'owner' || persona === 'admin') && (
      <Link to={{
        pathname: '/RideList',
        state: {
          persona: 'owner'
        }}}>
        <ListItem button >
          <ListItemIcon>
            <BarChartIcon />
          </ListItemIcon>
          <ListItemText style={{color: 'black'}} primary="Your Asset Rides" />
        </ListItem>
        </Link>
      )}
      <Link to={{
      pathname: '/RideList',
      state: {
        persona: 'customer'
      }}}>
      <ListItem button >
        <ListItemIcon>
          <DirectionsCarIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'black'}} primary="Your Rides" />
      </ListItem>
      {persona === 'customer' &&  <ListItem button component={Link} to="/CustomerSupport">
        <ListItemIcon>
          <SupportAgentIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'black'}} primary="Customer Service" />
      </ListItem>}

      </Link>


      {(persona === 'owner' || persona === 'admin' )&& (
        <ListItem button component={Link} to='/AddCar'>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'black'}} primary="Add a Car" />
      </ListItem>
      )}
      {(persona === 'owner' || persona === 'admin') && (
        <ListItem button component={Link} to='/CarList'>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText style={{color: 'black'}} primary="View Assets" />
      </ListItem>
      )}
      {persona === 'admin' && (
        <ListItem button component={Link} to='/AdminAnalysis'>
            <ListItemIcon>
              <LayersIcon />
            </ListItemIcon>
          <ListItemText style={{color: 'black'}} primary="Business Trends" />
        </ListItem>
      )}

    </div>
  )};

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'black'}} primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'black'}} primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText style={{color: 'black'}} primary="Year-end sale" />
    </ListItem>
  </div>
);
