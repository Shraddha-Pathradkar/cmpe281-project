import express from 'express';
import { updateCustomerSupport, getCustomerSupportData, getAllRides } from '../controllers/customerSupportController.js';

const router = express.Router();

router.post('/updateCustomerQuery', updateCustomerSupport);
router.get('/getCustomerQuery', getCustomerSupportData);
router.get('/getAllRides', getAllRides);


export default router;
