const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required"],
		minlength: [1, "Name minimum characters is 1"]
	},

	posts: [ { type: Schema.Types.ObjectId, ref: "Post"} ],
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);

module.exports = User;