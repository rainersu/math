define([
	'../var/float'
],
function(
	float
) {'use strict';

function parsefloat (n, b) {
	var m = 1;
	if (b) {
		 var x = /(?:\-|\+)?[0-9]+(?:\.[0-9]+)?(?:e(?:\-|\+)?[0-9]+(?:\.[0-9]+)?|(\%))?|(?:\-|\+)?Infinity/.exec(n);
		 if (x) {
			 n = x[0];
			 if (x[1]) m = 100;
		 }
	 }
	return float(n) / m;
}

return parsefloat;
});