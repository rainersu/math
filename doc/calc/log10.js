/**
* 计算数字 `num` 以 `10` 为底的对数。
* @see {@link Arith.log2}
* @see {@link Arith.log1p}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10|Math.log10}
* @access public
* @func Arith.log10
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.log10(2));         //  0.3010299956639812
* console.log(Arith.log10(1));         //  0
* console.log(Arith.log10(0));         // -Infinity
* console.log(Arith.log10(-2));        //  NaN
* console.log(Arith.log10(100000));    //  5
*/