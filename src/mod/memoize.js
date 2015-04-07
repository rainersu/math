define([
	'../var/am'
],
function(
	am
) {'use strict';

function memoize (m, f) {
	return (function h (n) {
		var r = m[n];
		if (am(r) !== 'number') {
			r =  f(h, n);
			m[n] = r;
		}
		return r;
	});
}

return memoize;
});