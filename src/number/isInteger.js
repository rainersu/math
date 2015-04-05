define([
	'./isFinite',
	'../var/floor'
],
function(
	isfinite,
	floor
) {'use strict';
	
function isInteger (v) {
	return isfinite(v) && floor(v) == v;
}

return isInteger;
});