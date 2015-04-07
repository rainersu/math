define(function () {'use strict';
	
function fibonacci (n) {  
    var a = 0, 
		b = 1, 
		c, 
		i = 0;
	for(n = n >>> 0; i < n; ++i) {  
        c = b + a;  
        a = b;
		b = c;  
    }  
    return  a;  
}

return fibonacci;
});