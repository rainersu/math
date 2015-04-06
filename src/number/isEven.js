define([
	'./isInteger'
],
function(
	isInteger
) {'use strict';
	
function isEven (v) {
	return isInteger(v) && !(v % 2);
}

return isEven;
});
