define(function () {'use strict';
	
function imul (a, b) {
    var xf =  0xffff,
		ah = (a >>> 16) & xf,
		al =  a & xf,
		bh = (b >>> 16) & xf,
		bl =  b & xf;
    return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0);
}

return imul;
});