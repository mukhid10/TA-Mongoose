const {Instruktor} = require('../models/index')

module.exports = {
    getAll: async(req, res)=>{
        const data = await Instruktor.find({}, "-__v")

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
        const data = await Instruktor.findById(req.params.id, "-__v");
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
          await Instruktor.create(data);
          res.json({
            message: "berhasil input data"
          });
        } catch (err) {
          console.log(err);
          res.status(500).send(err);
        }
      },

      updateCourseById: async (req, res) => {    
        await Instruktor.updateOne({_id: req.params.id}, {$set: req.body});
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
        await Instruktor.deleteOne({_id: req.params.id});
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