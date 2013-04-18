define(['bootstrap'], function(news) {
// Events dispatched from somewhere inside your app when something you want to track happens....
// This format is as set out in Newsspec-5169
news.pubsub.addListener('start-interaction', function (target) {
	console.log('This istat call was triggered via an event in the example module');
	news.istats.log(
		'start', // action type
			"newsSpecial", // action name
			{
				"view": 'User started interaction' // view/description
			}
		);
	});
});		