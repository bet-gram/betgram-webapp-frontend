(function () {
	angular.module('homeModule')
	.directive('homeDirective', homeDirective);

	function homeDirective() {
		return {
			controller: 'homeController as homeCtrl',
			replace: true,
			templateUrl: './src/modules/home/home.tpl.html'
		}
	}
})();