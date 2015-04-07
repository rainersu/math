/**
* 判断指定变量 `val` 是否是 {@link https://developer.mozilla.org/en-US/docs/Glossary/Number|数字} 格式的值。
* @see {@link Arith.isNumber}
* @access public
* @func Arith.isNumeric
* @param {*} val - 要检测的变量。
* @returns {boolean}
* @example
* console.log(Arith.isNumeric(+300.));        // true
* console.log(Arith.isNumeric(-.300));        // true
* console.log(Arith.isNumeric('+3.'));        // true
* console.log(Arith.isNumeric('-.3'));        // true
* console.log(Arith.isNumeric(-0xFF));        // true
* console.log(Arith.isNumeric('0xFF'));       // true
* console.log(Arith.isNumeric('8e5'));        // true
* console.log(Arith.isNumeric(3.1415));       // true
* console.log(Arith.isNumeric(0144));         // true
* console.log(Arith.isNumeric('3px'));        // false
* console.log(Arith.isNumeric(new Date()));   // false
* console.log(Arith.isNumeric(''));           // false
* console.log(Arith.isNumeric([]));           // false
* console.log(Arith.isNumeric({}));           // false
* console.log(Arith.isNumeric(NaN));          // false
* console.log(Arith.isNumeric(null));         // false
* console.log(Arith.isNumeric(true));         // false
* console.log(Arith.isNumeric(Infinity));     // false
* console.log(Arith.isNumeric(undefined));    // false
*/
