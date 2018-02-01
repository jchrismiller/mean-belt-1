var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
	
	content: {
		type: String,
		required: [true, 'Content is required.']
	},

	details: {
		type: String,
		required: [true, 'Details is required.']
	},

	// likes: {
	// 	type: Number,
	// 	default: 0
	// },
	_likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],

	_user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},

	_post: {type: mongoose.Schema.Types.ObjectId, ref: "Post"},

}, { timestamps: true});

module.exports = mongoose.model('Answer', AnswerSchema);