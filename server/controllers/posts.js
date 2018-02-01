var Post = require('../models/post');

module.exports = {
	index: (req, res) => {
		Post.find({}, (err, posts) => {
			if(err)
			{
				return res.json(err);
			}

			return res.json(posts);
		});
	},
	create: (req, res) => {
		const post = new Post(req.body);
		console.log("test" + post);

		post.save( (err) => {
			if (err) {
				return res.json(err);
			}

			return res.json(post);
		});
	},
	show: (req, res) => {
		// Need to populate answers
		Post.findOne({_id: req.params.id})
			.populate('answers')
			.exec( (err, post) => {
				if(err)
				{
					return res.json(err);
				}
			return res.json(post);
		});
	},
	update: (req, res) => {

		Post.findOne({_id: req.params.id},
			(err, post) => {
				if (err)
				{
					return res.json(err);
				}

				return res.json(post)
		});
	},

	delete: (req, res) => {

		Post.remove({_id: req.params.id})
		.exec( (err, post) => {
			if (err) {
				console.log(err);
			}
			return res.json(post);
		});
	}
}