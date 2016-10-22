var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var Form = require('./web-form-model.js');

var app = new express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: true}));

mongoose.connection.on('error', function(err){
	if(err) {
		console.error(err);
		mongoose.disconnect();
	}
});

mongoose.connection.once('open', function() {
	console.log('Database connected');
	
	app.post('/', function(req, res){
		var form = {
			name: req.body.name,
			lastname: req.body.lastname,
			email: req.body.email,
			age: Number(req.body.age),
			gender: req.body.gender
		};
		Form.create(form, function(err, result) {
			if(err){
				console.log(err);
			}else{
				console.log(result);
				res.status(201).json({messsage: "Web form submitted"});
			}
		});
		
	});
	app.post('/find', function(req, res){
		Form.findOne({name: req.body.name}, function(err, result) {
			if(err) {
				console.log(err);
			}
			else{
				res.status(200).json(result);
			}
		});
	});
	
});

mongoose.connect('mongodb://enio:webform@ds063546.mlab.com:63546/webform').then(function() {
	app.listen(process.env.PORT || 7000);
});
