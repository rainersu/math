/**
* 将数字 `num` 输出为使用指数表示法的字符串。
* @see {@link Arith.toPrecision}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential|Number#toExponential}
* @access public
* @func Arith.toExponential
* @param {number} num - 数字。
* @param {number} [fractionDigits] - 小数位数。取值范围为 `0` - `20` 。默认用尽可能多的位数。
* @returns {number}
* @example
* var n = 77.1234;
* console.log(Arith.toExponential(n));      // 7.71234e+1
* console.log(Arith.toExponential(n, 4));   // 7.7123e+1
* console.log(Arith.toExponential(n, 2));   // 7.71e+1
*/