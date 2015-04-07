define([
	'../var/log',
	'../var/sqrt'
],
function(
	log,
	sqrt
) {'use strict';
	
function acosh (x) {
	return log(x + sqrt(x * x - 1));
}

return acosh;
});