/* global require, module */
(function () {
  'use strict';

  var _ = require('underscore');

  var devScripts = [
    'vendor/jquery.js',
    'vendor/webshim/polyfiller.js',
    'vendor/modernizr.js',
    'vendor/underscore.js',
    'vendor/underscore.string.js',
    'vendor/respond.js',
    'vendor/angular.js',
    'vendor/angular-animate.js',
    'vendor/angular-messages.js',
    'vendor/angular-ui-router.js',
    'vendor/angular-sanitize.js',
    'vendor/restangular.js',
    'vendor/ng-storage.js',
    'vendor/raphael.js',
    'vendor/morris.js',
    'vendor/bootstrap/ui-bootstrap-tpls.js',
    'vendor/ZeroClipboard.js',
    'vendor/angular-easyfb.min.js',
    'vendor/socialite.js',
    'vendor/angular-base64.js',
    'vendor/xeditable.js',
    'vendor/angular-md5.js',
    'vendor/angular-load.js',
    'vendor/angular-datepicker.js',
    'vendor/moment.js',
    'vendor/treasure-overlay-spinner.js',
    'vendor/angular-ui-notification.js'
  ];

  module.exports = function (grunt) {
    var getConfig = function () {
      return JSON.stringify(
        _.extend(
          grunt.file.readJSON('config.dist.json'),
          {
            countries: grunt.file.readJSON('bower_components/countries/countries.minimal.json'),
          },
          grunt.file.isFile('config.json') ? grunt.file.readJSON('config.json') : {}
        )
      );
    };

    var config = {
      pkg: grunt.file.readJSON('package.json'),
      exec: {
        bower: {
          cmd: 'bower install',
        },
      },
      jshint: {
        files: ['*.{js,json}', 'src/**/*.{js,json}', '!config*.json', '!package-lock.json', '!Gruntfile.js'],
        options: {
          bitwise: true,
          camelcase: false,
          curly: true,
          eqeqeq: true,
          forin: true,
          immed: true,
          indent: 4,
          latedef: true,
          newcap: true,
          noarg: true,
          noempty: true,
          nonew: true,
          plusplus: true,
          undef: true,
          unused: true,
          strict: true,
          trailing: true,

          maxparams: 10,
          maxdepth: 5,
          maxstatements: 30,
          maxcomplexity: 10,
          maxlen: 120,

          browser: true,
          quotmark: false,
        },
      },
      karma: {
        options: {
          singleRun: true,
          frameworks: ['jasmine'],
          preprocessors: grunt.file
            .expand('src/**/*.js')
            .filter(function (file) {
              return file.indexOf('/spec/') === -1;
            })
            .reduce(function (preprocessors, file) {
              preprocessors[file] = 'coverage';
              return preprocessors;
            }, {}),
          browsers: ['PhantomJS'],
          reporters: ['progress', 'coverage'],
          coverageReporter: {
            type: 'text-summary',
            dir: 'coverage/',
          },
          logLevel: 'warn',
          files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/webshim/js-webshim/dev/polyfiller.js',
            'bower_components/modernizr/modernizr.js',
            'bower_components/underscore/underscore.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-messages/angular-messages.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/raphael/raphael.js',
            'bower_components/morris.js/morris.js',
            'bower_components/socialite-js/socialite.js',
            'bower_components/angular-base64/angular-base64.js',
            'bower_components/angular-xeditable/dist/js/xeditable.js',
            'bower_components/angular-md5/angular-md5.js',
            'bower_components/angular-load/angular-load.js',
            'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            'bower_components/angularjs-datepicker/src/js/angular-datepicker.js',
            'bower_components/moment/moment.js',
            'bower_components/angular-treasure-overlay-spinner/src/treasure-overlay-spinner.js',
            'bower_components/angular-ui-notification/dist/angular-ui-notification.js',
            'src/**/*.js'
          ]
        },
        default: {},
        html: {
          coverageReporter: {
            type: 'html',
            dir: 'coverage/',
          },
        },
      },
      watch: {
        default: {
          files: ['Gruntfile.js', 'bower.json', 'config*', 'src/**/*'],
          tasks: ['default'],
        },
      },
      clean: {
        default: ['web'],
      },
      copy: {
        dev: {
          files: [
            {
              src: 'bower_components/jquery/dist/jquery.js',
              dest: 'web/vendor/jquery.js',
            },
            {
              expand: true,
              cwd: 'bower_components/webshim/js-webshim/dev/',
              src: '**/*',
              dest: 'web/vendor/webshim/',
            },
            {
              src: 'bower_components/modernizr/modernizr.js',
              dest: 'web/vendor/modernizr.js',
            },
            {
              src: 'bower_components/respond/respond.src.js',
              dest: 'web/vendor/respond.js',
            },
            {
              src: 'bower_components/raphael/raphael.js',
              dest: 'web/vendor/raphael.js',
            },
            {
              src: 'bower_components/morris.js/morris.js',
              dest: 'web/vendor/morris.js',
            },
            {
              src: 'bower_components/morris.js/morris.css',
              dest: 'web/vendor/morris.css',
            },
            {
              src: 'bower_components/angular/angular.js',
              dest: 'web/vendor/angular.js',
            },
            {
              src: 'bower_components/angular-animate/angular-animate.js',
              dest: 'web/vendor/angular-animate.js',
            },
            {
              src: 'bower_components/angular-messages/angular-messages.js',
              dest: 'web/vendor/angular-messages.js',
            },
            {
              src: 'bower_components/angular-ui-router/release/angular-ui-router.js',
              dest: 'web/vendor/angular-ui-router.js',
            },
            {
              src: 'bower_components/angular-sanitize/angular-sanitize.js',
              dest: 'web/vendor/angular-sanitize.js',
            },
            {
              src: 'bower_components/restangular/dist/restangular.js',
              dest: 'web/vendor/restangular.js',
            },
            {
              src: 'bower_components/ngstorage/ngStorage.js',
              dest: 'web/vendor/ng-storage.js',
            },
            {
              src: 'bower_components/underscore/underscore.js',
              dest: 'web/vendor/underscore.js',
            },
            {
              src: 'bower_components/underscore.string/lib/underscore.string.js',
              dest: 'web/vendor/underscore.string.js',
            },
            {
              src: 'bower_components/socialite-js/socialite.js',
              dest: 'web/vendor/socialite.js',
            },
            {
              src: 'bower_components/angular-base64/angular-base64.js',
              dest: 'web/vendor/angular-base64.js',
            },
            {
              src: 'bower_components/angular-xeditable/dist/js/xeditable.js',
              dest: 'web/vendor/xeditable.js',
            },
            {
              src: 'bower_components/angular-xeditable/dist/css/xeditable.css',
              dest: 'web/vendor/xeditable.css',
            },
            {
              src: 'bower_components/angular-md5/angular-md5.js',
              dest: 'web/vendor/angular-md5.js',
            },
            {
              src: 'bower_components/angular-load/angular-load.js',
              dest: 'web/vendor/angular-load.js',
            },
            {
              src: 'bower_components/zeroclipboard/ZeroClipboard.js',
              dest: 'web/vendor/ZeroClipboard.js',
            },
            {
              src: 'bower_components/zeroclipboard/ZeroClipboard.swf',
              dest: 'web/vendor/ZeroClipboard.swf',
            },
            {
              src: 'bower_components/angular-easyfb/angular-easyfb.min.js',
              dest: 'web/vendor/angular-easyfb.min.js',
            },
            {
              src: 'bower_components/angularjs-datepicker/src/js/angular-datepicker.js',
              dest: 'web/vendor/angular-datepicker.js',
            },
            {
              src: 'bower_components/angularjs-datepicker/src/css/angular-datepicker.css',
              dest: 'web/vendor/angular-datepicker.css',
            },
            {
              src: 'bower_components/angular-treasure-overlay-spinner/src/treasure-overlay-spinner.js',
              dest: 'web/vendor/treasure-overlay-spinner.js'
            },
            {
              src: 'bower_components/angular-treasure-overlay-spinner/src/treasure-overlay-spinner.css',
              dest: 'web/vendor/treasure-overlay-spinner.css'
            },
            {
              src: 'bower_components/angular-ui-notification/dist/angular-ui-notification.js',
              dest: 'web/vendor/angular-ui-notification.js'
            },
            {
              src: 'bower_components/angular-ui-notification/dist/angular-ui-notification.css',
              dest: 'web/vendor/angular-ui-notification.css'
            },
            {
              src: 'bower_components/moment/moment.js',
              dest: 'web/vendor/moment.js'
            },
            {
              expand: true,
              cwd: 'bower_components/angular-bootstrap/',
              src: 'ui-bootstrap-tpls.js',
              dest: 'web/vendor/bootstrap/',
            },
            {
              expand: true,
              cwd: 'bower_components/bootstrap/dist/css/',
              src: 'bootstrap.css',
              dest: 'web/vendor/bootstrap/',
            },
            {
              expand: true,
              cwd: 'bower_components/bootstrap/fonts/',
              src: '*',
              dest: 'web/assets/fonts',
            },
            {
              expand: true,
              cwd: 'bower_components/recurlyjs/themes/default/',
              src: '**',
              dest: 'web/vendor/recurly/',
            },
            {
              expand: true,
              cwd: 'src/library',
              src: '**',
              dest: 'web/',
            },
            {
              expand: true,
              cwd: 'src/',
              src: '**/*.{jpg,png,css,svg,otf,eot,ttf,woff}',
              dest: 'web/',
            },
          ],
        },
        prod: {
          files: [
            {
              expand: true,
              cwd: 'bower_components/recurlyjs/themes/default/',
              src: '**',
              dest: 'web/vendor/recurly/',
            },
            {
              expand: true,
              cwd: 'src/library',
              src: ['**/*', '!**/*.js'],
              dest: 'web/',
            },
            {
              expand: true,
              cwd: 'src/',
              src: '**/*.{jpg,png,css,svg,otf,eot,ttf,woff}',
              dest: 'web/',
            },
            {
              expand: true,
              cwd: 'bower_components/webshim/js-webshim/dev/',
              src: '**/*',
              dest: 'web/assets/',
            },
            {
              src: 'bower_components/zeroclipboard/ZeroClipboard.swf',
              dest: 'web/vendor/ZeroClipboard.swf',
            },
            {
              src: 'bower_components/angularjs-datepicker/src/css/angular-datepicker.css',
              dest: 'web/vendor/angular-datepicker.css',
            },
            {
              src: 'bower_components/angular-treasure-overlay-spinner/src/treasure-overlay-spinner.css',
              dest: 'web/vendor/treasure-overlay-spinner.css'
            },
            {
              src: 'bower_components/angular-ui-notification/dist/angular-ui-notification.css',
              dest: 'web/vendor/angular-ui-notification.css'
            },
            {
              expand: true,
              cwd: 'bower_components/bootstrap/fonts/',
              src: '*',
              dest: 'web/assets/fonts',
            }
          ],
        },
      },
      less: {
        default: {
          expand: true,
          cwd: 'src/assets/',
          src: '*.less',
          dest: 'web/assets/',
          ext: '.css',
        },
      },
      sass: {
        default: {
          expand: true,
          cwd: 'src/assets/',
          src: '*.scss',
          dest: 'web/assets/',
          ext: '.css',
        },
      },
      concat: {
        options: {
          separator: ';',
        },
        dev: {files: []},
        prod: {
          files: [
            {
              src: [
                'bower_components/jquery/dist/jquery.js',
                'bower_components/webshim/js-webshim/dev/polyfiller.js',
                'bower_components/modernizr/modernizr.js',
                'bower_components/underscore/underscore.js',
                'bower_components/underscore.string/lib/underscore.string.js',
                'bower_components/respond/respond.src.js',
                'bower_components/angular/angular.js',
                'bower_components/angular-animate/angular-animate.js',
                'bower_components/angular-messages/angular-messages.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/angular-sanitize/angular-sanitize.js',
                'bower_components/restangular/dist/restangular.js',
                'bower_components/ngstorage/ngStorage.js',
                'bower_components/raphael/raphael.js',
                'bower_components/morris.js/morris.js',
                'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
                'bower_components/zeroclipboard/ZeroClipboard.js',
                'bower_components/angular-easyfb/angular-easyfb.min.js',
                'bower_components/angular-base64/angular-base64.js',
                'bower_components/angular-xeditable/dist/js/xeditable.js',
                'bower_components/angular-md5/angular-md5.js',
                'bower_components/angular-load/angular-load.js',
                'bower_components/angularjs-datepicker/src/js/angular-datepicker.js',
                'bower_components/moment/moment.js',
                'bower_components/angular-treasure-overlay-spinner/src/treasure-overlay-spinner.js',
                'bower_components/angular-ui-notification/dist/angular-ui-notification.js',
                'src/library/*.js'
              ],
              dest: 'web/assets/admin-panel.js',
            },
          ],
        },
      },
      uglify: {
        options: {
          mangle: true
        },
        prod: {
          src: 'web/assets/admin-panel.js',
          dest: 'web/assets/admin-panel.min.js',
        }
      },
      cssmin: {
        prod: {
          src: [
            'web/assets/elements.css',
            'web/assets/app.css',
            'web/vendor/xeditable.css',
            'web/vendor/angular-datepicker.css',
            'web/vendor/treasure-overlay-spinner.css',
            'web/vendor/angular-ui-notification.css'
          ],
          dest: 'web/assets/admin-panel.min.css',
        },
      },
      template: {
        dev: {
          src: 'src/index.hb',
          dest: 'web/index.html',
          variables: {
            styles: [
              'assets/elements.css',
              'assets/app.css',
              'vendor/xeditable.css',
              'vendor/angular-datepicker.css',
              'vendor/treasure-overlay-spinner.css',
              'vendor/angular-ui-notification.css'
            ],
            scripts: function () {
              return devScripts.concat(grunt.file.expand({cwd: 'web'}, '*.js'));
            },
            modules: grunt.file
              .expand('src/modules/*')
              .map(function (module) {
                return "'" + module.split('/')[2] + "'";
              })
              .join(', '),
            config: getConfig,
          },
        },
        prod: {
          src: 'src/index.hb',
          dest: 'web/index.html',
          variables: {
            styles: ['assets/admin-panel.min.css'],
            scripts: ['assets/admin-panel.min.js'],
            modules: grunt.file
              .expand('src/modules/*')
              .map(function (module) {
                return "'" + module.split('/')[2] + "'";
              })
              .join(', '),
            config: getConfig,
          },
        },
        loginEmbedDev: {
          src: 'src/login-embed.hb',
          dest: 'web/login-embed.html',
          variables: {
            styles: ['assets/elements.css', 'assets/app.css'],
            scripts: function () {
              return devScripts.concat(grunt.file.expand({cwd: 'web'}, '*.js'));
            },
            config: getConfig,
          },
        },
        loginEmbedProd: {
          src: 'src/login-embed.hb',
          dest: 'web/login-embed.html',
          variables: {
            styles: ['assets/admin-panel.min.css'],
            scripts: ['assets/admin-panel.min.js'],
            config: getConfig,
          },
        },
      },
      hashres: {
        options: {
          encoding: 'utf8',
          fileNameFormat: '${name}.${hash}.${ext}',
          renameFiles: true,
        },
        prod: {
          src: ['web/assets/admin-panel.min.css', 'web/assets/admin-panel.min.js'],
          dest: ['web/index.html', 'web/login-embed.html'],
        },
      },
      sg_release: {
        default: {
          options: {
            // sg_release specific properties
            skipBowerInstall: true,
            developBranch: 'develop',
            masterBranch: 'master',
            files: [
              'package.json'
            ],
            commitMessage: 'Release v%VERSION%',
            commitFiles: ['-a'], // '-a' for all files
            pushTo: 'origin',
            tagMessage: 'Version %VERSION%',
            mergeOptions: ''
          }  
        }
      }
    };

    grunt.file.expand('src/modules/*/').forEach(function (module) {
      config.concat.dev.files.push(
        grunt.file
          .expand(module + '**/*.js')
          .filter(function (file) {
            return file.indexOf('/spec/') === -1;
          })
          .reduce(
            function (files, file) {
              config.concat.prod.files[0].src.push(file);
              files.src.push(file);
              return files;
            },
            {src: [], dest: 'web/' + module.split('/')[2] + '.js'}
          )
      );
      config.copy.dev.files.push({
        expand: true,
        cwd: module + 'views/',
        src: '**/*.html',
        dest: 'web/' + module.split('/')[2] + '/',
      });
      config.copy.prod.files.push({
        expand: true,
        cwd: module + 'views/',
        src: '**/*.html',
        dest: 'web/' + module.split('/')[2] + '/',
      });
    });

    grunt.initConfig(config);

    [
      'grunt-contrib-jshint',
      'grunt-contrib-uglify',
      'grunt-contrib-cssmin',
      'grunt-contrib-watch',
      'grunt-contrib-concat',
      'grunt-contrib-copy',
      'grunt-contrib-less',
      'grunt-contrib-sass',
      'grunt-contrib-clean',
      'grunt-hashres',
      'grunt-exec',
      'grunt-templater',
      'grunt-karma',
      'grunt-sg-release'
    ].forEach(grunt.loadNpmTasks);

    grunt.registerTask('dev', [
      'exec:bower',
      'jshint',
      'clean',
      'copy:dev',
      'concat:dev',
      'less',
      'sass'
    ]);

    grunt.registerTask('prod', [
      'exec:bower',
      'jshint',
      'karma',
      'concat:prod',
      'uglify:prod',
      'less',
      'sass',
      'copy:prod',
      'cssmin:prod',
      'template:prod',
      'template:loginEmbedProd',
      'hashres:prod',
    ]);

    grunt.registerTask('default', ['dev']);
  };
})();
