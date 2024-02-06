const express = require("express");
const mysql = require('mysql')
const app = express()
const port=5000
const cors = require("cors");
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");
app.use(express.json());
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Set extended to false
app.use(fileupload());

var userRouter = require("./routes/restaurant");


app.use("/api/v1", userRouter);
require("./dbConnection").connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
  }); 


module.exports = app;