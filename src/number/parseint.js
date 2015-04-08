define([
	'../var/int',
	'../var/am',
	'../var/round',
	'./parsefloat'
],
function(
	int,
	am,
	round,
	parsefloat
) {'use strict';

function parseint (n, b) {
	b = +b;
	return b === 1 ? round(parsefloat(n, b)) : int(n, b);
}

return parseint;
});