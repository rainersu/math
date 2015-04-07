/**
* 计算一个数字的 {@link http://en.wikipedia.org/wiki/Inverse_hyperbolic_function#atanh|反双曲正切} 值。
* @see {@link Arith.tanh}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan|Math.tan}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan|Math.atan}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan2|Math.atan2}
* @access public
* @func Arith.atanh
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.atanh(-2));     // NaN
* console.log(Arith.atanh(-1));     // -Infinity
* console.log(Arith.atanh(0));      // 0
* console.log(Arith.atanh(0.5));    // 0.5493061443340548
* console.log(Arith.atanh(1));      // Infinity
* console.log(Arith.atanh(2));      // NaN
*/