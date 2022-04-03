const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    maxlength: 50,
    minlength: 1
  },
  description: {
    type: String,
    require: true,
    maxlength: 500,
    minlength: 1
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instruktor",
    require: true
  },
  scheduleDateTime: {
    type: Date,
    require: true
  }
});

const Course = mongoose.model("courses", courseSchema);
module.exports = Course;