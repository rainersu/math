/**
* 判断指定变量是否是真正的 {@link https://developer.mozilla.org/en-US/docs/Glossary/NaN|NaN} 。不同于 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN|isNaN} 的地方在于本函数不会对被判断的变量做自动类型转换。
* @see {@link Arith.isFinite}
* @access public
* @func Arith.isNaN
* @param {*} val - 待检测值。
* @returns {boolean}
* @example
* console.log(Arith.isNaN(NaN));            // true
* console.log(Arith.isNaN(Number.NaN));     // true
* console.log(Arith.isNaN(0 / 0));          // true
* console.log(Arith.isNaN(1 / 0));          // false
* console.log(Arith.isNaN(undefined));      // false
* console.log(Arith.isNaN({}));             // false
*/
