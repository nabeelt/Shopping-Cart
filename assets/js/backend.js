
var express = require('express');
var app = express();
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://10.1.4.87');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.use(express.bodyParser());
var LocalStorage = require('node-localstorage').LocalStorage,
		localStorage = new LocalStorage('./scratch');

var backendcallback = function(){
	var userData;
	app.post('/login', function(req, res){
		userData = JSON.parse(localStorage.getItem('signup-data'));
		var response = {
			status  : 200,
			success : 'loggedin-succussfully'
		}

		console.log(userData);
		// if(req.query.username == "nabeel" && req.query.password == "nabeel"){
		// 	response.success = "success";
		// }else{
		// 	response.success = "failure";
		// }
		res.end(JSON.stringify(response));
	});

	app.post('/signup', function(req, res){
		// var userData = [];
		var data = {
			"name" : req.query.name,
			"phone" : req.query.phone,
			"username" : req.query.username,
			"password" : req.query.password
		}
		console.log("data--->",data);
		// console.log(req);
		var response = {
			status  : 200,
			success : 'Signup is successfull.'
		}
		// userData.push(JSON.stringify(data));
		data = JSON.stringify(data);
   		localStorage.setItem('signup-data', data);
		console.log("local-storage-data",localStorage.getItem('signup-data'));
		res.end(JSON.stringify(response));
	});
}
backendcallback();
app.listen(3000);

