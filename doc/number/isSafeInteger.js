/**
* 判断指定变量是否是安全的整数。
* @see {@link Arith.isInteger}
* @see {@link Arith.isSafeInteger}
* @see {@link Arith.isFinite}
* @access public
* @func Arith.isSafeInteger
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Arith.isSafeInteger(3));                    // true
* console.log(Arith.isSafeInteger(Math.pow(2, 53)));      // false
* console.log(Arith.isSafeInteger(Math.pow(2, 53) - 1));  // true
* console.log(Arith.isSafeInteger(NaN));                  // false
* console.log(Arith.isSafeInteger(Infinity));             // false
* console.log(Arith.isSafeInteger('3'));                  // false
* console.log(Arith.isSafeInteger(3.1));                  // false
* console.log(Arith.isSafeInteger(3.0));                  // true
*/