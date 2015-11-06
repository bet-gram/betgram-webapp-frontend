(function () {
	angular.module('gamesModule')
	.controller('gamesController', gamesController);

	function gamesController(gamesService) {
		var _this = this;

		// save matches
		_this.matches = gamesService.get();

		// actual match
		_this.match = gamesService.get(1);

		// actual selected index

		// select match
		_this.matchIndex = 0;

		// select index
		_this.select = select;
		_this.isSelected = isSelected;
		_this.getNumber = getNumber;

		// select content
		_this.menuItems = 3;
		_this.menuIndex = 0;

		function select($index, target) {
			if (target === 'match') {
				if ($index != _this.matchIndex && $index >= 0 && $index < _this.matches.length) {
					_this.matchIndex = $index;
					_this.match = gamesService.get(_this.matches[$index].id);
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

		function getNumber(n) {
			return new Array(n);
		}
	}
})();