define([
	'../var/exp'
],
function(
	exp
) {'use strict';
	
function expm1 (x) {
    return exp (x) - 1;
}

return expm1;
});