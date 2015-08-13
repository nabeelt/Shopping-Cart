
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
var backendcallback = function(){
	var userData = {}
	app.get('/demo', function(req, res){
		console.log(req.query.username);
		console.log(req.query.password);
		var response = {
			status  : 200,
			success : ''
		}
		var users = [
						{"username": "nabeel", "password":"nabeel"},
						{"username": "nikhil", "password":"nikhil"}
					];
		if(req.query.username == "nabeel" && req.query.password == "nabeel"){
			response.success = "success";
		}else{
			response.success = "failure";
		}
		res.end(JSON.stringify(response));
	});
}
backendcallback();
app.listen(3000);
