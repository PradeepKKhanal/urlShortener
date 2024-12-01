// const ejs=require("ejs")
const express = require("express");
const cookieParser=require('cookie-parser')

const path = require("path");

const { PORT, mongoDBUrl } = require("./constant");
const urlRoute = require("./routes/url.routes");
const dbConnect = require("./dbConnect");
const URL = require("./models/url.model");
const staticRoutes=require('./routes/static.routes')
const userRoutes=require('./routes/user.routes')

const {authentication}=require('./middlewares/authentication.middleware')


const app = express();
dbConnect(mongoDBUrl)
	.then(() => {
		console.log(`MongoDB connected successfully in port ${mongoDBUrl}`);
	})
	.catch(() => {
		console.log("Error occured in mongodb connection");
	});
app.set("view engine",'ejs');
// app.set('views',path.resolve('./views'))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use("/urlShortener",authentication, urlRoute);
app.use(staticRoutes)
app.use(userRoutes)
// app.get("/", async (req, res) => {
// 	res.header({ "content-type": "text/html" });
// 	// res.end('<h1>hello world</h1>')
// 	const results = await URL.find({});
// 	res.end(
// 		`<ul>${results
// 			.map(
// 				(result) =>
// 					`<li>${result.shortId} - ${result.redirectURL} - ${result.visitHistory.length}</li>`
// 			)
// 			.join("")}</ul>`
// 	);
// });

// app.get('/home',authentication,async (req,res)=>{
//     const urls=await URL.find({})
//     res.render('home',{urls})
// })
app.listen(8001, () => {
	console.log(`Server is listening in port ${PORT}`);
});
