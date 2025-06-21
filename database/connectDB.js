const mongoose = require("mongoose");
// const local_url = "mongodb://localhost:27017/Study-Course-Project";
const live_url ="mongodb+srv://rohitkushwah6109744:ram123@cluster0.uh5u4.mongodb.net/Study-course-project?retryWrites=true&w=majority&appName=Cluster0";


const connectDB = () => {
  return mongoose
    .connect(live_url)
    .then(() => {
      console.log("Connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDB;
