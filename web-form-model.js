var mongoose = require('mongoose');

var FormSchema = new mongoose.Schema({
	name: String,
	lastname: String,
	email: String,
	age: Number,
	gender: String
});

var Form = mongoose.model('Form', FormSchema);

module.exports = Form;