define([
	'../var/am'
],
function(
	am
) {'use strict';

function isNumber (v) {
	return am(v) === 'number';
}

return isNumber;
});