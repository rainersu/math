/**
* 判断指定变量是否是 {@link http://en.wikipedia.org/wiki/Integer|整数} 。
* @see {@link Arith.isSafeInteger}
* @access public
* @func Arith.isInteger
* @param {*} val - 待检测值。
* @returns {boolean}
* @example
* console.log(Arith.isInteger(NaN));               // false
* console.log(Arith.isInteger(Infinity));          // false
* console.log(Arith.isInteger(3));                 // true
* console.log(Arith.isInteger(new Number(3)));     // true
*/