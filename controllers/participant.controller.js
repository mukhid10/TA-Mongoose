const {Participant} = require('../models/index')

module.exports = {
    getAll: async(req, res)=>{
        const data = await Participant.find({}, "-__v")

        try {
          res.json({
            message: "berhasil ambil data",
            data: data,
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
    },

    getById: async (req, res) => {
        const data = await Participant.findById(req.params.id, "-__v");
        try {
          res.json({
            message: "berhasil ambil data",
            data: data,
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      },

    addCourse: async (req, res) => {
        const data = req.body;
      
        try {
          await Participant.create(data);
          res.json({
            message: "berhasil input data"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      },

      updateCourseById: async (req, res) => {    
        await Participant.updateOne({_id: req.params.id}, {$set: req.body});
      try {
        res.json({
          message: "berhasil update data byID"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    },

    deleteCourseById: async (req, res) => {
        await Participant.deleteOne({_id: req.params.id});
        try {
          res.json({
            message: "berhasil delete data byID"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      }

}