define([
	'../var/exp'
],
function(
	exp
) {'use strict';
	
function sinh (x) {
    return (exp(x) - exp(-x)) / 2;
}

return sinh;
});