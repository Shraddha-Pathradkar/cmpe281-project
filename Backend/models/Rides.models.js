import mongoose from "mongoose";

const Rides = mongoose.Schema({
  time: Date,
  Array: Array
});

const Rides = mongoose.model("Rides", Rides);
export default Rides;
