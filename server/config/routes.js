var path  = require('path');
	posts = require('../controllers/posts');
	users = require('../controllers/users');
	sessions = require('../controllers/sessions');
	answers = require('../controllers/answers');

module.exports = (app) =>
{
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.get('/posts', posts.index);
	app.post('/posts', posts.create);
	app.get('/posts/:id', posts.show);
	app.delete('/posts/:id', posts.delete);

	app.post('/answers', answers.create);
	app.get('/answers/:id', answers.index);
	// Server routes will be plural
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}