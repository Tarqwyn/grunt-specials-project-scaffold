// Set of dependencies
// This gives us flexibility to change dependencies with a common API e.g. Bonzo --> jQuery
// JQuery and IStats delivered via BBC require Map on all BBC pages...
define(['jquery-1', 'istats-1', 'js/example'], function (jquery, istats, example) {
    var news = {
        $: jquery,
        istats: istats,
        example : example
    };

    return news;
});