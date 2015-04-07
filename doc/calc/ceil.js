/**
* 以进位法调整一个数字的精确位数。
* @see {@link Arith.round}
* @see {@link Arith.floor}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil|Math.ceil}
* @access public
* @func Arith.ceil
* @param {number} num - 要调整精度的数字。
* @param {number} [exp=0] - 精确到 `10` 的几次方。
* @returns {number}
* @example
* console.log(Arith.ceil(55.51, -1));     //  55.6
* console.log(Arith.ceil(51, 1));         //  60
* console.log(Arith.ceil(-55.59, -1));    // -55.5
* console.log(Arith.ceil(-59, 1));        // -50
* console.log(Arith.ceil(-55.551, -2));   // -55.55
*/