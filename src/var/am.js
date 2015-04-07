define([
	'./object'
],
function(
	object
) {'use strict';

function am (v) {
	return object.prototype.toString.call(v).split(/\W+/)[2].toLowerCase();
}

return am;
});