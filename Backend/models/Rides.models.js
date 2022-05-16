const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Rides = new Schema ({
  time: Date,
  Array: Array,
},{collection:"Rides"}
);
module.exports = mongoose.model("Rides", Rides);