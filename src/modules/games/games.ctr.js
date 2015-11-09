(function () {
	angular.module('gamesModule')
	.controller('gamesController', gamesController);

	function gamesController(gamesService) {
		var _this = this;

		// save matches
		_this.matches = gamesService.get(function () {
			_this.match = _this.matches[0] || null;
		});

		// select match
		_this.matchIndex = 0;

		// select index
		_this.select = select;
		_this.isSelected = isSelected;

		// select content
		_this.menuItems = 3;
		_this.menuIndex = 0;

		// show betgram
		_this.betgram = null;
		_this.hasTime = hasTime;
		_this.showBetgram = showBetgram;

		function select($index, target) {
			if (target === 'match') {
				if ($index != _this.matchIndex && $index >= 0 && $index < _this.matches.length) {
					_this.matchIndex = $index;
					_this.match = _this.matches[$index];
				}
			} else if (target === 'content') {
				if ($index != _this.menuIndex && $index >= 0 && $index < _this.menuItems) {
					_this.menuIndex = $index;
				}
			}
		}

		function isSelected($index, target, a, b) {
			if (target === 'match') {
				return ($index == _this.matchIndex) ? a : b;
			} else if (target === 'content') {
				return ($index === _this.menuIndex) ? a : b;
			}
		}

		function showBetgram(match) {
			_this.betgram = {
				id1: match.home.betgramCode,
				id2: match.away.betgramCode
			};
		}

		function hasTime(match) {
			var a = _this.menuIndex === 0 && match.homeGoals !== -1 && match.awayGoals !== -1;
			var b = _this.menuIndex === 1 && match.homeGoals === -1 && match.awayGoals === -1;
			return a || b;
		}
	}
})();