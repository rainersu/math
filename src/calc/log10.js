define([
	'../var/log',
	'../var/LN10'
],
function(
	log,
	LN10
) {'use strict';
	
function log10 (x) {
	return log(x) / LN10;
}

return log10;
});