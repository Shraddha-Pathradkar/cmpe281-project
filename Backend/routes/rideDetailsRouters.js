import express from 'express';
import { getRidesDetails } from '../controllers/carlaDataController.js';

const router = express.Router();

router.get('/getRideDetails', getRidesDetails);

export default router;
