/**
* 将数字 `num` 输出为指定进制的字符串。
* @see {@link Arith.toFixed}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString|Number#toString}
* @access public
* @func Arith.toString
* @param {number} num - 数字。
* @param {number} [radix=10] - 进制基数。
* @returns {number}
* @example
* console.log(Arith.toString(   6,  2));   // 110
* console.log(Arith.toString( 254, 16));   // fe
* console.log(Arith.toString( -10,  2));   // -1010
* console.log(Arith.toString(-0xff, 2));   // -11111111
*/