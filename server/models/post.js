var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	
	title: {
		type: String,
		required: [true, 'Title is required.']
	},

	content: {
		type: String,
		required: [true, 'Content is required.']
	},

	userid: {type: Schema.Types.ObjectId, ref: "User"},

}, { timestamps: true});

module.exports = mongoose.model('Post', PostSchema);

