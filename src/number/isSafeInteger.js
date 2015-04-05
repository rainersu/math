define([
	'../const/MAX_SAFE_INTEGER',
	'../const/MIN_SAFE_INTEGER',
	'./isInteger'
],
function(
	MAX_SAFE_INTEGER,
	MIN_SAFE_INTEGER,
	isInteger
) {'use strict';

function isSafeInteger (v) {
	return isInteger(v) && v >= MIN_SAFE_INTEGER && v <= MAX_SAFE_INTEGER;
}

return isSafeInteger;
});