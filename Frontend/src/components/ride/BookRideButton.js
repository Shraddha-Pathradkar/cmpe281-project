import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Paper } from '@mui/material';

const images = [
  {
    url: 'https://www.tplusride.com/wp-content/uploads/2018/07/June-blog-post-image.jpg',
    title: 'Book Your Ride',
    width: '100%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function BookRideButton() {
    const history = useHistory();
    const redirectToAddCar = () => {
        history.push('./searchCar');
      }
      
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 100, width: '100%',paddingBottom:"30px",paddingTop:"25px" }}>
          <Paper style={{height:"100px", width:"200px"}}>
            <Typography 
            type="button"
            

                    component="span"
                    variant="h5"
                    color="black"
                    sx={{
                      position: 'relative',
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                  }}
                  onClick={redirectToAddCar}
                  fontWeight="bold"
                  
                  
                  >Book Your Ride</Typography>
            
          </Paper>
        {/* {images.map((image) => (
            <ImageButton
            focusRipple
            key={image.title}
            style={{
                width: image.width,
            }}
            >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
                <Typography
                    type="button"
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    onClick={redirectToAddCar}
                >
                {image.title}
                <ImageMarked className="MuiImageMarked-root" />
                </Typography>
            </Image>
            </ImageButton>
        ))} */}
        </Box>
    );
}