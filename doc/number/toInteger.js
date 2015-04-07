/**
* 获取数值 `num` 的整数部分。
* @see {@link Arith.toDecimal}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc|Math.trunc}
* @access public
* @func Arith.toInteger
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.toInteger(Number.EPSILON));   //  0
* console.log(Arith.toInteger(-12e2));            // -1200
* console.log(Arith.toInteger(NaN));              //  NaN
*/