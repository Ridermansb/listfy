module.exports = function () {
    return {
        testFramework: 'mocha@2.0.1',
        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            {pattern: 'node_modules/karma-sinon-chai/node_modules/sinon/pkg/sinon.js', instrument: false},
            {pattern: 'node_modules/karma-sinon-chai/node_modules/sinon-chai/lib/sinon-chai.js', instrument: false},
            {pattern: 'node_modules/chai-things/lib/chai-things.js', instrument: false},
            'www/assets/lib/ionic/js/ionic.bundle.js',
            'www/assets/lib/angular-mocks/angular-mocks.js',
            'www/assets/lib/ngCordova/dist/ng-cordova.js',
            'www/assets/lib/angular-ui-router/release/angular-ui-router.js',
            'www/assets/lib/ng-lodash/build/ng-lodash.min.js',
            'www/app/app.js',
            'www/app/components/**/*.js',
            'www/app/shared/**/*.js'
        ],

        tests: [
            'test/**/*Test.js'
        ],

        bootstrap: function (wallaby) {
            var mocha = wallaby.testFramework;
            mocha.ui('bdd');
            window.assert = chai.assert;
            window.expect = chai.expect;
        }
    };
};
