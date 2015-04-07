define([
	'../var/random',
	'../var/array'
],
function(
	random,
	array
) {'use strict';

var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
	
function guid (e, a) {
	var l = e || 36,
		u = array(l), 
		x = a || chars.length,
		d = 0,
		i,
		r;
	if (e) {
		for (i = 0; i < l; i++) u[i] = chars[0 | random() * x];
	}
	else {
		for (i = 0; i < l; i++) {
			if (i == 14) {
				u[i] = '4';
			}
			else if (i == 8 || i == 13 || i == 18 || i == 23) {
				u[i] = '-';
			} 
			else {
				if (d <= 0x02) d = 0x2000000 + (random() * 0x1000000) | 0;
				r = d & 0xf;
				d = d >>  4;
				u[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
			}
		}
	}
	return u.join('');
}

return guid;
});