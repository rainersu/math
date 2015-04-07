/**
* 生成一个不小于 `min` 且不大于 `max` ，小数点后有效数字位数为 `digits` 的随机数。
* @access public
* @func Arith.random
* @param {number} min - 最小取值。
* @param {number} max - 最大取值。
* @param {number} [digits=0] - 小数位数。取值范围为 `0` - `20` 。
* @returns {number}
* @example
* var x = Arith.random(0, 100);   // 0 <= x <= 100 
* var x = Arith.random(-1, 1));   // x in [ -1, 0, 1 ]
* @example
* for(var l = 3; l--;) console.log(Arith.random(-1, 1, 2));   // 0.39, -0.27, -0.28
*/