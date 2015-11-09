(function () {
	/* Automatic background swipe every 8.2 seconds. */
	var actualBg = 0;
	var bg = document.getElementById('bg');
	var it = setInterval(function () {
		actualBg = (actualBg + 1) % 4;
		bg.className = "bg" + actualBg;
	}, 8200);
})();