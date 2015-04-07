define(function () {'use strict';

function def (n, d) {
	n = +n;
	return n !== n ? d : n;	
}

return def;
});