/**
* 判断指定变量 `val` 是否是 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger|安全整数} 。
* @see {@link Arith.isInteger}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger|Number.isInteger}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger|Number.isSafeInteger}
* @access public
* @func Arith.isSafeInteger
* @param {*} val - 要检测的变量。
* @returns {boolean}
* @example
* console.log(Arith.isSafeInteger(3));                    // true
* console.log(Arith.isSafeInteger(Math.pow(2, 53)));      // false
* console.log(Arith.isSafeInteger(Math.pow(2, 53) - 1));  // true
* console.log(Arith.isSafeInteger(NaN));                  // false
* console.log(Arith.isSafeInteger(Infinity));             // false
* console.log(Arith.isSafeInteger(3.1));                  // false
* console.log(Arith.isSafeInteger(3.0));                  // true
*/