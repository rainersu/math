define(function () {'use strict';
	
function factorial (i) {
	i = i >>> 0;
	var r = 1;
	while(i > 1) {
		r*= i--;
	}
	return r;
}

return factorial;
});