(function () {
	angular.module('sentimentModule')
	.directive('sentimentDirective', sentimentDirective);

	function sentimentDirective() {
		return {
			controller: 'sentimentController as sentimentCtrl',
			replace: true,
			templateUrl: './src/modules/sentiment/sentiment.tpl.html'
		}
	}
})();