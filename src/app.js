(function () {
	angular.module('app', [
		'homeModule',
		'sentimentModule',
		'gamesModule',
		'featuresModule',
		'pricingModule',
		'answerModule',
		'ngResource'
	])
	.config(config);

	function config($resourceProvider) {
		// Don't strip trailing slashes from calculated URLs
		$resourceProvider.defaults.stripTrailingSlashes = true;
	}
})();