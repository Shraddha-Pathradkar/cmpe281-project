import con from  '../index.js';
import { sendCustomError, sendCustomSuccess, sendInternalServerError } from './common.js';

export const updateCustomerSupport = (req, res)  => {
  console.log("here line 5");
  try{

    const {
      userEmail,
      userName,
      message,
      type
    } =  req.body;

    const updateCustomerSupport = `INSERT INTO customerSupport (userEmail,userName,message,type) VALUES(?,?,?,?)`;

  // const updateCustomerSupport = "CREATE TABLE customerSupport(userEmail VARCHAR(500),userName VARCHAR(500),message VARCHAR(500),type VARCHAR(500))"
con.query(updateCustomerSupport,[
  userEmail,
  userName,
  message,
  type
],(err, result) => {

  if(result){
      sendCustomSuccess(res, { data: result});
  }
  else{
      sendCustomError(res, 404, 'Entity Not Found');
  }})

  }
  catch(err){
      sendInternalServerError(res);
  }
}

export const getCustomerSupportData = (req, res) =>{
    try{
      const getData = `SELECT * FROM customerSupport`;
      con.query(getData,[], (err,result)=> {
        if(err){
            sendInternalServerError(res);
        }
        else{
            console.log("result customerSupport", result);
            sendCustomSuccess(res, result);
        }
      })
    }
    catch(err){
        sendInternalServerError(res);
    }

}

export const getAllRides = (req, res) =>{
  try{
    const getData = `SELECT * FROM ride`;
    con.query(getData,[], (err,result)=> {
      if(err){
          sendInternalServerError(res);
      }
      else{
          console.log("result rides", result);
          sendCustomSuccess(res, result);
      }
    })
  }
  catch(err){
      sendInternalServerError(res);
  }

}



