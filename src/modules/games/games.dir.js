(function () {
	angular.module('gamesModule')
	.directive('gamesDirective', gamesDirective);

	function gamesDirective() {
		return {
			controller: 'gamesController as gamesCtrl',
			replace: true,
			templateUrl: './src/modules/games/games.tpl.html'
		}
	}
})();