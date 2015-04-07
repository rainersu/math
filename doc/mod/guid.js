/**
* 随机生成一个全局唯一标示符。如果未指定任何参数，则生成一个符合 {@link http://www.ietf.org/rfc/rfc4122.txt RFC4122,v1} 标准定义的 {@link http://zh.wikipedia.org/wiki/UUID UUID} 。
* @see {@link https://github.com/rainersu/hash}
* @see {@link https://github.com/rse/pure-uuid}
* @see {@link https://github.com/broofa/node-uuid}
* @access public
* @func Arith.guid
* @param {number} [len=36] - 指定所生成的唯一标识符的长度。
* @param {number} [radix=0] - 每个字符允许的取值上限。
* @returns {string}
* @example
* console.log(Arith.guid(8));   // XY0Kp7uW
* console.log(Arith.guid( ));   // 29E13F40-0E59-4CD9-AD27-33D55FAEA618
*/