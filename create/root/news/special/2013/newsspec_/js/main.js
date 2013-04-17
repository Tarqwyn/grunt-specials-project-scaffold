/*
 * newsspec_{%= newsspec_number %}
 * https://jira.dev.bbc.co.uk/browse/NEWSSPEC-{%= newsspec_number %}
 * {%= repository %}
 * {%= description %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} BBC
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

(function () {
    var baseUrl,
    debug = 'true',
    isDesktop = (window.bbc),
    el = document.getElementById('newsspec_{%= newsspec_number %}'),
    //environment variable switch based on current environment 'prod' for production
    env = 'dev';
    el.className = 'ns__clearfix';
    if(env === 'prod'){
        baseUrl = 'http://news.bbcimg.co.uk';
        //baseUrl = '{%= sandbox %}';
    }else{
        //can be changed to any development environment you like...
        baseUrl = '{%= sandbox %}';
    } 
    //default configuration 
    config = {
        paths: {
            'js': baseUrl + '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/module', //define entry point for desktop js...
            'lib': baseUrl + '/news/special/2013/newsspec_{%= newsspec_number %}/js/lib',
            'bootstrap': baseUrl + '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/bootstrap-desktop' 
            }
        };

    // If we are desktop
    if (isDesktop) {
        if(debug){
            document.getElementsByTagName('HTML')[0].className = 'debug';
        }
        // collect the wrapper id for the include and give it a desktop hook
        el.className += ' ns__desktop';
        // Switch app to compiled file in production     
        if (env === 'prod') {
            config.paths['js'] = baseUrl + '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/compiled/desktop';
        }
    }else{ 
    // give the responsive hook   
        el.className += ' ns__mobile';
        //switch the bootstrap in dev mode...
        config.paths['bootstrap'] = baseUrl + '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/bootstrap';
        // Switch app to compiled file in production
        if (env === 'prod') {
            config.paths['js'] = baseUrl + '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/compiled/mobile';
        }
    }

    // pull in our application entry point in this case app...
    require(config,['js/app',(isDesktop) ? 'domReady!' : ''],
        function(app) {
            //This function is called once the DOM is ready on Desktop
            //It will be safe to query the DOM and manipulate
            //DOM nodes in this function.
           app.init();
        } 
    ); //end of require

    // FIXME: Remove in production
    // Avoid `console` errors in browsers that lack a console
    if (!(window.console && console.log)) {
        (function() {
            var noop = function() {};
            var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
            var length = methods.length;
            var console = window.console = {};
            while (length--) {
                console[methods[length]] = noop;
            }
        }());
    }
}());