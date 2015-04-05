var requirejs = require('requirejs');
requirejs.config({
	nodeRequire : require
});
requirejs([
	'./var/arith',
	'./var/cp',
	
	'./const/EPSILON',
	'./const/GOLDEN_RATIO',
	'./const/MAX_SAFE_INTEGER',
	'./const/MIN_SAFE_INTEGER',
	
	'./number/isNaN',
	'./number/isNumber',
	'./number/isNumeric',
	'./number/isFinite',
	'./number/isInteger',
	'./number/isSafeInteger'
],
function(
	Arith,
	cp,
	
	EPSILON,
	GOLDEN_RATIO,
	MAX_SAFE_INTEGER,
	MIN_SAFE_INTEGER,
	isnan,
	isNumber,
	isNumeric,
	isfinite,
	isInteger,
	isSafeInteger
) {'use strict';

cp(Arith, {
	EPSILON          : EPSILON,
	GOLDEN_RATIO     : GOLDEN_RATIO,
	MAX_SAFE_INTEGER : MAX_SAFE_INTEGER,
	MIN_SAFE_INTEGER : MIN_SAFE_INTEGER,
	isNaN            : isnan,
	isNumber         : isNumber,
	isNumeric        : isNumeric,
	isFinite         : isfinite,
	isInteger        : isInteger,
	isSafeInteger    : isSafeInteger
});

var x=Math.pow(2, 53) - 1;
console.log(Arith.isSafeInteger(x));  // true
console.log(isInteger(x));
console.log(x >= MIN_SAFE_INTEGER);
console.log(x <= MAX_SAFE_INTEGER);

return Arith;
});