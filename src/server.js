import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine.js";
import initWebRouters from "./route/web.js";
import connectDB from "./config/connectDB.js";
require("dotenv").config();
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRouters(app);
connectDB();


let port = process.env.PORT || 3000;
app.listen(port, ()=>{
	console.log("Backend nodejs is running on port: "+ port);
});