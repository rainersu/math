/**
* 尝试将任意变量 `source` 转换为整数。如果转换失败，则返回 {@link https://developer.mozilla.org/en-US/docs/Glossary/NaN|NaN} 。
* @see {@link Arith.parseFloat}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt|parseInt}
* @access public
* @func Arith.parseInt
* @param {string} source - 要转换的输入变量。
* @param {boolean} [useRegExp=false]
* @param {boolean}  useRegExp.false - 使用内置 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt|parseInt} 方法。
* @param {boolean}  useRegExp.true  - 使用更复杂但更精准的正则表达式方法。能正确处理四舍五入，甚至百分数。
* @returns {number}
* @example
* console.log(Arith.parseInt('3.3px'));      //  3
* console.log(Arith.parseInt('1f', 16));     // 31
* console.log(Arith.parseInt('0x1f', 16));   // 31
* @example
* console.log([ '--1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
*     return Arith.parseInt(str);
* }));
* 
* // [ NaN, -123, NaN, NaN ]
* @example
* console.log([ '--1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
*     return Arith.parseInt(str, true);
* }));
* 
* // [ -1, -1, -1, -1 ]
*/