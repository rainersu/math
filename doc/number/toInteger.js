/**
* 获取数值的整数部分。
* @see {@link Arith.toDecimal}
* @access public
* @func Arith.toInteger
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.toInteger(Number.EPSILON));   //  0
* console.log(Arith.toInteger(-12e2));            // -1200
* console.log(Arith.toInteger(NaN));              //  NaN
*/