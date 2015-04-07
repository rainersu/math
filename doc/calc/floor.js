/**
* 以去尾法调整一个数字的精确位数。
* @see {@link Arith.ceil}
* @see {@link Arith.round}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor|Math.floor}
* @access public
* @func Arith.floor
* @param {number} num - 要调整精度的数字。
* @param {number} [exp=0] - 精确到 `10` 的几次方。
* @returns {number}
* @example
* console.log(Arith.floor(55.59, -1));    //  55.5
* console.log(Arith.floor(59, 1));        //  50
* console.log(Arith.floor(-55.51, -1));   // -55.6
* console.log(Arith.floor(-51, 1));       // -60
* console.log(Arith.floor(-55.551, -2));  // -55.56
*/