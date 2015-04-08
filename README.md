# [sumi-math](https://www.npmjs.com/package/sumi-math)
A lightweight mathematics library as a replacement for the internal Math object.

Target environments
-------------------

- IE 6+
- Latest Stable: Firefox, Chrome, Safari, Opera
- [Node.js](https://nodejs.org/) & other non-browser environments or browser extensions

Quick start
-----------

Four quick start options are available:

- [Download the latest release](https://github.com/rainersu/math/archive/v1.0.0.zip)
- Clone the repo: `git clone https://github.com/rainersu/math.git`
- Install with [Bower](http://bower.io): `bower install sumi-math`
- Install with [npm](https://www.npmjs.com): `npm install sumi-math`

Example use
-----------

Including in a browser:

```html
<script type='text/javascript' src='/path/to/sumi-math-1.0.0.min.js'></script>
<script type='text/javascript'>
var x = Arith.parseFloat('xxx-123.3%xxx', true);  // x = -1.233
</script>
```

As a module that works with AMD(e.g., [RequireJS](http://requirejs.org/)):

```JavaScript
define(['/path/to/sumi-math-1.0.0.min.js'], function(Arith) {
	var x = Arith.round(55.549, -2);   //  x = 55.55
});
```

Including in a CommonJS environment(e.g., [Node.js](https://nodejs.org/)):

```JavaScript
var sumiMath = require('/path/to/sumi-math');
var x = sumiMath.toPercent(-0.123, 2);   // x = -12.30%
```

Build from source
-----------------

First, you need to have [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/) installed.

```bash
$ git clone git@github.com:rainersu/math.git
$ npm install -g grunt-cli
$ cd math
$ npm install
$ grunt
```

It provides compiled JS (`sumi-math.*`), as well as compiled and minified JS (`sumi-math.min.*`). JS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`sumi-math.*.map`) are available for use with certain browsers' developer tools.

Running demos for testing
-------------------------

```bash
$ grunt test
```

Build & running documentation locally
-------------------------------------

```bash
$ grunt help
```

Sorry, the documentation is currently offered only in the Chinese language. Do you have time to help me with some Chinese - English translations?

How to contact me
-----------------

- [rainersu@foxmail.com](mailto:rainersu@foxmail.com)
- [http://cn.linkedin.com/in/rainersu](http://cn.linkedin.com/in/rainersu)
- [http://site.douban.com/185696/](http://site.douban.com/185696/)
- [http://rainersu.github.io](http://rainersu.github.io)
- ``QQ: 2627001536``

Copyright and license
---------------------

Copyright 2015 [Rainer Su](mailto:rainersu@foxmail.com) ([苏昱](http://cn.linkedin.com/in/rainersu)).

Code and documentation is free to use under the [MIT license](https://github.com/rainersu/regexp/blob/master/LICENSE.md).
