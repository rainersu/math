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
    var infinity = 1 / 0;
    var float = parseFloat;
    var undef = undefined + "";
    var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
    var math = Math;
    var floor = math.floor;
    var ceil = math.ceil;
    var sqrt = math.sqrt;
    var min = math.min;
    var max = math.max;
    var pow = math.pow;
    var abs = math.abs;
    var num = Number;
    var array = Array;
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
    function isComposite(v) {
        var n = 2, q;
        if (isInteger(v) && v > 3) {
            q = sqrt(v);
            while (n <= q) {
                if (v % n++ < 1) return true;
            }
        }
        return false;
    }
    function isPrime(v) {
        var n = 2, q;
        if (!isInteger(v) || v < 2) return false;
        q = sqrt(v);
        while (n <= q) {
            if (v % n++ < 1) return false;
        }
        return true;
    }
    function isEven(v) {
        return isInteger(v) && !(v % 2);
    }
    function isOdd(v) {
        return isInteger(v) && !!(v % 2);
    }
    function toInteger(x) {
        return x < 0 ? ceil(x) : floor(x);
    }
    function toDecimal(x) {
        return x - toInteger(x);
    }
    function toFixed(n, i, l) {
        l = +l;
        n = n.toFixed(i);
        if (l === l) {
            n = array(l + 1).join(" ").slice(n.length) + n;
        }
        return n;
    }
    function toOrdinal(n, l) {
        n = abs(n).toFixed();
        return array(+l + 1).join("0").slice(n.length) + n;
    }
    function cycle(x, y) {
        x %= y;
        return x > 0 ? x : x + y;
    }
    function limit(n, x, y) {
        return min(isnan(+y) ? infinity : y, max(isnan(+x) ? -infinity : x, n));
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
        isSafeInteger: isSafeInteger,
        isComposite: isComposite,
        isPrime: isPrime,
        isEven: isEven,
        isOdd: isOdd,
        toInteger: toInteger,
        toDecimal: toDecimal,
        toFixed: toFixed,
        toOrdinal: toOrdinal,
        cycle: cycle,
        limit: limit
    });
    var date = [ 8, 3, 2015 ].map(function(i) {
        return Arith.toOrdinal(i, 2);
    });
    console.log(date.join("/"));
    return Arith;
});