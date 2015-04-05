define([
	'../var/pow'
],
function(
	pow
) {'use strict';

var MAX_SAFE_INTEGER = pow(2, 53) - 1;

return MAX_SAFE_INTEGER;
});