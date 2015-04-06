/**
* 将数字 `n` 校正至指定的取值范围内。
* @see {@link Arith.cycle}
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