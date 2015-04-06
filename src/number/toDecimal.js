define([
	'./toInteger'
],
function(
	toInteger
) {'use strict';
	
function toDecimal (x) {
	return x - toInteger(x);
}

return toDecimal;
});