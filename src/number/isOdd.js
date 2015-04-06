define([
	'./isInteger'
],
function(
	isInteger
) {'use strict';
	
function isOdd (v) {
	return isInteger(v) && !!(v % 2);
}

return isOdd;
});