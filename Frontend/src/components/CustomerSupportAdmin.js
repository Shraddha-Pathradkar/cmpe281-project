import { fetchCustomerQuery } from '../services/customerSupport';
import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Container } from '@mui/material';
const CustomerSupportAdmin =()=>{
    const [data, setData]= useState([])
    useEffect(async () =>{
        const resp = await fetchCustomerQuery();
        if(resp.status === 200){
            setData(resp.data.payload)
        }
        else{
          console.log('Error Occured', resp.data.message);
        }
          console.log("use effect!!")
    },[])
    console.log(data)

    return (
        <>
        <Container style={{paddingTop:"50px"}}>
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead style={{backgroundColor:"#FFFDD0"}}> 
            <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell align="right">Customer Email</TableCell>
                <TableCell align="right">Query Type</TableCell>
                <TableCell align="right">Message</TableCell>

               
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => {
                (
                <TableRow
                key={row.carId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.rideId}
                </TableCell>
                <TableCell align="right">{row.source}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.chargePerDay}</TableCell>
                <TableCell align="right">{row.carNumber}</TableCell>
                <TableCell style={{color:' green'}}align="right">{row.status}</TableCell>

                </TableRow>
            )})}
            </TableBody>
        </Table>
        </TableContainer>
        </Container>
        </>
    )
      
  }
  export default CustomerSupportAdmin