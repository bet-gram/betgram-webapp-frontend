(function () {
	angular.module('answerModule')
	.service('answerService', answerService);

	function answerService($resource) {
		var _this = this;

		// define the match model
		var Match = $resource('https://betgram-services.herokuapp.com/summary/:id1/:id2', {
			id1: '@id1',
			id2: '@id2'
		});

		// define CRUD operations
		_this.get = get;
		_this.post = post;

		// Implement CRUD operations
		function get(ids, cb) {
			return Match.get(ids, cb);
		}

		function post() {
			// blabla
		}
	}
})();