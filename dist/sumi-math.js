/*!
sumi-math v1.0.3
https://github.com/rainersu/math
A lightweight mathematics library as a replacement for the internal Math object.
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
    var object = Object;
    var array = Array;
    var math = Math;
    var NaN = 0 / 0;
    var infinity = 1 / 0;
    var undef = undefined + "";
    var shell = typeof window !== undef ? window : typeof global !== undef ? global : this || 1;
    var float = parseFloat;
    var int = parseInt;
    var LN10 = math.LN10;
    var floor = math.floor;
    var ceil = math.ceil;
    var round = math.round;
    var sqrt = math.sqrt;
    var min = math.min;
    var max = math.max;
    var pow = math.pow;
    var abs = math.abs;
    var log = math.log;
    var exp = math.exp;
    var num = Number;
    var random = math.random;
    function def(n, d) {
        n = +n;
        return n !== n ? d : n;
    }
    var slice = array.prototype.slice;
    var hasOP = object.prototype.hasOwnProperty;
    function am(v) {
        return object.prototype.toString.call(v).split(/\W+/)[2].toLowerCase();
    }
    function cp(d, o) {
        for (var m in o) if (hasOP.call(o, m)) d[m] = d[m] || o[m];
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
    function toPercent(n, i, l) {
        return toFixed(n * 100, i, l - 1) + "%";
    }
    function parseint(n, b) {
        b = +b;
        return b === 1 ? round(parsefloat(n, b)) : int(n, b);
    }
    function parsefloat(n, b) {
        var m = 1;
        if (b) {
            var x = /(?:\-|\+)?[0-9]+(?:\.[0-9]+)?(?:e(?:\-|\+)?[0-9]+(?:\.[0-9]+)?|(\%))?|(?:\-|\+)?Infinity/.exec(n);
            if (x) {
                n = x[0];
                if (x[1]) m = 100;
            }
        }
        return float(n) / m;
    }
    function cycle(x, y) {
        x %= y;
        return x > 0 ? x : x + y;
    }
    function limit(n, x, y) {
        return min(isnan(+y) ? infinity : y, max(isnan(+x) ? -infinity : x, n));
    }
    function acosh(x) {
        return log(x + sqrt(x * x - 1));
    }
    function cosh(x) {
        return (exp(x) + exp(-x)) / 2;
    }
    function asinh(x) {
        return x === -1 / 0 ? x : log(x + sqrt(x * x + 1));
    }
    function sinh(x) {
        return (exp(x) - exp(-x)) / 2;
    }
    function atanh(x) {
        return log((1 + x) / (1 - x)) / 2;
    }
    function tanh(x) {
        return x === infinity ? 1 : x === -infinity ? -1 : (exp(x) - exp(-x)) / (exp(x) + exp(-x));
    }
    function cbrt(x) {
        var y = pow(abs(x), 1 / 3);
        return x < 0 ? -y : y;
    }
    function root(n, x) {
        x = def(x, 2);
        var b = n < 0, y = b && isEven(x) ? nan : pow(abs(n), 1 / x);
        return b && y ? -y : y;
    }
    function clz32(x) {
        return (x = x >>> 0) ? 32 - x.toString(2).length : 32;
    }
    function expm1(x) {
        return exp(x) - 1;
    }
    function hypot() {
        var a = arguments, i = a.length, r = 0;
        for (;i--; ) {
            r += a[i] * a[i];
        }
        return sqrt(r);
    }
    function imul(a, b) {
        var xf = 65535, ah = a >>> 16 & xf, al = a & xf, bh = b >>> 16 & xf, bl = b & xf;
        return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
    }
    function iadd(x, y) {
        var l = (x & 65535) + (y & 65535), m = (x >> 16) + (y >> 16) + (l >> 16);
        return m << 16 | l & 65535;
    }
    function log1p(x) {
        return log(1 + x);
    }
    function log10(x) {
        return log(x) / LN10;
    }
    function log2(x) {
        return log(x) / LN2;
    }
    function average(a) {
        a = slice.call(arguments);
        return (0, eval)(a.join("+")) / a.length;
    }
    function round10(v, e) {
        v = +v;
        e = ~~e;
        if (!e) return round(v);
        var g = "e";
        v = v.toString().split(g);
        v = round(+(v[0] + g + (v[1] ? +v[1] - e : -e))).toString().split(g);
        return +(v[0] + g + (v[1] ? +v[1] + e : e));
    }
    function floor10(v, e) {
        v = +v;
        e = ~~e;
        if (!e) return floor(v);
        var g = "e";
        v = v.toString().split(g);
        v = floor(+(v[0] + g + (v[1] ? +v[1] - e : -e))).toString().split(g);
        return +(v[0] + g + (v[1] ? +v[1] + e : e));
    }
    function ceil10(v, e) {
        v = +v;
        e = ~~e;
        if (!e) return ceil(v);
        var g = "e";
        v = v.toString().split(g);
        v = ceil(+(v[0] + g + (v[1] ? +v[1] - e : -e))).toString().split(g);
        return +(v[0] + g + (v[1] ? +v[1] + e : e));
    }
    function factorial(i) {
        i = i >>> 0;
        var r = 1;
        while (i > 1) {
            r *= i--;
        }
        return r;
    }
    function fibonacci(n) {
        var a = 0, b = 1, c, i = 0;
        for (n = n >>> 0; i < n; ++i) {
            c = b + a;
            a = b;
            b = c;
        }
        return a;
    }
    function memoize(m, f) {
        return function h(n) {
            var r = m[n];
            if (am(r) !== "number") {
                r = f(h, n);
                m[n] = r;
            }
            return r;
        };
    }
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    function guid(e, a) {
        var l = e || 36, u = array(l), x = a || chars.length, d = 0, i, r;
        if (e) {
            for (i = 0; i < l; i++) u[i] = chars[0 | random() * x];
        } else {
            for (i = 0; i < l; i++) {
                if (i == 14) {
                    u[i] = "4";
                } else if (i == 8 || i == 13 || i == 18 || i == 23) {
                    u[i] = "-";
                } else {
                    if (d <= 2) d = 33554432 + random() * 16777216 | 0;
                    r = d & 15;
                    d = d >> 4;
                    u[i] = chars[i == 19 ? r & 3 | 8 : r];
                }
            }
        }
        return u.join("");
    }
    function random10(p, q, d) {
        var n = +min(p, q).toFixed(d = +d || 0), x = max(p, q);
        return floor10(random() * (+x.toFixed(d).replace(/\d$/, function(i) {
            return x >= 0 ? +i + 1 : +i - 1;
        }) - n) + n, -d);
    }
    var c = ("MAX_VALUE,MIN_VALUE,NEGATIVE_INFINITY,POSITIVE_INFINITY," + "E,LN10,LN2,LOG10E,LOG2E,PI,SQRT1_2,SQRT2,abs,acos,asin,atan,atan2,cos,exp,fround,log,max,min,pow,sign,sin,sqrt,tan,trunc," + "toExponential,toPrecision,toString").split(","), l = c.length;
    for (;l--; ) (function(i) {
        Arith[i] = l < 4 ? num[i] : l < 29 ? math[i] : function(n, x) {
            return num.prototype[i].call(n, x);
        };
    })(c[l]);
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
        toPercent: toPercent,
        parseInt: parseint,
        parseFloat: parsefloat,
        cycle: cycle,
        limit: limit,
        acosh: acosh,
        cosh: cosh,
        asinh: asinh,
        sinh: sinh,
        atanh: atanh,
        tanh: tanh,
        cbrt: cbrt,
        root: root,
        clz32: clz32,
        expm1: expm1,
        hypot: hypot,
        imul: imul,
        iadd: iadd,
        log1p: log1p,
        log10: log10,
        log2: log2,
        average: average,
        round: round10,
        floor: floor10,
        ceil: ceil10,
        factorial: factorial,
        fibonacci: fibonacci,
        memoize: memoize,
        guid: guid,
        random: random10
    });
    return Arith;
});