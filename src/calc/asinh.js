define([
	'../var/log',
	'../var/sqrt'
],
function(
	log,
	sqrt
) {'use strict';
	
function asinh (x) {
	return x === -1 / 0 ? x : log(x + sqrt(x * x + 1));
}

return asinh;
});