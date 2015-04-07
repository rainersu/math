/**
* 将数字 `num` 输出为指定精度的字符串表示。
* @see {@link Arith.toExponential}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision|Number#toPrecision}
* @access public
* @func Arith.toPrecision
* @param {number} num - 数字。
* @param {number} [precision] - 总有效数字位数。
* @returns {number}
* @example
* var n = 5.123456;
* console.log(Arith.toPrecision(n));      // 5.123456
* console.log(Arith.toPrecision(n, 5));   // 5.1235
* console.log(Arith.toPrecision(n, 2));   // 5.1
* console.log(Arith.toPrecision(n, 1));   // 5
*/