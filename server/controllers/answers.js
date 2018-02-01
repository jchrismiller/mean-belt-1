var session  = require('express-session');
var mongoose = require('mongoose');
var Answer   = require('../models/answer');
var Post 	 = require('../models/post');
var ObjectId = require('mongodb').ObjectId;

module.exports = {
	index: (req, res) => {
		Answer.find({_post: req.params.id})
		.populate('_user')
		.exec((err, answers) => {
			if(err){
	    		console.log(err);
	    		return res.json(err);
	    	}
	        return res.json(answers);
	    });
	},

	create: (req, res) =>{
		console.log("for fuck's sake man1!!!")
		let answer = new Answer(req.body);
		answer._user = session.user_id;
	    answer.save(
	    	(err) => {
	    		if (err) {
	           		return res.json(err);
	    		}

	    		// Post.findAndUpdate({_id: answer._post}, {$push: {answers: answer}})
	    		// $push, $addToSet
	    		Post.findOne({_id: answer._post},
					(err, post) => {
						if (err)
						{
							return res.json(err);
						}

						console.log(answer);

						post.answers.push(answer._id);

						post.save( 
							(err) => {
								if (err) {
									return res.json(err);
								}

								console.log("answer");
		       	 				return res.json(answer);
							}
						)
						
				});
        });
	        
	}

}