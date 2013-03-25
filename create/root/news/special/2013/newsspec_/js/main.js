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
    var baseUrl = 'http://noldev25new.newsonline.tc.nca.bbc.co.uk:11138',
    isDesktop = false;
    console.log(window)
    // Check to see if we are on the desktop site or the responsive
    isDesktop = (window.bbc) ? true : false;
    // If we are desktop
    if (isDesktop === true) {
    // collect the wrapper id for the include and give it a desktop hook 
    document.getElementById('newsspec_{%= newsspec_number %}').className = 'desktop';
    // define path for bootstrap (desktop);

    config = {
        paths: {
            'js': '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/module',
            'newspec_{%= newsspec_number %}/js/bootstrap': '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/bootstrap-desktop'
            }
        };

    }else{ 
    // give the responsive hook   
    document.getElementById('newsspec_{%= newsspec_number %}').className = 'mobile';
    // define path for bootstrap (responsive);
    config = {
        paths: {
                'js': '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/module',
                'newspec_{%= newsspec_number %}/js/bootstrap': '/news/special/{%= year %}/newsspec_{%= newsspec_number %}/js/bootstrap'
            }
        };
    }

    // pull in our bootstraps
    require(config,['newspec_{%= newsspec_number %}/js/bootstrap'],
        // OUR CODE GOES HERE OR IN MODULES..

        function(news) {

             function init(){
                //Once the dom is initialised and all the modules loaded we can do stuff
                console.log("initialised as Desktop :"+isDesktop);
                // we can access our selector engine by
                console.log(news.$("#newsspec_{%= newsspec_number %}"));
            }


           // news.$(function () { 
                init();
            //});

    }); //end of require
}());