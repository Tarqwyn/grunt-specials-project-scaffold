define(['bootstrap'], function(news) {

	return {
        publicMethod: function() {
			console.log('This is fired from our example module');
			console.log(news);
			console.log('**********');
			return true;
        }
    };
		
});