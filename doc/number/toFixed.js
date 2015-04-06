/**
* 将数字输出为指定小数位数的字符串。还可以同时指定数字右对齐、左边补空格方式的总输出长度。
* @see {@link Arith.toOrdinal}
* @access public
* @func Arith.toFixed
* @param {number} num - 数字。
* @param {number} [digits=0] - 小数位数。
* @param {number} [length] - 总输出长度。
* @returns {number}
* @example
* console.log('|' + Arith.toFixed( 0.123, 6));           // |0.123000
* console.log('|' + Arith.toFixed(-0.123, 2, 8));        // |   -0.12
* console.log('|' + Arith.toFixed(3, 2, 8, true));       // |00003.00
*/