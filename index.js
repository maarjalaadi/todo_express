const express = require('express')
const app = express()
const fs = require('fs');

// use ejs files to prepare templates for views 
const path = require('path')
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))
const readFile = (filename) =>
return new Promise(resolve,reject) => {
//get data from file
	fs.readFile(filename, 'utf8', (err, data) => {
		if (err) {
		console.error(err);
		return;
	}
// tasks list data from file
	const tasks = data.split("\n")
	resolve(tasks)
	});
})
}
app.get('/', (req,res) => {
	// get data from file
	fs.readFile('./tasks', 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
// tasks list data from file
	const tasks = data.split("\n")
	res.render('index', {tasks:tasks})
	});
})

//For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

app.post('/', (req, res) => {
	console.log('form sent data')
	console.log(req.body.task)
// get data from file
fs.readFile('./taks', 'utf8', (err, data) => {
	if err {
		console.log(err);
		return;
	}
// tasks list data from file
	const tasks = data.split["\n"]
})
app.listen(3001, () => {
	console.log('Example app is started at http://localhost:3001')
})
