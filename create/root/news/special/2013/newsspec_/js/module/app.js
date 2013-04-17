// This is our application entry point ... If possible there should be only one entry point
// However it may be nessecary to have a seperate mobile app entry point. If this is the case then 
// paths inside main.js will need to be added to reflect this.
define(['bootstrap','js/example'], function(news,example) {

    return {
        init: function() {
			console.log('application is initialised and has access to the bootstrap object');
			console.log(news);
			console.log('**********');
			//fire the example module public Method
			example.publicMethod();
        }
    };

});