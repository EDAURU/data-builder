Char = function (c) {

    this.charCount = function (code) {
        var cCount = parseInt(code);
        if (parseInt(cCount) >= 10000)
            return 2;
        else
            return 1;

    }

    this.charValue = function () {
        return c;
    }

    this.codePointAt = function (charArray, index) {
        var charLetter = charArray[index];
        return charLetter.charCodeAt(0);
    }

    this.codePointBefore = function (charArray, index) {
        var charLetter = charArray[index-1];
        return charLetter.charCodeAt(0);
    }

    this.codePointCount = function (charArray, offset, count) {
        var pointCount = (offset - (count + 1)) * -1;
        return pointCount;
    }

    this.compare = function (x, y) {
        var xChar = x.charValue().charCodeAt(0);
        var yChar = y.charValue().charCodeAt(0);

        if(xChar == yChar)
            return 0;
        else if(xChar < yChar)
            return -1;
        else
            return 1;
    }

    this.compareTo = function (x) {
        var value = this.charValue().charCodeAt(0);
        var xChar = x.charValue().charCodeAt(0);

        if(value == xChar)
            return 0;
        else if(value < xChar)
            return -1;
        else
            return 1;

    }

    this.equals = function (x) {
        var value = this.charValue().charCodeAt(0);
        var xChar = x.charValue().charCodeAt(0);
        if(value == xChar)
            return true;
        else
            return false;
    }

    this.getName = function (code) {
        return String.fromCharCode(code);
    }

    this.hashCode = function () {
        var value = this.charValue().charCodeAt(0);
        return value;
    }

    this.isDefined = function (x) {
        var xChar = x.charCodeAt(0);
        if(xChar >= 0 && xChar <= 127)
            return true;
        else
            return false;
    }

    this.isLetter = function (x) {
        var xChar = x.charCodeAt(0);
        if(xChar >= 65 && xChar <= 122)
            return true;
        else
            return false;
    }

    this.isDigit = function (x) {
        var xChar = x.charCodeAt(0);
        if(xChar >= 48 && xChar <= 57)
            return true;
        else
            return false;
    }

    this.isLetterOrDigit = function (x) {
        var xChar = x.charCodeAt(0);
        if((xChar >= 48 && xChar <= 57) || (xChar >= 65 && xChar <= 122))
            return true;
        else
            return false;
    }

    this.isLowerCase = function (x) {
        var xChar = x.charCodeAt(0);
        if(xChar >= 97 && xChar <= 122)
            return true;
        else
            return false;
    }

    this.isUpperCase = function (x) {
        var xChar = x.charCodeAt(0);
        if(xChar >= 65 && xChar <= 90)
            return true;
        else
            return false;
    }

    this.toLowerCase = function (x) {
        var xChar = x.charValue().charCodeAt(0);
        if(xChar >= 65 && xChar <= 90)
            return String.fromCharCode(xChar + 32);
    }

    this.toString = function () {
        return this.charValue().toString();
    }

    this.toUpperCase = function (x) {
        var xChar = x.charValue().charCodeAt(0);
        if(xChar >= 97 && xChar <= 122)
            return String.fromCharCode(xChar - 32);
    }

    this.valueOf = function () {
        return this.charValue().valueOf();
    }
}