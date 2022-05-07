import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Col, Row } from 'react-bootstrap';
import { CardActions, CardContent, Input } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function DialogBox({type,width,image}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const DialogContent=()=>{
if (type==="Chat"){
  return (
    <React.Fragment>
            <Row style={{paddingRight:"40px" }}>
        <Col style={{paddingLeft:"40px"}}>
        <Input placeholder='Message'>Message</Input>
        </Col>
        <Col>
        <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBIWEhUSEhIREhIRERIRERIREREPDxESGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8/NTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGjQkISExMTQxNDQxNDE0NDQ0NDQxNDE0MTE0MTQxNDQ0MTQ0NDQ0MTQxNDE0MTQxND8xNDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAACAQMCBAMEBwYEBwEAAAABAgADBBESIQUxQVEGYXETIoGRMkJSobHB0RQjcqLh8AckM2JEY3OCkqSyFv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAIBEBAQEBAAMBAAMBAQAAAAAAAAECEQMhMRIiQWEyUf/aAAwDAQACEQMRAD8A9WV47VIUMkBlcT12OWMxHLEadZ2RrHZgDo6M1RBoh0+KNzFAyiinDAOxsRaN1RkeYlkZaPQwCSNJjpl/Hl+tO1INTQzkAIMhnHbI3AiNl/GniJ2fRSdhTUlWZM7AenMefpMy1bChgynPLLtCFukC5zv1H5kHlKq/uUJOFUZ54AIPny2MouA7m8c8yRv3ysGa5+1v2I2IjHfscfesGc/D/wCZFUnZgdjhh98aUI+idux3EhBwe35+hkwrdD8xsYGctXIwenc6h8J0VD5HyP5f0kZAP6jl8e3rI3JHTI6jt5iSY+nUJ5YPkefwM0PhzjdS3fXTbYbOh5MOx/WZND1HzHOHW1XkeTD6w5EdiIB9BcG4rTuaS1aZ2OzKfpI3VTDp5b/htd6Lt6bOQtakdCbaS6HPzxqnqkqJpuIsR0UZGkSKpRBk8bAAfYRQ3TFGXFeskUyJTH5jCUGOUyDVOh4AUDO5g6vJViB0QixOiMHCKITsQcnGjpxhAImMgarJqkEdZRVJrk9JoIsJpQDnEL1KVN6j8kGcfaPQTx3jd9VuKrOWLMxxp5qq9FA7TY/4g8R0haWdgNbDz6fnMX4ftmrVBnkDnHl+sy1Wmc9OurRvZg6EYqOoAIzzwRM1XTB5FD8SJ7OOGLoAwOXaUl7wcZOlV+Um6saZzK8pcHyPmJHj+8T0K58PK3Omme6jQfulRc+FXGSuR5DeKbO4ZJh2x6dPlG/jNBX8O3AGVCVB2GA/yMqK9BlJD0ypGxyCuJU1Ki4sDKxEJpkMMfIfpIfht5Zz+c4q/Z/v9IElKFTlf6ehklJ8e8P+4dpxK4Oz8+/X4jrJHtzjWmD3A6wMbSvXo1Kdek2ko6P6Eb8ux5ek908N8ZS6t1qjAce7UQfVbH4EbifPxYMmOuMj9Jv/APCniGmsaRO1amQP40Opf5S8rKa9ZiiijSUUUUAbFHRQAFKck9mJ1RHyiDvSg75ENaD1FgDKZhaCD0hCAYgeYgYzM6DGEonYxWj9UQKNJjKlUAZJlPfeIKCbGoue2RDgtWtVxiBPWEzN94tp/VbPxlM/iYZ57R28KTr0BHBhtMbTEcM4+jEe91HWa39pHs2YfYY/dF3p848l8Z35eu5+05VfJV2l34FtPc1kc5kOMnVVA6lsfMz03w9a6KKD/aJhb10Sci5dtoG8JYQZxHaJA1QQZlhFQwdjM7VyIKtFTzUH1AgFzwtH5g/PP4y1LiBXXEaSfSdR5Z3kqjOXfhNG3VtJ8hj7htM3xXgFWj7/ANNM4LLzX+Idptzx6nnAViO4GfuEnS5p1AVyDnbSw5+WDHNWFcyvMHVhjUNjyPSS21Qqcq3qDuJqrzgqKSpB9mc4bn7PyPl5yjv+Dsm/Ne/aXNSo1nnuG1hTYD6j4yMfRz/WH+Ebn2dxSfP0K6ZI7E6T9xMzdypHUgjlvLDhFQ6Sx5h0P8wm2WGn0nFGIdh6D8J2Mjooo2AKKKKAQIY6RK07rEonXMgcx7vIGaAToY41IC1yBILi+AHOAWLVJG1wB1mXvfEKJtnJ7CB0uNl2wIrqQfm1s/20SC44sFEqqNUkRlYDrJu1zHVVx7ildwQrFF8uZnnl/RcMSSSe5JJnoN7iZy+tQczK+T21njnGTWswMJFckR95aYgIOJeddZ6z+RSXTI2VYj0mw4L4ucKadTcMNOfhiYRmjqVXEV7Pi5y/V7UGq5pjvUX7563aU8IPQTyt6HvW1wv0S9MN5HUJvr5K75KNopjZN8FvOL88+jvfi6q1B3EFdwZjbi3uwf8AV69GJ/GXHDKlTlUYN58jI1pUyOcyFzJKwglR5nWkUvGLiq3uUzpHU9ZWWfBdR11nYjoufeb1PQS7qVRv2EpbzjSrnGwHXGtyOWQvbzMJ2+ofJ9q8t6VJBhEUD01H5mOqUabblRnoRsR8pjhx8uwVBVJJwP8ATBJ6DGJY8N4lrOMsSOYZdLD1hrOp9E1m/GowCMHfpk8z6yvvuG5psq8iD7p3GfLt+EKonIBhoGVhKVjye4TBKONgcf7lhNhRwnu+9qdeW+wPWTeJqOmu2Ns7wexbGjJwFfUT6Tqxezrm3OXj6Ksqmumj/aRW+YEmmf8ADniGhWRKav8AvAoXBGnOB0mglIOjY6NgCinIowFMaY8iQtKQTCDVmk5kLrFTiovXODMxxGq+4BPzmrvE2Mz95RG85965XRjPWSuCQd5Y8E3bMGv6W8L4IMGTNdVrPGytVwsHu6kelbCytubgZhqnmB67QCvCXqQWoczKtYp75ecoKq7zT3dPaZ67XBmnj0nyZ9BTGLHExKm83rnjacAGuzZSP9NwQfQ5noF/XCU1OOaqABzJI5THK6W9sEXBZkyfM4mrubMXFsgLsquiElDgkFRtmHknqJ8d91i+LcfK6jTAcIQHZFLohPIa8gE+glVZ+KHL4ddjnkMHbnNDccJanTaglT90TkKVUspznIbnmV1Dw5TJywLHuT/eJlfzz/W8uu/41nBLoV6Z3yVAIPdTOXlIqDC/DPDVpA6RgaNIEdxIb4kXPrqpf5Mbd030PpGT2zjMraKMEem9JS1Tm+oagQcqeRGBttNY1AEzhshFm2fFX36rHUOENnJYLvn3Bp37/wBmXvCuGqnISzSw8gIUlMKIXVv0pmT4YiASdeUgYx6NtM7V8ee+Lm/zBHl+ZlZSrDC7cj73nDfFh/zT+glXTI05JxOzxf8AMcnl/wClzwniBp1AwOBnPpPd+C3ntrenV6ugLfxcj94nz3YIHdcH+k998M0ilnRU8wmfgSSJbNaRTk5mAKKKKMkBEYyySNaNKErI3EnIkNUQpxT3zYzM/d1My84iecz9Ubzl8n11+P4qrlMxWuxGIXVSSW1DrM8/WmvgrWdMrbrOZcaNoJUpAmVYUUrO0lpCG1LUSPQBI1V5gO6XaZfiA3mquTtMxxFd4/H9Lc/iARYQtKDo0LpkYnXzscf65WhruHp03z9XQ09E8Pb2lAHpTA+W08bF2UypzoPMdvOeseD71XsaTIc6QyHuCrGLV9Hmexl1aoTuBG0LZAdh8ZJcPAWrETnup10TPpf0EA5dpTXw96WFO6ApDqzLn4GU9zc9xHrU4Wc3qAgiIVJAl7TZiodSw5qCCZGX3JB2ztM/bXg0POO8FS4HIyQuDFacjhaS0+UgXnCEMmHWA8YWre19oASuAGI6b43lDa09dRaZ5O4B8t957ZwLhtN3qCoiuj0yjKwyrKxwQZj+MeDEoXyU7eoxWoutgwDNb02cU9ec+8AWHny7zt8U/jHD5b/KrLwRwOjVdjgGmjl3VdOgAn3EJH4eRnpwGBgbAbAdAIFwbhNG1pLRoLpVSSSd2ZjzZj1P9BD5bNwxuY4iMMYLMUbFGDBOGcBnCY0k0hqyTMjqDaClHxIbGULYmh4gNjMrXfDGcvl+urxfCrMI6jWEArVJHQrb4mU+tb8W9e493aCJdRr7jnKyu+kwvRIt3uhiCPWlLU4hg85JRutUVzVTU+DqrZlNf08yyzI6tPIiz6p69xmGQgyZOUs3s8w6y4NrHKdOd9cmvHz2zFwZr/8ADXiuh3tXOEqnXTJ5CoBuvxA+6L/8i7sCOXWafhPhFE0tpwykEHqCOsrlqeyLW4eVjVNTY7S64lakfETN1nZHPukgkn7pzbnLx0ZvZ6XFLcDcjTywdvQ9xBb9EwVJxnnKi18TK1VaGlkd30KcDBY8gSeUtK9hWY40nJJ54PLnH+fRz1fdV7016Yx8hO+2RR9IfCEU+C1HYqdtOM5JOxzjHynanB1RGqVXCCm2XJIRAg5kk8tusJmndZn2qm6u6Y314nbC91ErnOMYPl2gfGEpu721FchvZuaqlXpr1IBB5gD+aG2NoqAKo5L8TFrPDzrqxpvCKZyYHSXvt2ztLG2p7ycwarR+HVADscAADJOwAGSTKXhg/aE4hfn6NRKlG3JHKlTUksPUhPikEr3r3LNw2zO74F5cLulCjnDoDyLHcY9R3xt7Xh1OnQFsi4pLT9kF5+6Rg5PUnJJPnOzM5mOLfvVFg537x0B4NWL29NmOXCBHP/MT3H/mVodKSaY0xxnGgEc5FmKUQdWnCZGGnS0AfmcflGap3MEq6+o5BmS4hZkEmbeuNpQ31LnMt563xrjIVEMDLYaXl3TEqK9I5BnNz26e9iwt1yOcDv7aG2abQmvQzLudFNRiLm1OqFWlIjnLqvZjtA6iYi1bzlPMz3sLIjWYSFmnRMq0SrNp4ftlKCYcNNT4f4qqgKTia+LnfbLzS89Nzb2qgcoYlMSts70N1llTedbiMvbbWu3Mbj9JleI2mRnG6mbPMAv7PV76jfqO8y8mP17a+Pf59POuJeG/aYemdFRCGQ8uuefcHcSztvEF2mlK1rqKgfvVZgWOnDErp5n1xvLw0sDbpK6/pZ3VtO3I7gekzn8Y39a9VU8R8SXhYGjTSmpGD7RC5JzzBDDHXpKG8tatdi9xWeoXIJooxWlkAYyg93oOkvXod2+QjkpqPoj48zIu2szmfICsrNUXAAHfGwA7TKcU4/UZmWkxp08kArs7DuT0+E3gTv1nmfGLB6FRqbg4ySjHk6dCDL8PLb1h5rqT0EeqxOWJY92JJ+Zm18NrdXdMo1w1OjTOlyozVfIzp1enXz6zMcL4LcVyAlM6TzqOCtMDvq6+gno3BOFpbUjTRi7OdVRzsGbGNh0Amnk1JP8AWWJbf8ajwbaU6SNTpoFXYnqzHlqY9TNMDMxwO4CN7xwCJe3d2iUnrZBWnTeocdlUn8o8XuS3OUJ4bP8AlgftV7tx/C11VZfuIlrAuC2xp21Gm27JRpq57vpGo/PMNloIxrR04wjCDVFI2EUZA1cR2qQKkfpjSezToaQsk7Dg6bWqSkvq4lvVTaUd/bmLWfSsX2p676jGNRzJjSwZMtInkMzPOPbfW+RFbUzLOnbEjlC+H8OJwSJfW9mAOU3vI5/1azB4USMkSn4lw3Tmeh1KIxM3xpQAZh5ZLlr49WVgHpYMaVh9ym8CecLu6Gcyz4TZO7A42zI+G2Bd+W033CuGhQNp0+PPfbn8u+ek/C7XSBLmmcSNKeJIFnQ5RKNHrIUkqwAS7tc+8vxH5yprW6nOZpBKvidmcF0+K/mJnvH9xrjX9VnK1BAdvwgpp4hlQHPKROk5q6ZYGC7yUgcjg+sRAEgd4oLepGfoJ1TIAZKsCTq/ukdxiUvCuIVNb2jsTSqXdCnvv+7L63UeqoR6GH16mAfIQK0oEVLVj9J7t6h9Ft6uPxE18XesvJzj1UHO8dKvhl3n3GO/T9JaToYGzhnZwmAQMIpwmKUQNEj9E6gj40oXWR4krxhjhU1l2lfc05YsYNUXMfDl4o6trvLGxsR2kyUcmWdCliF9H+un29EAQkCcUR0g0FwdpjuNsSZsa4mU40gzgTPf/K/H9Ze4p5gPsCzBR1M0BtC2wEseGcFAbURvOfPjtrp15JmJOBcMCqNppadPAitqAUYhISdcnJxyavb1GBHqs7iLMZOiL2kYWjYcCYVJBd3IUbnntJAMCYnxbxdhUp06Z95qigfPf7otXkPM7WgrbysuFh4J0jPPAzArgTl17dGQLiQkQllkbLI41RBYi286xkLGMkVfLstMfWO/p1hl8gWrZgdK1Rf/AF3/AEi4VSyTUP8ACvp3juIjNe1HapVf4LRdfxcTfxZ5O/8Arm8mu3i1RyDkS+sb8MArbN36GZ6PpuQZszawmMdpW23Eh9Fum2YX7UNyMXAZqindMUYRKY7VB3eNFSORPUrtG5keqItL4l1jGYiJiUxhNRTeGoIJbmGJM9KykEUQnDEoPcvgGZ2pSL1PKXl6dsQezpAb9ZGp1ebw23sQOkNRAImcCRpUyZcnEW9FoI8xizjNAOM8ZmR6xnElxGHFElRZxROsYANxG4CUyfKeXW1Q1+JAndaeT5Zmu8XcRCU235AzJ+CaBNRqhG7HMy8l/pp45/bfvygNcQ2A1zMa1iAiQVWhgTbMq7ipuZFXDXeQPliEHNjj4TheH8Jt85qH+FPzMeM/q8LevzFhQphVCjkBiVy+/ek9La30+XtKzhj8QtMf+Us3cKCzHCqCzE8gAMkyu4IpNNqzDDXNRqxB5qhACKfRFX5mdnHKsZwtjJ7REwW7fChernHw5n+/OMkltUJ37nMs6Fz3yJW0FwIQpgFt+1HvOSt1TkXC6KqVIkadimkRTg0RaKKMGap3VFFADLaGpFFM9Ly7qiJiiiMBdGQ0nnIoAnckwm3XE5FGBTNIa74EUUIlDQTJzDAIooUHZg9zUwDFFBTz/wAU5chB9ZsS64Bw4U6YHXEUU59/W+P+Vyy7QI08mKKKiOXOFQnymZd8kmKKZ6+tM/HKaFmVRzYgfOal6QRVReSjEUU18H2s/N8im46dQS3H/E1ND/8ARA11B8VGn4yyA+UUU6IwLTAT71YjogA+J3P5RRRpHhZ0mKKALMUUUA//2Q==`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone number: XXX-XXX-XXXX
          Email: XXX@gmail.com
        </Typography>
      </CardContent>
    
    </Card>
        </Col>
      </Row>
   

</React.Fragment>

  )
}
else if(type==="Call"){
  return (
    <React.Fragment>
      <Row style={{paddingRight:"40px" }}>
        <Col style={{paddingLeft:"40px"}}>
         <Typography style={{color:"blue",paddingTop:"20px"}}>Request a call back</Typography> 
        <Input style={{paddingTop:"40px"}} placeholder='Your Phone Number'>Phone Number</Input>
        </Col>
        <Col>
        <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {`data:image/jpeg;base64,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`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone number: XXX-XXX-XXXX
          Email: XXX@gmail.com
        </Typography>
      </CardContent>
    
    </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
} 
else{
  return (
    <React.Fragment>
        <Row style={{paddingRight:"40px" ,paddingLeft:"80px"}}>
       
        <Col>
        <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {`data:image/jpeg;base64,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`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Contact us
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Phone number: XXX-XXX-XXXX
          Email: XXX@gmail.com
        </Typography>
      </CardContent>
    
    </Card>
        </Col>
      </Row>
    </React.Fragment>
  )
}

  }

  return (
    <div>

<Card sx={{ display: 'flex' }} style={{backgroundColor:"#A7D3FF"}} onClick={handleClickOpen} >
           <CardMedia
           component="img"
           sx={{ width: {width}, display: { xs: 'none', sm: 'block' } }}
           image={image}
           alt={"img"}
         />
       </Card>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth="true"      
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Welcome, we are happy to help!
        </BootstrapDialogTitle>
        <DialogContent dividers  >
          {DialogContent()}

        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Send
          </Button>
        </DialogActions>
      </BootstrapDialog>
      </div>
  );
}