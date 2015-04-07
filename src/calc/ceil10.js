define([
	'../var/ceil'
],
function(
	ceil
) {'use strict';
	
function ceil10 (v, e) {
	v = +v;
	e =~~e;
	if(!e) return ceil(v);
	var g = 'e';
	v = v.toString().split(g);
	v = ceil(+(v[0] + g + (v[1] ? (+v[1] - e) : -e))).toString().split(g);
	return +(v[0] + g + (v[1] ? (+v[1] + e) : e));
}

return ceil10;
});