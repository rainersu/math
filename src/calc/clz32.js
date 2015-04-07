define(function () {'use strict';
	
function clz32 (x) {
    return (x = x >>> 0) ? 32 - x.toString(2).length : 32;
}

return clz32;
});