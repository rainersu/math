define([
	'../var/exp',
	'../var/infinity'
],
function(
	exp,
	infinity
) {'use strict';
	
function tanh (x) {
	return x === infinity ? 1 : x === -infinity ? -1 : (exp(x) - exp(-x)) / (exp(x) + exp(-x));
}

return tanh;
});