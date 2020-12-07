const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: "./config/dev.env" });
const connectDB = require("./db/mongoose");
connectDB();
const fileRouter = require("./routers/file");

app.use(express.json());
app.use(fileRouter);

const port = process.env.PORT;



app.listen(port, () => {
  console.log("Wakey Wakey kk, Server is running on " + port);
});