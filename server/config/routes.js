var path  = require('path');
	posts = require('../controllers/posts');
	users = require('../controllers/users');
	sessions = require('../controllers/sessions');

module.exports = (app) =>
{
	app.post('/users', users.create);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.get('/posts', posts.index);
	app.post('/posts', posts.create);
	// Server routes will be plural
	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}