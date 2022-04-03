const {Course} = require('../models/index')

module.exports = {
    getAll: async(req, res)=>{
        const data = await Course.find({}, "-__v")
        .populate("Instruktor")
    
        try {
          res.json({
            message: "berhasil ambil data Course",
            data: data,
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
    },

    getById: async (req, res) => {
        const data = await Course.findById(req.params.id, "-__v");
        try {
          res.json({
            message: "berhasil ambil data Course",
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
          await Course.create(data);
          res.json({
            message: "berhasil input data Course"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      },

      updateCourseById: async (req, res) => {    
        await Course.updateOne({_id: req.params.id}, {$set: req.body});
      try {
        res.json({
          message: "berhasil update data Course byID"
        });
      } catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    },

    deleteCourseById: async (req, res) => {
        await Course.deleteOne({_id: req.params.id});
        try {
          res.json({
            message: "berhasil delete data Course byID"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      }

}