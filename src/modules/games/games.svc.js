(function () {
	angular.module('gamesModule')
	.service('gamesService', gamesService);

	function gamesService($resource) {
		var _this = this;

		// define the match model
		var Match = $resource('/game/:id', { id: '@id' });

		// define CRUD operations
		_this.get = get;
		_this.post = post;

		// Implement CRUD operations
		function get(id) {
			if (id) {
				return Match.get({ id: id });
			} else {
				return Match.query();
			}
		}

		function post() {
			// blabla
		}
	}
})();