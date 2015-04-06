define([
	'../var/array',
	'../var/abs'
],
function(
	array,
	abs
) {'use strict';

function toOrdinal (n, l) {
	n = abs(n).toFixed();
	return array(+l + 1).join('0').slice(n.length) + n;
}

return toOrdinal;
});