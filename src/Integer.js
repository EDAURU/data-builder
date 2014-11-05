/**
 * Created by Bonsanto on 10/18/2014.
 */
var Integer = function (value) {
    //Si es una string, lo convierte a int (number)
    if (typeof value === 'string' || value instanceof String) {
	   value = parseInt(value, 10);
    }

    this.compareTo = function (anotherInt) {
	   if(value < anotherInt.intValue()) return -1;
	   if(value > anotherInt.intValue()) return 1;
	   else return 0;
    };

    this.floatValue = function () {
	   return parseFloat(value);
    };

    this.intValue = function () {	
	   return value;
    };
};

//Metodos estaticos de la clase...
Integer.bitCount = function(i) {
    var twoComp;
    var twoCompStr;
    var count = 0;
    var filler = '0';
    var len;

    if(i < 0) {
	   twoComp = 0XFFFFFFFF + i + 1;
	   filler = '1';
    }
    else twoComp = i;
    
    twoCompStr = twoComp.toString(2);

    len = twoCompStr.length;
    for(var j=0; j<32-len; j++) {
	   twoCompStr = filler + twoCompStr;
    }

    for(var j=0; j<twoCompStr.length; j++) {
	   if(twoCompStr[j] === '1') count++;
    }
    
    return count;
};

Integer.compare = function (x, y) {
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
}; //Andrés abreme tu librería float.....

Integer.decode = function(nm) {
    //Patron para Strings decodificables:
    //Sign (opt) DecimalNumeral
    //Sign (opt) 0x HexDigits
    //Sign (opt) 0X HexDigits
    //Sign (opt) # HexDigits
    //Sign (opt) 0 OctalDigits

    var elements = /^(\+|\-)?(0x|0X|#|0)?(\d+)$/.exec(nm);
    var sign = 1;
    var base = 10;

    if(elements) {
	   if(elements[1] === '-') sign = -1;

	   if(elements[2] === '0x' || elements[2] === '0X' || elements[2] === '#') base = 16;
	   else if(elements[2] === '0') base = 8;

	   return new Integer(parseInt(elements[3], base) * sign);
    }
    else return undefined;
};

Integer.highestOneBit = function(i) {
    var intStr = i.toString(2);
    
    if(intStr[0] === '1') return Math.pow(2, intStr.length-1);
    else return 0;
};

Integer.lowestOneBit = function(i) {
    var intStr = i.toString(2);

    if(intStr[0] === '1') return Math.pow(2, intStr.length - intStr.lastIndexOf('1') - 1);
    else return 0;
};

Integer.numberOfLeadingZeros = function(i) {
    return 31 - Math.floor(Math.log(i)/Math.LN2);
};

Integer.numberOfTrailingZeros = function(i) {
    var twoComp;
    var twoCompStr;
    var count = 0;
    var filler = '0';
    var len;

    if(i < 0) {
	   twoComp = 0XFFFFFFFF + i + 1;
	   filler = '1';
    }
    else twoComp = i;
    
    twoCompStr = twoComp.toString(2);

    len = twoCompStr.length;
    for(var j=0; j<32-len; j++) {
	   twoCompStr = filler + twoCompStr;
    }
    
    return twoCompStr.length - twoCompStr.lastIndexOf('1') -1;
};

Integer.parseInt = function (s, radix) {
    if(radix) return parseInt(s, radix);
    else return parseInt(s);
};

Integer.reverse = function (i) {
    var twoComp;
    var twoCompStr;
    var count = 0;
    var filler = '0';
    var len;

    if(i < 0) {
	   twoComp = 0XFFFFFFFF + i + 1;
	   filler = '1';
    }
    else twoComp = i;
    
    twoCompStr = twoComp.toString(2);

    len = twoCompStr.length;
    for(var j=0; j<32-len; j++) {
	   twoCompStr = filler + twoCompStr;
    }

    //Volteando twoCompStr...
    reverseStr = twoCompStr.split('').reverse().join('');
    if(reverseStr[0] === '1') return parseInt(reverseStr, 2) - 0XFFFFFFFF - 1; 
    else return parseInt(reverseStr, 2);
};

Integer.signum = function (i) {
    if(i > 0) return 1;
    else if(i < 0) return -1;
    else return 0;
};

Integer.toBinaryString = function (i) {
    return i.toString(2);
};

Integer.toHexString = function (i) {
    return i.toString(16);
};

Integer.toOctalString = function (i) {
    return i.toString(8);
};

Integer.toString = function (i, radix) {
    if(radix) return i.toString(radix);
    else return i.toString();
};

Integer.valueOf = function (i, radix) {
    var integer;

    if(typeof i === 'string' || i instanceof String) 
	   if(radix) integer = new Integer(i.toString(radix));
    else integer = new Integer(i);

    return integer;
};
