/*!
sumi-math v1.0.0
https://github.com/rainersu/math
A lightweight mathematics library extending the internal Math object. 
(c) 2015 Rainer Su( rainersu@foxmail.com | http://cn.linkedin.com/in/rainersu | QQ: 2627001536 )
*/
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return factory();
        });
    } else if (typeof exports === "object") {
        module.exports = factory();
    } else {
        root["sumiMath"] = factory();
    }
})(this, function() {
    var undefined = void 0;
    var NaN = 0 / 0;
    var float = parseFloat;
    var undef = undefined + "";
    var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
    var math = Math;
    var floor = math.floor;
    var pow = math.pow;
    var num = Number;
    var object = Object;
    var hasOP = object.prototype.hasOwnProperty;
    function am(v) {
        return object.prototype.toString.call(v).split(/\W+/)[2].toLowerCase();
    }
    function cp(d, o) {
        for (var m in o) if (hasOP.call(o, m)) d[m] = o[m];
        return d;
    }
    var Arith = {};
    shell.Arith = shell.Arith || Arith;
    var EPSILON = 2.220446049250313e-16;
    var GOLDEN_RATIO = (Math.sqrt(5) - 1) / 2;
    var MAX_SAFE_INTEGER = pow(2, 53) - 1;
    var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
    function isnan(v) {
        return v !== v;
    }
    function isNumber(v) {
        return am(v) === "number";
    }
    function isNumeric(v) {
        return !(am(v) === "array") && v - float(v) + 1 >= 0;
    }
    function isfinite(v) {
        return isNumber(v) && isFinite(v);
    }
    function isInteger(v) {
        return isfinite(v) && floor(v) == v;
    }
    function isSafeInteger(v) {
        return isInteger(v) && v >= MIN_SAFE_INTEGER && v <= MAX_SAFE_INTEGER;
    }
    cp(Arith, {
        EPSILON: EPSILON,
        GOLDEN_RATIO: GOLDEN_RATIO,
        MAX_SAFE_INTEGER: MAX_SAFE_INTEGER,
        MIN_SAFE_INTEGER: MIN_SAFE_INTEGER,
        isNaN: isnan,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isFinite: isfinite,
        isInteger: isInteger,
        isSafeInteger: isSafeInteger
    });
    var x = Math.pow(2, 53) - 1;
    console.log(Arith.isSafeInteger(x));
    console.log(isInteger(x));
    console.log(x >= MIN_SAFE_INTEGER);
    console.log(x <= MAX_SAFE_INTEGER);
    return Arith;
});