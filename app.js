const express = require("express");
const app = express();
const fs = require('fs');
const sequelize = require("sequelize");
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.get('/',(req,res)=>{
	fs.readFile('public/index.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/about',(req,res)=>{
	fs.readFile('public/about.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/blog',(req,res)=>{
	fs.readFile('public/blog.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/featured',(req,res)=>{
	fs.readFile('public/featured.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/recipes',(req,res)=>{
	fs.readFile('public/recipes.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})

app.get('/videos',(req,res)=>{
	fs.readFile('public/videos.html',(err,data)=>{
		res.statusCode=200;
		res.setHeader('content-type','text/html');
		res.send(data);
	})
})
	
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));


