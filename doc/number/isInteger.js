/**
* 判断指定变量 `val` 是否是 {@link http://en.wikipedia.org/wiki/Integer|整数} 。
* @see {@link Arith.isSafeInteger}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger|Number.isInteger}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger|Number.isSafeInteger}
* @access public
* @func Arith.isInteger
* @param {*} val - 要检测的变量。
* @returns {boolean}
* @example
* console.log(Arith.isInteger(NaN));               // false
* console.log(Arith.isInteger(Infinity));          // false
* console.log(Arith.isInteger(3));                 // true
* console.log(Arith.isInteger(new Number(3)));     // true
*/