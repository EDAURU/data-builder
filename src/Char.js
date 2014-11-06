var Char = function (c) {
    
    var cCount;
    var charLetter;
	var pointCount;
	var xChar;
	var yChar;
	var value;

    this.charCount = function (code) {
        cCount = parseInt(code);
        if (parseInt(cCount) < 10000)  return 1;
        else return 2;
    };

    this.charValue = function () {
        return c.charAt(0);
    };

    this.codePointAt = function (charArray, index) {
        charLetter = charArray[index];
        return charLetter.charCodeAt(0);
    };

    this.codePointBefore = function (charArray, index) {
        charLetter = charArray[index - 1];
        return charLetter.charCodeAt(0);
    };

    this.codePointCount = function (charArray, offset, count) {
        return (offset - (count + 1)) * -1;
    };

    this.compare = function (x, y) {
        xChar = x.charValue().charCodeAt(0);
        yChar = y.charValue().charCodeAt(0);

        return (xChar === yChar) ? 0 : (xChar < yChar) ? -1 : 1;
    };

    this.compareTo = function (x) {
        value = this.charValue().charCodeAt(0);
        xChar = x.charValue().charCodeAt(0);

        return (value === xChar) ? 0 : (value < xChar) ? -1 : 1;
    };

    this.equals = function (x) {
        value = this.charValue().charCodeAt(0);
        xChar = x.charValue().charCodeAt(0);
        return value === xChar;
    };

    this.getName = function (code) {
        return String.fromCharCode(code);
    };

    this.hashCode = function () {
        return this.charValue().charCodeAt(0);
    };

    this.isDefined = function (x) {
        xChar = x.charCodeAt(0);
        return (xChar >= 0 && xChar <= 127);
    };

    this.isLetter = function (x) {
        xChar = x.charCodeAt(0);
        return (xChar >= 65 && xChar <= 122);
    };

    this.isDigit = function (x) {
        xChar = x.charCodeAt(0);
        return xChar >= 48 && xChar <= 57;
    };

    this.isLetterOrDigit = function (x) {
        xChar = x.charCodeAt(0);
        return (xChar >= 48 && xChar <= 57) || (xChar >= 65 && xChar <= 122);
    };

    this.isLowerCase = function (x) {
        xChar = x.charCodeAt(0);
        return (xChar >= 97 && xChar <= 122);
    };

    this.isUpperCase = function (x) {
        xChar = x.charCodeAt(0);
        return (xChar >= 65 && xChar <= 90);
    };

    this.toLowerCase = function (x) {
        xChar = x.charValue().charCodeAt(0);
        if (xChar >= 65 && xChar <= 90) return String.fromCharCode(xChar + 32);
    };

    this.toString = function () {
        return this.charValue().toString();
    };

    this.toUpperCase = function (x) {
        xChar = x.charValue().charCodeAt(0);
        if (xChar >= 97 && xChar <= 122) return String.fromCharCode(xChar - 32);
    };

    this.valueOf = function () {
        return this.charValue().valueOf();
    };
};