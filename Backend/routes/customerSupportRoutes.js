import express from 'express';
import { updateCustomerSupport, getCustomerSupportData } from '../controllers/customerSupportController.js';

const router = express.Router();

router.post('/updateCustomerQuery', updateCustomerSupport);
router.get('/getCustomerQuery', getCustomerSupportData);

export default router;
