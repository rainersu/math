/**
* 判断指定变量是否是数值类型。
* @see {@link Arith.isNumeric}
* @see {@link Arith.isFinite}
* @see {@link Arith.isNaN}
* @access public
* @func Arith.isNumber
* @param {*} val - 待检测值
* @returns {boolean}
* @example
* console.log(Arith.isNumber(NaN));                   // true
* console.log(Arith.isNumber(Infinity));              // true
* console.log(Arith.isNumber(.3));                    // true
* console.log(Arith.isNumber(3.));                    // true
* console.log(Arith.isNumber(+'3.'));                 // true
* console.log(Arith.isNumber(+'.3'));                 // true
* console.log(Arith.isNumber(Number('3.')));          // true
* console.log(Arith.isNumber(new Number('.3')));      // true
*/