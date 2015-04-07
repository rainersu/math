define([
	'./toFixed'
],
function(
	toFixed
) {'use strict';

function toPercent (n, i, l) {
	return toFixed(n * 100, i, l - 1) + '%';
}

return toPercent;
});