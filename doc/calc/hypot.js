/**
* 返回所有参数平方和的平方根。
* @see {@link Arith.average}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot|Math.hypot}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt|Math.sqrt}
* @access public
* @func Arith.hypot
* @param {...number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.hypot(3, 4));            // 5
* console.log(Arith.hypot(3, 4, 5));         // 7.0710678118654755
* console.log(Arith.hypot());                // 0
* console.log(Arith.hypot(NaN));             // NaN
* console.log(Arith.hypot(3, 4, "foo"));     // NaN, +"foo" => NaN
* console.log(Arith.hypot(3, 4, "5"));       // 7.0710678118654755
* console.log(Arith.hypot(-3));              // 3
*/