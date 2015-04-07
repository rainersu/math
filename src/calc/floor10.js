define([
	'../var/floor'
],
function(
	floor
) {'use strict';
	
function floor10 (v, e) {
	v = +v;
	e =~~e;
	if(!e) return floor(v);
	var g = 'e';
	v = v.toString().split(g);
	v = floor(+(v[0] + g + (v[1] ? (+v[1] - e) : -e))).toString().split(g);
	return +(v[0] + g + (v[1] ? (+v[1] + e) : e));
}

return floor10;
});