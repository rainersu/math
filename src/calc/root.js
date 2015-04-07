define([
	'../var/pow',
	'../var/abs',
	'../var/nan',
	'../var/def',
	'../number/isEven'
],
function(
	pow,
	abs,
	nan,
	def,
	isEven
) {'use strict';
		
function root (n, x) {
	x = def(x, 2);
    var b = n < 0,
		y = b && isEven(x) ? nan : pow(abs(n), 1 / x);
    return  b && y ? -y : y;
}

return root;
});