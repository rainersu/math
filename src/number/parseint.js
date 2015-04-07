define([
	'../var/int',
	'../var/def',
	'../var/round',
	'./parsefloat'
],
function(
	int,
	def,
	round,
	parsefloat
) {'use strict';

function parseint (n, b) {
	return def(b, 0) ? round(parsefloat(n, b)) : int(n);
}

return parseint;
});