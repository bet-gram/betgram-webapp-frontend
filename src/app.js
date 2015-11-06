(function () {
	angular.module('app', [
		'homeModule',
		'sentimentModule',
		'gamesModule',
		'featuresModule',
		'pricingModule',
		'ngResource',
		'mockModule'
	])
	.config(config);

	function config($resourceProvider) {
		// Don't strip trailing slashes from calculated URLs
		$resourceProvider.defaults.stripTrailingSlashes = false;
	}
})();