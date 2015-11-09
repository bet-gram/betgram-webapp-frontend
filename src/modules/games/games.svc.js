(function () {
	angular.module('gamesModule')
	.service('gamesService', gamesService);

	function gamesService($resource) {
		var _this = this;

		// define the match model
		var Match = $resource('http://betgram-services.herokuapp.com/matches/');

		// define CRUD operations
		_this.get = get;
		_this.post = post;

		// Implement CRUD operations
		function get(cb) {
			return Match.query(cb);
		}

		function post() {
			// blabla
		}
	}
})();