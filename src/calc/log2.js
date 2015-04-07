define([
	'../var/log',
	'../var/LN10'
],
function(
	log,
	LN10
) {'use strict';
	
function log2 (x) {
	return log(x) / LN2;
}

return log2;
});