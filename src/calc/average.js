define([
	'../var/slice'
],
function(
	slice
) {'use strict';
	
function average (a) {
	a = slice.call(arguments);
	return (0, eval)(a.join('+')) / a.length;
}

return average;
});