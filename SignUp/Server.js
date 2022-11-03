const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const usersData = require("./Modles/Account");

const hostname = "localhost";
const port = 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://0.0.0.0:27017/app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/signup", async (req, res) => {
  const { firstname, lastname, password, email, mobile } = req.body;
  let userdata = new usersData({
    firstname,
    lastname,
    password,
    email,
    mobile,
  });
  const data = await userdata.save();
  console.log(data);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
