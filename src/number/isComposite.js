define([
	'./isInteger',
	'../var/sqrt'
],
function(
	isInteger,
	sqrt
) {'use strict';

function isComposite (v) {
	var n = 2,
		q;
	if(isInteger(v) && v > 3) {
		q = sqrt(v);
		while(n <= q) {
			if(v % n++ < 1) return true;
		}
	}
	return false;
}

return isComposite;
});