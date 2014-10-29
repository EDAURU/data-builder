function HashMap(keytype, valuetype) {
    this.keytype = typeProcess(keytype);
    this.valuetype = typeProcess(valuetype);

    // Value object, that will hold keys and values for each entry (in the entry array)
    var Value = {
        key: null,
        value: null
    };

    var entries = [];

    this.put = function (k, v) {
        if (this.keytype === typeProcess(k) && this.valuetype === typeProcess(v) && !(this.containsKey(k))) {
            var newval = Object.create(Value);
            newval.key = k;
            newval.value = v;
            entries.push(newval);
        }
        else {
            console.log("method: put, failed to validate type values");
        }

    };

    this.get = function (k) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].key == k) {
                return entries[i].value;
            }
        }
        return null;
    };

    this.clear = function () {
        entries = [];
    };

    this.containsKey = function (k) {
        if (this.get(k) !== null) {
            return true;
        }
        else {
            return false;
        }
    };

    this.containsValue = function (v) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].value == v) {
                return true;
            }
        }
        return false;
    };

    this.equals = function (map) {
        for (var i = 0; i < entries.length; i++) {
            if (!((entries.length == map.size()) && (map.containsKey(entries[i].key)) && (map.containsValue(entries[i].value)))) {
                return false;
            }
        }
        return true;
    };

    this.size = function () {
        return entries.length;
    };

    this.putAll = function (map) {
        keytype = map.keytype;
        valuetype = map.valuetype;
        entries = map.getEntrys();
    };

    this.remove = function (k) {
        for (var i = 0; i < entries.length; i++) {
            if (entries[i].key == k) {
                entries.splice(i, 1);
            }
        }
    };

    this.isEmpty = function () {
        if (entries.length === 0)
            return true;
        else
            return false;
    };

    this.toString = function () {
        var statement = "{";
        for (var i = 0; i < entries.length; i++) {
            statement += '{' + entries[i].key + ':' + entries[i].value + '}';
        }
        statement += '}';
        return statement;
    };

    //proccessing Map Types
    function typeProcess(t) {
        /*first Veryfing if user's input is a string with the type related to the type
         if not  then checking its actual type manually*/
        switch (t) {
            case 'number':
                return 'number';
            case 'string':
                return 'string';
            case 'Integer':
                return 'Integer';
            case 'Boolean':
                return 'Boolean';
            case 'Float':
                return 'Float';
            case 'Char':
                return 'Char';
            default:
                return typeCheck(t);
        }
    }

    function typeCheck(t) {
        /*Got here it means user didn't specify types in constructor
         So I assume user passed key and value and check manually for types
         this by checking its type or if the belong to the Primitive Objects
         We are creating. It can also be the call from the put function to verify
         values before introducing to HashMap*/
        if (typeof t == 'string' || typeof t == 'number') {
            return (typeof t);
        } else if (t.constructor == Integer) {
            return 'Integer';
        } else if (t.constructor == Boolean) {
            return 'Boolean';
        } else if (t.constructor == Float) {
            return 'Float';
        } else if (t.constructor == Char) {
            return 'Char';
        } else if (t.constructor == String) {
            return 'String';
        }
        else {
            return 'undefined';
        }
    }

    function getEntries() {
        return entries;
    }

}