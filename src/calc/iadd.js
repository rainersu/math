define(function () {'use strict';
	
function iadd (x, y) {
	var l = (x & 0xFFFF) + (y & 0xFFFF),
		m = (x >> 16) + (y >> 16) + (l >> 16);
	return  (m << 16) | (l & 0xFFFF);
}

return iadd;
});