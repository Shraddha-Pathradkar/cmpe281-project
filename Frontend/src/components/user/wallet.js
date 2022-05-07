import  React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {AuthContext} from '../authenticaion/ProvideAuth';

function Wallet(props) {


  const authContext = useContext(AuthContext);
  const { user, loading } = authContext;
    var post = {
        // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQih8in78PcxaWTMeVsyXyhdw50yrRW4VX-jg&usqp=CAU",
        imageLabel:"img"
    }
  return (
    <>
    {!loading && (
    <Grid item xs={12} md={15}
    >
      <CardActionArea component="a" href="#" >
        <Card sx={{ display: 'flex' }} style={{backgroundColor:""}}>
          <CardContent sx={{ flex: 1 }}>
          <Typography variant="subtitle1" paragraph>
              {/* {post.description} Your Balance*/}
              Your Current Plan
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {/* {post.date} current plan */}
              Free Tier
            </Typography>
            <Typography component="h3" variant="h3">
              {/*${user.walletBalance > 0 ? user.walletBalance : 0}*/}
              0$/month
            </Typography>

          </CardContent>
{/*          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={post.image}
            alt={post.imageLabel}
          />
*/}        </Card>
      </CardActionArea>
      </Grid>
    )}
    </>
  );
}

Wallet.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Wallet;
