define(['bootstrap'], function(news) {

	var publicMethod = function() {
			console.log('This is fired from our example module from a direct call in app');
			console.log(news);
			console.log('**********');
			news.pubsub.emitEvent('start-interaction');
			return true;
        };



	return {
        publicMethod: publicMethod
    };
		
});