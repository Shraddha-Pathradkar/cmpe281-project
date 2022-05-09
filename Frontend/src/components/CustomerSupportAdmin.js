import { fetchCustomerQuery } from '../services/customerSupport';
import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Card, Container } from '@mui/material';
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
    function createData(rideNumber, carNumber, date,  charge) {
        return { rideNumber, carNumber, charge, date };
      }
      
      const rows = [
        createData('1', '8CPA850', '11/10/2021', 16.0 ),
        createData('2', '7YPN393', '11/09/2021', 29.0),
        createData('3', '8AMF954', '11/09/2021', 56.0),
        createData('4', '8AMF954', '10/19/2021', 76.0),
        createData('5', '8AMF954', '10/09/2021', 76.0),
        createData('6', '8AMF954', '10/06/2021', 146.0),
        createData('7', '7MWL676', '09/30/2021', 122.0),
        createData('8', '7MWL676', '09/29/2021', 102.0),
        createData('9', '8AMF954', '09/19/2021', 56.0),
        createData('10','8AMF954', '05/09/2021', 86.0),
        createData('11', '8AMF954', '05/09/2021', 86.0),
      
      ];

    return (
        <>
        
        <Container style={{paddingTop:"50px"}}>
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead style={{backgroundColor:"#DFFF00"}}> 
            <TableRow>
                <TableCell>Customer Name</TableCell>
                <TableCell align="right">Customer Email</TableCell>
                <TableCell align="right">Query Type</TableCell>
                <TableCell align="right">Message/Phone Number</TableCell>               
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow
                key={row.carId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.userName}
                </TableCell>
                <TableCell align="right">{row.userEmail}</TableCell>
                <TableCell align="right">{row.type}</TableCell>
                <TableCell align="right">{row.message}</TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </Container>
        </>
    )
      
  }
  export default CustomerSupportAdmin