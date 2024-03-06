import express from "express";
require("dotenv").config();

import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from "body-parser";
import checkConnection from "./config/connectDB";

checkConnection();
const app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_FE);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
});

configViewEngine(app);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

initWebRoutes(app);

const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});