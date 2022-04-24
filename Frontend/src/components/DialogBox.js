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
import { Input } from '@mui/material';

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
   
    <Col>
    <Input placeholder='Message'>Message</Input>
    </Col>
</React.Fragment>

  )
}
else if(type==="Call"){
  return (
    <React.Fragment>
      <Row>
        <Col>
        <Button>Request a Call</Button>
        </Col>
        <Col>
        <Button>Call Now</Button>
        </Col>
      </Row>
    </React.Fragment>
  )
} 
else{
  return (
    <React.Fragment>
        <Col>
        <Input placeholder='Subject'></Input>
        </Col>
        <Col>
        <Input placeholder='Message'>Message</Input>
        </Col>
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