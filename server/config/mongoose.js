var mongoose = require("mongoose"),
	db_name  = "post-something";

mongoose.connect(`mongodb://localhost/${db_name}`);