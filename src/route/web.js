import express from "express";
import homeController from "../controllers/homeController.js"

let router = express.Router();

let initWebRouters = (app) =>{
	router.get("/", homeController.getHomePage);
	router.get("/furinaPage", homeController.furinaPage);
	return app.use("/", router);
}

module.exports = initWebRouters;