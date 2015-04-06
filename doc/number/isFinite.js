/**
* 判断指定变量是否是 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity|有限的数值} 。
* @see {@link Arith.isNaN}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite}
* @access public
* @func Arith.isFinite
* @param {*} val - 待检测值。
* @returns {boolean}
* @example
* console.log(Arith.isFinite(.1));                   // true
* console.log(Arith.isFinite(NaN));                  // false
* console.log(Arith.isFinite(0 / 0));                // false
* console.log(Arith.isFinite(1 / 0));                // false
* console.log(Arith.isFinite(Infinity));             // false
* console.log(Arith.isFinite(Number.MAX_VALUE));     // true
*/