define(function() {'use strict';

function cycle (x, y) {
	x %= y;
	return x > 0 ? x : x + y;
}

return cycle;
});