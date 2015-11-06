(function () {
	angular.module('featuresModule')
	.directive('featuresDirective', featuresDirective);

	function featuresDirective() {
		return {
			controller: 'featuresController as featuresCtrl',
			replace: true,
			templateUrl: './src/modules/features/features.tpl.html'
		}
	}
})();