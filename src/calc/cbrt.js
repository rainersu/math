define([
	'../var/pow',
	'../var/abs'
],
function(
	pow,
	abs
) {'use strict';
		
function cbrt (x) {
    var y = pow(abs(x), 1 / 3);
    return x < 0 ? -y : y;
}

return cbrt;
});