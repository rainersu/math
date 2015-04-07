
/**
* 以类 `C` 语言语法计算两个 `32` 位整数的乘积。
* @see {@link Arith.iadd}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul|Math.imul}
* @access public
* @func Arith.imul
* @param {number} x - 乘数。
* @param {number} y - 被乘数。
* @returns {number}
* @example
* console.log(Arith.imul(2, 4));              //  8
* console.log(Arith.imul(-1, 8));             // -8
* console.log(Arith.imul(-2, -2));            //  4
* console.log(Arith.imul(0xffffffff, 5));     // -5
* console.log(Arith.imul(0xfffffffe, 5));     // -10
*/