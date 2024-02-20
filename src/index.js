import express from "express";
require("dotenv").config();

import configViewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';
import bodyParser from "body-parser";
import checkConnection from "./config/connectDB";

checkConnection()
const app = express();

configViewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

initWebRoutes(app);


const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});