import React, {useState, useEffect, useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {fetchRideListFromDB} from '../../services/rideService';
import { AuthContext } from '../authenticaion/ProvideAuth';
import {useLocation} from 'react-router-dom';
import { Container } from '@mui/material';
import { fetchAllRides } from '../../services/customerSupport';

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

export default function RideList() {

    const location = useLocation();
    console.log(location);

    const {persona } = location.state;
    const authContext = useContext(AuthContext);
    const [rideList, setRideList] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchRideList();
    }, []);
    console.log(authContext);

    const fetchRideList = async () => {
        const {user} = authContext;
if(user.persona==="admin"){
    const resp = await fetchAllRides();
    if(resp.status === 200){
        const rows = [];
        console.log(resp.data.payload);
        resp.data.payload.forEach(el=> {
            console.log(el);
            const { carNumber, carId, rideId, source,
                destination, status, chargePerDay,customerId} = el;
            rows.push({
                carId,
                carNumber,
                rideId,
                source,
                destination,
                status,
                chargePerDay,
                customerId
            })
        });
        setRideList(rows);
        setLoading(false);
    }
    else{
        console.log(resp.data.message);
    }
}
else{
    const resp = await fetchRideListFromDB(user.userId, persona);
    if(resp.status === 200){
        const rows = [];
        console.log(resp.data.payload);
        resp.data.payload.forEach(el=> {
            console.log(el);
            const { carNumber, carId, rideId, source,
                destination, status, chargePerDay} = el;
            rows.push({
                carId,
                carNumber,
                rideId,
                source,
                destination,
                status,
                chargePerDay,
            })
        });
        setRideList(rows);
        setLoading(false);
    }
    else{
        console.log(resp.data.message);
    }
}
       

    }
    const {user} = authContext;


    return (
        <>
        { user.persona==="admin"?
               <Container style={{paddingTop:"50px"}}>
               {!loading && (
               <TableContainer component={Paper} >
               <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                   <TableHead style={{backgroundColor:"#DFFF00"}}> 
                   <TableRow>
                       <TableCell>Booking ID</TableCell>
                       <TableCell align="right">Status</TableCell>
                       <TableCell align="right">Source</TableCell>
                       <TableCell align="right">Destination</TableCell>
                       <TableCell align="right">Per Day Charge</TableCell>
                       <TableCell align="right">Car Id</TableCell>
                       <TableCell align="right">Customer Id</TableCell>


                   </TableRow>
                   </TableHead>
                   <TableBody>
                   {rideList.map((row) => (
                       <TableRow
                       key={row.carId}
                       sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                       >
                       <TableCell component="th" scope="row">
                           {row.rideId}
                       </TableCell>
                       <TableCell style={{color:' green'}}align="right">{row.status}</TableCell>
       
                       <TableCell align="right">{row.source}</TableCell>
                       <TableCell align="right">{row.destination}</TableCell>
                       <TableCell align="right">{row.charges}</TableCell>
                       <TableCell align="right">{row.carId}</TableCell>
                       <TableCell align="right">{row.customerId}</TableCell>

                       
       
                       </TableRow>
                   ))}
                   </TableBody>
               </Table>
               </TableContainer>
               )}
               </Container>
               :
               <Container style={{paddingTop:"50px"}}>
        {!loading && (
        <TableContainer component={Paper} >
        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead style={{backgroundColor:"#DFFF00"}}> 
            <TableRow>
                <TableCell>Booking ID</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Source</TableCell>
                <TableCell align="right">Destination</TableCell>
                <TableCell align="right">Per Day Charge</TableCell>
                <TableCell align="right">Car Id</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {rideList.map((row) => (
                <TableRow
                key={row.carId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {row.rideId}
                </TableCell>
                <TableCell style={{color:' green'}}align="right">{row.status}</TableCell>

                <TableCell align="right">{row.source}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.charges}</TableCell>
                <TableCell align="right">{row.carId}</TableCell>

                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        )}
        </Container>
        }
       
        </>
    );
}
