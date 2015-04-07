define([
	'../var/sqrt'
],
function(
	sqrt
) {'use strict';
	
function hypot () {
	var a = arguments,
		i = a.length,
		r = 0;
	for (; i--;) {
		r+= a[i] * a[i];
	}
	return sqrt(r);
}

return hypot;
});	