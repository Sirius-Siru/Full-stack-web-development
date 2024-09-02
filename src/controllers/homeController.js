import db from "../models/index.js";

let getHomePage = async (req, res) =>{
	try{
		let data = await db.User.findAll();
		console.log("---------------------------");
		console.log(data);
		console.log("---------------------------");
		return res.render("homePage.ejs", {
			data: JSON.stringify(data)
		});
	}catch(e){
		console.log(e);
	}
}
let furinaPage = (req, res) =>{
	return res.render("test/furinaPage.ejs");
}

module.exports = {
	getHomePage: getHomePage,
	furinaPage: furinaPage,
}