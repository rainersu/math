/**
* 计算一个数字的 {@link http://en.wikipedia.org/wiki/Inverse_hyperbolic_function#acosh|反双曲余弦} 值。
* @see {@link Arith.cosh}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cos|Math.cos}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos|Math.acos}
* @access public
* @func Arith.acosh
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.acosh(-1));   // NaN
* console.log(Arith.acosh(0));    // NaN
* console.log(Arith.acosh(0.5))   // NaN
* console.log(Arith.acosh(1));    // 0
* console.log(Arith.acosh(2));    // 1.3169578969248166
*/