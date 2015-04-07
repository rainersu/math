/**
* 判断指定变量 `val` 是否是 {@link https://developer.mozilla.org/en-US/docs/Glossary/Number|数字} 类型。
* @see {@link Arith.isNumeric}
* @access public
* @func Arith.isNumber
* @param {*} val - 要检测的变量。
* @returns {boolean}
* @example
* console.log(Arith.isNumber(NaN));                   // true
* console.log(Arith.isNumber(Infinity));              // true
* console.log(Arith.isNumber(.3));                    // true
* console.log(Arith.isNumber(3.));                    // true
* console.log(Arith.isNumber(Number('3.')));          // true
* console.log(Arith.isNumber(new Number('.3')));      // true
*/