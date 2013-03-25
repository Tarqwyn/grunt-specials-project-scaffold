/*
 * grunt-init-newsspec
 * https://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a BBC News Specials project, including Nodeunit unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = ['*.png', '*.gif', '*.jpg'];

// The actual init template.
exports.template = function(grunt, init, done) {
  init.process({}, [
    // Prompt for these values.
    {
          name: 'newsspec_number',
          message: 'Jira Newsspec Number',
          default: '0000', 
          validator: /^[0-9]+$/,
          warning: 'Must be only numbers',
          sanitize: function(value, data, done) {
          // An additional value, safe to use as a JavaScript identifier.
          data.js_safe_name = value.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
          // An additional value that won't conflict with NodeUnit unit tests.
          data.js_test_safe_name = data.js_safe_name === 'test' ? 'myTest' : data.js_safe_name;
          // If no value is passed to `done`, the original property isn't modified.
          data.year = new Date().getFullYear();
          data.repository = 'https:/ /repo.dev.bbc.co.uk/static/news_specials/tasks/'+data.year+'/newsspec'+data.js_test_safe_name;
          
          done();
        }
    },
    init.prompt('description','News Specials task'),
    {
      name: 'author_name',
      message: 'Author Name',
      default:   function(value, data, done) {
          done(null, process.env.USER || process.env.USERNAME || '???');
      },
      warning: 'May consist of any characters.'
    },
    {
      name: 'author_email',
      message: 'Author email',
      default:   function(value, data, done) {
          done(null, (process.env.USER || process.env.USERNAME || '???')+'@bbc.co.uk');
      },
      warning: 'May consist of any characters.'
    },
    init.prompt('licenses'),
  ], function(err, props) {
    props.keywords = [];
    props.devDependencies = {
      'grunt-contrib-concat': '~0.1.2',
      'grunt-contrib-uglify': '~0.1.1',
      'grunt-contrib-jshint': '~0.1.1',
      'grunt-contrib-nodeunit': '~0.1.2',
      'grunt-contrib-watch': '~0.2.0',
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    // init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: '**/.DS_Store'});

    // Generate package.json file.
    //init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
