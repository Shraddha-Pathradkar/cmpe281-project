import con from  '../index.js';
import { sendCustomError, sendCustomSuccess, sendInternalServerError } from './common.js';

export const customerSupport = (req, res)  => {
  try{
    const {
      userEmail,
      userName,
      message,
      type
    } =  req.body;

    const updateCustomerSupport = `CREATE TABLE IF NOT EXISTS customerSupport (
id INT(10),
word VARCHAR(500)
);
INSERT INTO customerSupport VALUES (?,?,?,?)`;

con.query(updateCustomerSupport,[
  userEmail,
  userName,
  message,
  type
],(err, result) => {
  if(result[0]){
      sendCustomSuccess(res, { data: result[0]});
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
      con.query(getData, (err,result)=> {
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
