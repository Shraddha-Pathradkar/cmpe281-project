import con from  '../index.js';
import { sendCustomError, sendCustomSuccess, sendInternalServerError } from './common.js';

import mongoose from "mongoose";
import RidesSchema from "../models/Rides.models.js";

export const getRidesDetails = async (req, res) => {
  try {
    const getRides = await RidesSchema.find(); // finding posts from a model is time consuming thats why it is an asynchronous task add await before it.
    res.status(200).json(getRides); // if no err, them send status 200 i.e success and send response as json. array of posts.
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
