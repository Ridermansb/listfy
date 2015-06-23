// Karma configuration
// Generated on Sat Jun 20 2015 13:48:06 GMT-0300 (BRT)

module.exports = function (config) {
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            'www/assets/lib/ionic/js/ionic.bundle.js',
            'www/assets/lib/ngCordova/dist/ng-cordova.js',
            'www/assets/lib/angular-ui-router/release/angular-ui-router.js',
            'www/assets/lib/angular-mocks/angular-mocks.js',
            'www/app/app.js',
            'www/app/components/**/*Controller.js',
            'www/app/components/**/*Service.js',
            'tests/**/*Test.js'
        ],

        // list of files to exclude
        exclude: [],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'www/app/**/*.js': ['coverage']
        },

        reporters: ['coverage', 'progress'],

        coverageReporter: {
            type: 'lcovonly',
            dir: 'tests/coverage/'
        },

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
