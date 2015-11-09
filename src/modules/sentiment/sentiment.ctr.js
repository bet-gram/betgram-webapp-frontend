(function () {
	angular.module('sentimentModule')
	.controller('sentimentController', sentimentController);

	function sentimentController() {
		var data = {
			"countries_msg_vol": {
				"CA": 170,
				"US": 393,
				"CU": 9,
				"BR": 89,
				"MX": 192,
				"Other": 254 
			}
		};

		var diameter = 600;

		var svg = d3.select('#chart').append('svg')
		.attr('width', diameter)
		.attr('height', diameter);

		// set images for bg
		var defs = svg.append('svg:defs');
		var bg = [
			'arsenal',
			'aston_villa',
			'bournemouth',
			'chelsea',
			'crystal_palace',
			'everton',
			'leicester',
			'liverpool',
			'man_city',
			'man_utd',
			'newcastle',
			'norwich',
			'southampton',
			'spurs',
			'stoke',
			'sunderland',
			'swansea',
			'watford',
			'west_brom',
			'west_ham'
		];

		var bubble = d3.layout.pack()
		.size([diameter, diameter])
		.padding(3)	// padding between adjacent circles
		.value(function (d) { return d.size; }); // new data will be loaded to bubble layout

		function processData(data) {
			var newDataSet = [];

			for(var prop in data) {
				newDataSet.push({ name: prop, className: prop.toLowerCase(), size: data[prop] });
			}
			return { children: newDataSet };
		}

		function drawBubbles(data) {
			var nodes = bubble.nodes(processData(data))
			.filter(function(d) { return !d.children; }); // filter out the outer bubble

			var duration = 200;
			var delay = 0;

			var vis = svg.selectAll('circle')
			.data(nodes, function(d) { return d.name; });

			// update circle - This only applies to updating nodes
			vis.transition()
			.duration(duration)
			.delay(function(d, i) {delay = i * 7; return delay;}) 
			.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
			.attr('r', function(d) { return d.r || 0; });

			// enter circle
			vis.enter().append('circle')
			.attr('transform', function(d) { return 'translate(' + d.x + ',' + d.y + ')'; })
			.attr('r', function(d) { return d.r; })
			.attr('class', function(d) { return d.className; })
			.style('opacity', 0) 
			.transition()
			.duration(duration * 1.2)
			.style('opacity', 1);

			// exit circle
			vis.exit()
			.transition()
			.duration(duration + delay)
			.style('opacity', 0)
			.remove();

			vis = svg.selectAll('image')
			.data(nodes, function(d) { return d.name; });

			// update image - This only applies to updating nodes
			vis.transition()
			.duration(duration)
			.delay(function(d, i) {delay = i * 7; return delay;})
			.attr('transform', function(d) { return 'translate(' + (d.x - (d.r/2 || 0)) + ',' + (d.y - (d.r/2 || 0)) + ')'; })
			.attr('width', function(d) { return d.r || 0; })
			.attr('height', function(d) { return d.r || 0; });

			// enter image
			vis.enter().append('image')
			.attr('xlink:href', function(d) { return './src/assets/img/shield/' + d.name + '.png'; })
			.attr('transform', function(d) { return 'translate(' + (d.x - (d.r/2 || 0)) + ',' + (d.y - (d.r/2 || 0)) + ')'; })
			.attr('width', function(d) { return d.r || 0; })
			.attr('height', function(d) { return d.r || 0; })
			.style('opacity', 0) 
			.transition()
			.duration(duration * 1.2)
			.style('opacity', 1);

			// exit circle
			vis.exit()
			.transition()
			.duration(duration + delay)
			.style('opacity', 0)
			.remove();
		}

		/* Pubnub configuration */
		var channel = 'tweet_stream';

		var pubnub = PUBNUB.init({
			subscribe_key: 'sub-c-a961689a-855d-11e5-9320-02ee2ddab7fe'
		});

		pubnub.subscribe({
			channel: channel,
			callback: function (m) {
				drawBubbles(m);
			}
		});
	}
})();