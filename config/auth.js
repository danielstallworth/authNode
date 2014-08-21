// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID' 		: '1467067206897198', //'your-secret-clientID-here', // your App ID
		'clientSecret' 	: 'ae2e15cba8f2f7f8a9dd479193a9cac0', //'your-client-secret-here', // your App Secret
		'callbackURL' 	: 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey' 		: 'QVkkvW8ZUaPzO8EXF3FQIW08j', //your-consumer-key-here',
		'consumerSecret' 	: '4H548Z8YAillP1IAiDYMZuGI8N6N5S1qnEuMBXSiUD3tJRe5kQ', //your-client-secret-here',
		'callbackURL' 		: 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID' 		: 'your-secret-clientID-here',
		'clientSecret' 	: 'your-client-secret-here',
		'callbackURL' 	: 'http://localhost:8080/auth/google/callback'
	}

};
