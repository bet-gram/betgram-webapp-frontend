(function () {
	angular.module('pricingModule')
	.directive('pricingDirective', pricingDirective);

	function pricingDirective() {
		return {
			controller: 'pricingController as pricingCtrl',
			replace: true,
			templateUrl: './src/modules/pricing/pricing.tpl.html'
		}
	}
})();