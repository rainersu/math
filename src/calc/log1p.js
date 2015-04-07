define([
	'../var/log'
],
function(
	log
) {'use strict';
	
function log1p (x) {
	return log(1 + x);
}

return log1p;
});