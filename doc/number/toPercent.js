/**
* 将数字 `num` 输出为百分比格式的字符串。还可以同时指定数字右对齐、左边补空格方式的总输出长度。
* @see {@link Arith.toFixed}
* @see {@link Arith.toOrdinal}
* @access public
* @func Arith.toPercent
* @param {number} [digits=0] - 小数位数。取值范围为 `0` - `20` 。
* @param {number} [length] - 总输出长度。
* @returns {number}
* @example
* console.log('|' + Arith.toPercent( 0.123, 5));      // |12.30000%
* console.log('|' + Arith.toPercent(-0.123, 2, 9));   // |  -12.30%
* console.log('|' + Arith.toPercent(-12345.123));     // |-1234512%
*/