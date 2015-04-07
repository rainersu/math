define([
	'../var/min',
	'../var/max',
	'../var/random',
	'../calc/floor10'
],
function(
	min,
	max,
	random,
	floor10
) {'use strict';

function random10 (p, q, d) {
	var n = +min(p, q).toFixed(d = +d || 0),
		x =  max(p, q);
	return floor10(random() * (+x.toFixed(d).replace(/\d$/, function (i) { return x >= 0 ? +i + 1 : +i - 1; }) - n) + n, -d);
}

return random10;
});