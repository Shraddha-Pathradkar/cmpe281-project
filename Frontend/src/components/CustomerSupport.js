import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { Col, Row } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Link, useHistory} from 'react-router-dom';
import { CardActionArea } from "@mui/material";

const CustomerSupport =()=>{
    return(
        <React.Fragment>
        <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>

          <Row>
          <Typography variant="h3" gutterBottom style={{marginLeft:"400px",marginTop:"30px"}}>
                  GET IN TOUCH.
                </Typography>
          </Row>
          <Row style={{marginTop:"20px"}}>
         <Col >
         <CardActionArea component="a" href="#" >   <Card sx={{ display: 'flex' }} style={{backgroundColor:""}}>
         
         <CardMedia
           component="img"
           sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
           image={"https://central.ring.com/wp-content/uploads/2019/06/contact-store-icons-default-14.png"}
           alt={"img"}
         />
       </Card></CardActionArea>
      
           </Col>
           
           
         <Col >
         <CardActionArea component="a" href="#" >  
         <Card sx={{ display: 'flex' }} style={{backgroundColor:""}}>
         
         <CardMedia
           component="img"
           sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
           image={"https://central.ring.com/wp-content/uploads/2019/06/store-icons-v2-16.png"}
           alt={"img"}
         />
       </Card>
       </CardActionArea></Col>
         <Col >
         <CardActionArea component="a" href="#" >  
         <Card sx={{ display: 'flex' }} style={{backgroundColor:""}}>

         <CardMedia
           component="img"
           sx={{ width: 200, display: { xs: 'none', sm: 'block' } }}
           image={"https://theme.zdassets.com/theme_assets/430449/195f635fbf5babf318df50dbd220489087a1dd83.png"}
           alt={"img"}
         />
       </Card>
       </CardActionArea>
       </Col>

          </Row>


          <Row>
            <Col>
    <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 4 }} style={{ marginTop:"200px",marginLeft:"480px",  position: "fixed", alignItems:"center"}}> 
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
 </Col>
          </Row>
      
      </Container>
    </React.Fragment>
    )

}
export default CustomerSupport