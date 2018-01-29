var mongoose = require("mongoose"),
	db_name  = "questions";

mongoose.connect(`mongodb://localhost/${db_name}`);