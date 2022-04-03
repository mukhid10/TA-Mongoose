const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
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
      email: {
        type: String,
        maxlength: 50
      },
      phone: {
        type: String,
        maxlength: 13
      },
      courses: {
        type: mongoose.Types.ObjectId,
        ref: "Course"
      }
    });

const Participant= mongoose.model("participants", participantSchema);
module.exports = Participant;