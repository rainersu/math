/**
* 计算 `1 + num` 的自然对数。
* @see {@link Arith.log2}
* @see {@link Arith.log10}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p|Math.log1p}
* @access public
* @func Arith.log1p
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.log1p(1));     // 0.6931471805599453
* console.log(Arith.log1p(0));     // 0
* console.log(Arith.log1p(-1));    // -Infinity
* console.log(Arith.log1p(-2));    // NaN
*/