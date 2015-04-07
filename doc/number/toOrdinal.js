/**
* 将数字 `num` 输出为固定长度的字符串。格式为数字右对齐，左边补 `0` 。注意：输入数字将被强制转换为无符号正整数。
* @see {@link Arith.toFixed}
* @see {@link Arith.toPercent}
* @access public
* @func Arith.toOrdinal
* @param {number} num - 数字。
* @param {number} [length] - 总输出长度。
* @returns {number}
* @example
* var date = [ 8, 3, 2015 ].map(function (i) { return Arith.toOrdinal(i, 2); });
* console.log(date.join('/'));   // 08/03/2015
*/