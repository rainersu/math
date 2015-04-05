/**
* 判断指定变量是否是整数。
* @see {@link Arith.isInteger}
* @see {@link Arith.isSafeInteger}
* @see {@link Arith.isFinite}
* @access public
* @func Arith.isInteger
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Arith.isInteger(NaN));               // false
* console.log(Arith.isInteger(Infinity));          // false
* console.log(Arith.isInteger(3));                 // true
* console.log(Arith.isInteger(3.3 >> 0));          // true
* console.log(Arith.isInteger(new Number(3)));     // true
*/