/**
* 将数字 `num` 输出为指定小数位数的字符串。还可以同时指定数字右对齐、左边补空格方式的总输出长度。
* @see {@link Arith.toOrdinal}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed|Number#toFixed}
* @access public
* @func Arith.toFixed
* @param {number} num - 数字。
* @param {number} [digits=0] - 小数位数。取值范围为 `0` - `20` 。
* @param {number} [length] - 总输出长度。
* @returns {number}
* @example
* console.log('|' + Arith.toFixed( 0.123, 6));      // |0.123000
* console.log('|' + Arith.toFixed(-0.123, 2, 8));   // |   -0.12
*/