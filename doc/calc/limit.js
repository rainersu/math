/**
* 将数字 `num` 校正至不小于 'min' 且不大于 `max` 的取值范围内。
* @see {@link Arith.cycle}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max|Math.max}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math.min|Math.min}
* @access public
* @func Arith.limit
* @param {number} num - 要检查范围的数字。
* @param {number} [min] - 最小取值。
* @param {number} [max] - 最大取值。
* @returns {number}
* @example
* console.log(Arith.limit(3, 1, 2));   // 2
* console.log(Arith.limit(3, 5, 6));   // 5
* console.log(Arith.limit(3, 1));      // 3
* console.log(Arith.limit(3, 5));      // 5
*/