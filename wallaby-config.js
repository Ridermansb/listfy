module.exports = function () {
    return {
        testFramework: 'mocha@2.0.1',

        files: [
            {pattern: 'node_modules/chai/chai.js', instrument: false},
            'www/assets/lib/ionic/js/ionic.bundle.js',
            'www/assets/lib/angular-mocks/angular-mocks.js',
            'www/app/app.js',
            'www/app/components/**/*Controller.js',
            'www/app/components/**/*Service.js',
        ],

        tests: [
            'tests/**/*Test.js'
        ],

        bootstrap: function (wallaby) {
            wallaby.delayStart();

            var mocha = wallaby.testFramework;
            mocha.ui('bdd');

            window.assert = chai.assert;
            window.expect = chai.expect;
            
            wallaby.start();
        }
    };
};
