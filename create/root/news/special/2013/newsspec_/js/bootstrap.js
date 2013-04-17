// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
// JQuery and IStats delivered via BBC require Map on all BBC responsive pages...
// Here we could define other dependencies that may be require specifically by our application
// for example rapheal or a pubsub module..
define([
    'vendor/ender/bonzo',
    'vendor/ender/qwery-mobile',
    'vendor/istats/istats',
    'lib/event_emitter'
], function (
    bonzo,
    qwery,
    istats,
    EventEmitter
) {
    var news = {
        $: function (selector, context) {
            return bonzo(qwery(selector, context));
        },
        istats: istats,
        pubsub: new EventEmitter() 
    };

    return news;
});