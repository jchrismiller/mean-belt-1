var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
	
	title: {
		type: String,
		required: [true, 'Title is required.']
	},

	content: {
		type: String
	},

	userid: {type: Schema.Types.ObjectId, ref: "User"},

	answers: [{type: Schema.Types.ObjectId, ref: "Answer"}],


}, { timestamps: true, usePushEach: true });

module.exports = mongoose.model('Post', PostSchema);

