define([
	'../var/array'
],
function(
	array
) {'use strict';

function toFixed (n, i, l) {
	l = +l;
	n = n.toFixed(i);
	if (l === l) {
		n = array(l + 1).join(' ').slice(n.length) + n;
	}
	return n;
}

return toFixed;
});