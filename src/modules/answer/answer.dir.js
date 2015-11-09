(function () {
	angular.module('answerModule')
	.directive('answerDirective', answerDirective);

	function answerDirective() {
		return {
			controller: 'answerController as answerCtrl',
			replace: true,
			scope: {
				answerDirective: '='
			},
			templateUrl: './src/modules/answer/answer.tpl.html'
		}
	}
})();