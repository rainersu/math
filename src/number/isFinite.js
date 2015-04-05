define([
	'./isNumber'
],
function(
	isNumber
) {'use strict';

function isfinite (v) {
	return isNumber(v) && isFinite(v);
}

return isfinite;
});