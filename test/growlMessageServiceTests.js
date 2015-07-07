describe("growlMessageService Spec", function() {
    "use strict";

    var growlFactory,
        growlMessages,
        rootScope;

    beforeEach(module('angular-growl'));
    beforeEach(inject(['$rootScope', 'growl', 'growlMessages', function ($rootScope, gf, gm) {
        growlFactory = gf;
        growlMessages = gm;
        rootScope = $rootScope;
    }]));

    /// TESTS
    it('Should be defined', function () {
        expect(growlMessages).toBeDefined();
    });

});