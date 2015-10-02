(function () {
	var chart = c3.generate({
		data: {
			columns: [
				['Chelsea', 60, 400, 200, 800, 300, 200],
				['Arsenal', 260, 200, 280, 400, 300, 100]
			],
			colors: {
				'Chelsea': '#2E62C7',
				'Arsenal': '#ED1C24'
			},
			type: 'area-spline'
		},
		axis: {
			y: {
				show: false
			},
			y2: {
				show: false
			},
			x: {
				show: false,
			}
		}
	});

	var actualBg = 0;
	var bg = document.getElementById('bg');
	var it = setInterval(function () {
		actualBg = (actualBg + 1) % 4;
		bg.className = "bg" + actualBg;
	}, 8200);
})();