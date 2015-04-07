define([
	'../var/log'
],
function(
	log
) {'use strict';
	
function atanh (x) {
	return log((1 + x) / (1 - x)) / 2;
}

return atanh;
});