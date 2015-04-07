/**
* 尝试将任意变量 `source` 转换为实数。如果转换失败，则返回 {@link https://developer.mozilla.org/en-US/docs/Glossary/NaN|NaN} 。
* @see {@link Arith.parseInt}
* @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat|parseFloat}
* @access public
* @func Arith.parseFloat
* @param {string} source - 要转换的输入变量。
* @param {boolean} [useRegExp=false]
* @param {boolean}  useRegExp.false - 使用内置 {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat|parseFloat} 方法。
* @param {boolean}  useRegExp.true  - 使用更复杂但更精准的正则表达式方法。甚至能自动处理百分数。
* @returns {number}
* @example
* console.log(Arith.parseFloat('.3'));        //  0.3
* console.log(Arith.parseFloat('3.3.3'));     //  3.3
* console.log(Arith.parseFloat('-.3e-.3'));   // -0.3
* @example
* console.log([ '--1.233.3', '-123.3e-2', 'a-123.3e-2b', 'a-123.3%b' ].map(function (str) {
*     return Arith.parseFloat(str, true);
* }));
* 
* // [ -1.233, -1.233, -1.233, -1.233 ]
*/