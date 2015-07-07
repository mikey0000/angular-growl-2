describe("growlDirective Spec", function() {
	"use strict";

	var $compile,
		$rootScope,
		growl;

	beforeEach(module('angular-growl'));

	beforeEach(inject(function (_$compile_, _$rootScope_, _growl_) {
		$compile = _$compile_;
		$rootScope = _$rootScope_;
		growl = _growl_;
	}));

	it('Replaces the element with the appropriate content', function () {

		var growlElement = $compile('<div growl=""></div>')($rootScope);

		$rootScope.$digest();

		expect(growlElement.html()).toContain('<div class="growl-container growl-fixed top-right"');
	});

	it('should display and hide message', function (done) {

		var growlElement = $compile('<div growl=""></div>')($rootScope);

		$rootScope.$digest();

		expect(growlElement.html()).toContain('<div class="growl-container growl-fixed top-right"');

		growl.error('This is an error');

		var growlScope = angular.element(growlElement).scope().$$childTail;

		setTimeout(function() {
			$rootScope.$digest();
			expect(growlScope.growlMessages.getAllMessages().length).toEqual(0);
			done();
		}, 1100);


	});
});