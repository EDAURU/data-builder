var Float = function (value) {

    //Si value es una string, lo convierte a float (number)
    if (typeof value === 'string' || value instanceof String) {
        value = parseFloat(value);
    }

    this.compareTo = function (anotherFloat) {
        if (value < anotherFloat) return -1;
        if (value > anotherFloat) return 1;
        else return 0;
    };

    this.floatValue = function () {
        return value;
    };

    this.intValue = function () {
        return parseInt(value, 10);
    };

    this.toString = function () {
        return value.toString();
    };
};

//Metodos estaticos de la clase...
Float.compare = function (f1, f2) {
    if (f1 < f2) return -1;
    else if (f1 > f2) return 1;
    else return 0;
};

Float.intBitsToFloat = function (bits) {
    var bitStr = bits.toString(2);
    var signStr;
    var exponentStr;
    var fractionStr;
    var fraction = 0;
    var exponent = 0;
    var len;

    if (bitStr.length < 32) {
        len = bitStr.length;
        for (var i = 0; i < 32 - len; i++) {
            bitStr = '0' + bitStr;
        }
    }

    signStr = bitStr[0];
    exponentStr = bitStr.substr(1, 8);
    fractionStr = bitStr.substr(9, 31);

    for (var i = 0; i < 8; i++) {
        exponent += parseInt(exponentStr[7 - i]) * Math.pow(2, i);
    }

    for (var i = 0; i < 23; i++) {
        fraction += parseInt(fractionStr[i]) * Math.pow(2, -(i + 1));
    }

    return Math.pow(-1, parseInt(signStr)) * (1 + fraction) * Math.pow(2, exponent - 127);
};

Float.parseFloat = function (s) {
    return parseFloat(s);
};

Float.toString = function (f) {
    return f.toString();
};

Float.valueOf = function (f) {
    return new Float(f);
};

//Atributos estaticos de la clase...
Float.POSITIVE_INFINITY = Float.intBitsToFloat(0x7f800000);

Float.NEGATIVE_INFINITY = Float.intBitsToFloat(0xff800000);

Float.MAX_VALUE = Float.intBitsToFloat(0x7f7fffff);

Float.MIN_NORMAL = Float.intBitsToFloat(0x00800000);

Float.MIN_VALUE = Float.intBitsToFloat(0x00800000);
