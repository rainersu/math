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
	'./number/isSafeInteger',
	'./number/isComposite',
	'./number/isPrime',
	'./number/isEven',
	'./number/isOdd',
	'./number/toInteger',
	'./number/toDecimal',
	'./number/toFixed',
	'./number/toOrdinal',
	'./calc/cycle',
	'./calc/limit'
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
	isSafeInteger,
	isComposite,
	isPrime,
	isEven,
	isOdd,
	toInteger,
	toDecimal,
	toFixed,
	toOrdinal,
	cycle,
	limit
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
	isSafeInteger    : isSafeInteger,
	isComposite      : isComposite,
	isPrime          : isPrime,
	isEven           : isEven,
	isOdd            : isOdd,
	toInteger        : toInteger,
	toDecimal        : toDecimal,
	toFixed          : toFixed,
	toOrdinal        : toOrdinal,
	cycle            : cycle,
	limit            : limit
});

var date = [ 8, 3, 2015 ].map(function (i) { return Arith.toOrdinal(i, 2); });
console.log(date.join('/'));   // 08/03/2015



return Arith;
});