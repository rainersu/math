define([
	'./isInteger',
	'../var/sqrt'
],
function(
	isInteger,
	sqrt
) {'use strict';
	
function isPrime (v) {
	var n = 2,
		q;
	if(!isInteger(v) || v < 2) return false;
	q = sqrt(v);
	while (n <= q) {
		if(v % n++ < 1) return false;
	}
	return true;
}

return isPrime;
});