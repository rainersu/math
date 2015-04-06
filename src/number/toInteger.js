define([
	'../var/ceil',
	'../var/floor'
],
function(
	ceil,
	floor
) {'use strict';
	
function toInteger (x) {
	return x < 0 ? ceil(x) : floor(x);
}

return toInteger;
});