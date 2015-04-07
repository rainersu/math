/**
* 获取数值 `num` 的小数部分。
* @see {@link Arith.toInteger}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc|Math.trunc}
* @access public
* @func Arith.toDecimal
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.toDecimal(Number.EPSILON));   //  2.220446049250313e-16
* console.log(Arith.toDecimal(12));               //  0
* console.log(Arith.toDecimal(-1.23));            // -0.23
* console.log(Arith.toDecimal(-12e-2));           // -0.12
* console.log(Arith.toDecimal(NaN));              //  NaN
*/