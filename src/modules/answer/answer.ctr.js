(function () {
	angular.module('answerModule')
	.controller('answerController', answerController);

	function answerController($scope, answerService) {
		var _this = this;

		var answer = document.getElementById('answer');
		answer.style.opacity = 0;
		setTimeout(function () {
			answer.style.opacity = 1;
		}, 0);

		_this.result = answerService.get($scope.answerDirective, function () {
			_this.result.prediction.home = Math.round(_this.result.prediction.home * 100) / 100;
			_this.result.prediction.draw = Math.round(_this.result.prediction.draw * 100) / 100;
			_this.result.prediction.away = Math.round(_this.result.prediction.away * 100) / 100;

			var tot = _this.result.weights[0].weighted_retweet_index + _this.result.weights[1].weighted_retweet_index;
			_this.result.weights[0].weighted_retweet_index = parseInt(100 * _this.result.weights[0].weighted_retweet_index / tot);
			_this.result.weights[1].weighted_retweet_index = parseInt(100 * _this.result.weights[1].weighted_retweet_index / tot);
		})
	}
})();