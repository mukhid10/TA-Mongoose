const express = require("express");
const mongoose = require("mongoose")
const allRouter = require('./routes')
const app = express();
const PORT = process.env.PORT || 3000;

const uri = "mongodb+srv://course:course123@cluster0.dhrwu.mongodb.net/course_online?retryWrites=true&w=majority";

mongoose
  .connect(uri)
  .then(() => console.log("berhasil konek ke mongoose"))
  .catch((err) => console.log("gagal konek ke mongo"));

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

app.use(allRouter)
app.get('/', (req, res)=>{
  res.send('heloooo')
})

app.listen(PORT, () => {
  console.log("server online on PORT", PORT);
});