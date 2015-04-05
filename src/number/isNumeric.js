define([
	'../var/am',
	'../var/float'
],
function(
	am,
	float
) {'use strict';

function isNumeric (v) {
	return !(am(v) === 'array') && (v - float(v) + 1) >= 0;
}

return isNumeric;
});