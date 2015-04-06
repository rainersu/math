define([
	'../var/min',
	'../var/max',
	'../var/infinity',
	'../number/isnan'
],
function(
	min,
	max,
	infinity,
	isnan
) {'use strict';

function limit (n, x, y) {
	return min(isnan(+y) ? infinity : y, max(isnan(+x) ? -infinity : x, n));
}

return limit;
});