import con from  '../index.js';
import { sendCustomError, sendCustomSuccess, sendInternalServerError } from './common.js';

export const updateCustomerSupport = (req, res)  => {
  try{
    const {
      userEmail,
      userName,
      message,
      type
    } =  req.body;

    const updateCustomerSupport = `CREATE TABLE IF NOT EXISTS customerSupport (
userEmail VARCHAR(500),
userName VARCHAR(500),
message VARCHAR(500),
type VARCHAR(500),
);
INSERT INTO customerSupport (userEmail,userName,message,type) VALUES (?,?,?,?)`;

con.query(updateCustomerSupport,[],[
  userEmail,
  userName,
  message,
  type
],(err, result) => {
  console.log(result)
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
