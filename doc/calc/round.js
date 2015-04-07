/**
* 以舍入法调整一个数字的精确位数。
* @see {@link Arith.ceil}
* @see {@link Arith.floor}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round|Math.round}
* @access public
* @func Arith.round
* @param {number} num - 要调整精度的数字。
* @param {number} [exp=0] - 精确到 `10` 的几次方。
* @returns {number}
* @example
* console.log(Arith.round(55.55, -1));    //  55.6
* console.log(Arith.round(55.549, -1));   //  55.5
* console.log(Arith.round(55.549, -2));   //  55.55
* console.log(Arith.round(55, 1));        //  60
* console.log(Arith.round(54.9, 1));      //  50
* console.log(Arith.round(-55.55, -1));   // -55.5
* console.log(Arith.round(-55.551, -1));  // -55.6
* console.log(Arith.round(-55, 1));       // -50
* console.log(Arith.round(-55.1, 1));     // -60
*/