define([
	'../var/random'
],
function(
	random
) {'use strict';

function random (m, f) {
	return (function h (n) {
		var r = m[n];
		if (am(r) !== 'number') {
			r =  f(h, n);
			m[n] = r;
		}
		return r;
	});
}

return random;
});