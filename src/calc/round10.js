define([
	'../var/round'
],
function(
	round
) {'use strict';
	
function round10 (v, e) {
	v = +v;
	e =~~e;
	if(!e) return round(v);
	var g = 'e';
	v = v.toString().split(g);
	v = round(+(v[0] + g + (v[1] ? (+v[1] - e) : -e))).toString().split(g);
	return +(v[0] + g + (v[1] ? (+v[1] + e) : e));
}

return round10;
});