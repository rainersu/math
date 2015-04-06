/**
* 计算 `x` 除以 `y` 的 {@link http://en.wikipedia.org/wiki/Remainder|余数} 。如果该余数为负数，将其调整为 `0` - `y` 范围内的正数。
* @see {@link Arith.limit}
* @access public
* @func Arith.cycle
* @param {number} x - 除数。
* @param {number} y - 被除数。
* @returns {number}
* @example
* console.log(Arith.cycle( 24,  12));   //  12
* console.log(Arith.cycle(-90, 360));   // 270
* console.log(Arith.cycle(  0, 360));   // 360
*/