// require("dotenv").config();
import dotenv from 'dotenv'
import { createConnection } from 'mysql';
import express from 'express';
const mongoose = require("mongoose");

// const MongoClient = require("mongodb").MongoClient;


import userRouter from './routes/userRoutes.js';
import carRouter from  './routes/carRoutes.js';
import rideRouter from './routes/rideRoutes.js';
import customerSupportRouter from './routes/customerSupportRoutes.js';
import rideDetailsRouters from './routes/rideDetailsRouters.js';
import cors from 'cors';

dotenv.config();
var app = express();
app.use(express.json());

// const uri ="mongodb+srv://cmpe281:cmpe281@cluster0.ukbu6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// const client = new MongoClient(uri);
mongoose.connect("mongodb+srv://cmpe281:cmpe281@cluster0.ukbu6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true})
const connection  = mongoose.connection;


const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));

var con = createConnection({
  host: "rentalav.czvwggwmech2.us-east-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "admin123",
  database: "rentalAV"
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

app.use('/user', userRouter);
app.use('/car', carRouter);
app.use('/ride', rideRouter);
app.use('/customerSupport', customerSupportRouter);
app.use('/rideDetails', rideDetailsRouters);

export default con;
