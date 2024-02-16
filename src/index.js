import express from "express";
require("dotenv").config();

import configViewEngine from "./config/viewEngine";
import initWebRoutes from './routes/web';

const app = express();

configViewEngine(app);

initWebRoutes(app);


const PORT = process.env.PORT || 6969;
app.listen(PORT, () => {
  console.log("Server is running on port:",PORT);
});