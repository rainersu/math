/**
* 计算数字 `num` 的主 `n` 次方根。
* @see {@link Arith.cbrt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt|Math.sqrt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt|Math.cbrt}
* @access public
* @func Arith.root
* @param {number} num - 被开方数。
* @param {number} [n=2] - 根指数。
* @returns {number}
* @example
* console.log(Arith.root( -1));      // NaN
* console.log(Arith.root(  1));      //   1
* console.log(Arith.root(  0, 3));   //   0
* console.log(Arith.root(  9));      //   3
* console.log(Arith.root(-27, 3));   //  -3
*/