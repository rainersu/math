define([
	'../var/exp'
],
function(
	exp
) {'use strict';
	
function cosh (x) {
    return (exp(x) + exp(-x)) / 2;
}

return cosh;
});