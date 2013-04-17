// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
// JQuery and IStats delivered via BBC require Map on all BBC pages...
// Here we could define other dependencies that may be require specifically by our application
// for example rapheal or a pubsub module..
define([
	'jquery-1', 
	'istats-1',
	'lib/event_emitter'
	], 
	function (jquery, istats, EventEmitter) {
    var news = {
        $: jquery,
        istats: istats,
        pubsub: new EventEmitter()
    };

    return news;
});