const mongoose = require("mongoose");

const InstruktorSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    maxlength: 100,
    minlength: 1
  },
  dateOfBirth: {
    type: Date,
    require: true
  },
  location: {
    type: String
  }
});

const Instruktor = mongoose.model("Instruktors", InstruktorSchema);
module.exports = Instruktor;