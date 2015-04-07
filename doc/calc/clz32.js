/**
* 计算数字 `num` 在 `32` 位无符号整数的二进制格式开头有多少个 `0` 。
* @access public
* @func Arith.clz32
* @param {number} num - 数字。
* @returns {number}
* @example
* console.log(Arith.clz32(1));      // 31
* console.log(Arith.clz32(1000));   // 22 
* console.log(Arith.clz32());       // 32
* console.log(Arith.clz32(true));   // 31
* console.log(Arith.clz32(3.5));    // 30
*/