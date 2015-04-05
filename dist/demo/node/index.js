
var Arith = require('../../sumi-math.js');

console.log('\r\nisNaN :');
console.log(Arith.isNaN(NaN)          === true ); 
console.log(Arith.isNaN(Number.NaN)   === true ); 
console.log(Arith.isNaN(0 / 0)        === true ); 
console.log(Arith.isNaN(1 / 0)        === false); 
console.log(Arith.isNaN(undefined)    === false); 
console.log(Arith.isNaN({})           === false); 

console.log('\r\nisNumber :');
console.log(Arith.isNumber(NaN)              === true);
console.log(Arith.isNumber(Infinity)         === true);
console.log(Arith.isNumber(.3)               === true);
console.log(Arith.isNumber(3.)               === true);
console.log(Arith.isNumber(+'3.')            === true);
console.log(Arith.isNumber(+'.3')            === true);
console.log(Arith.isNumber(Number('3.'))     === true);
console.log(Arith.isNumber(new Number('.3')) === true);

console.log('\r\nisNumeric :');
console.log(Arith.isNumeric(+300.)         === true );
console.log(Arith.isNumeric(-.300)         === true );
console.log(Arith.isNumeric('+3.')         === true );
console.log(Arith.isNumeric('-.3')         === true );
console.log(Arith.isNumeric(-0xFF)         === true );
console.log(Arith.isNumeric('0xFF')        === true );
console.log(Arith.isNumeric('8e5')         === true );
console.log(Arith.isNumeric(3.1415)        === true );
console.log(Arith.isNumeric(0144)          === true );
console.log(Arith.isNumeric('3px')         === false);
console.log(Arith.isNumeric(new Date())    === false);
console.log(Arith.isNumeric('')            === false);
console.log(Arith.isNumeric([])            === false);
console.log(Arith.isNumeric({})            === false);
console.log(Arith.isNumeric(NaN)           === false);
console.log(Arith.isNumeric(null)          === false);
console.log(Arith.isNumeric(true)          === false);
console.log(Arith.isNumeric(Infinity)      === false);
console.log(Arith.isNumeric(undefined)     === false);

console.log('\r\nisFinite :');
console.log(Arith.isFinite(.1)               === true );
console.log(Arith.isFinite(NaN)              === false);
console.log(Arith.isFinite(0 / 0)            === false);
console.log(Arith.isFinite(1 / 0)            === false);
console.log(Arith.isFinite(Infinity)         === false);
console.log(Arith.isFinite(Number.MAX_VALUE) === true );

console.log('\r\nisInteger :');
console.log(Arith.isInteger(NaN)             === false);
console.log(Arith.isInteger(Infinity)        === false);
console.log(Arith.isInteger(3)               === true );
console.log(Arith.isInteger(3.3 >> 0)        === true );
console.log(Arith.isInteger(new Number(3))   === true );

