/**
 * Created by the Ing. Alberto Bonsanto on 10/18/2014.
 * EDAURU team.
 */

var ArrayList = function () {
    var type;
    var list = [];
    

    /**
     *  boolean     add(E e) Appends the specified element to the end of this list.
     *
     *  void        add(int index, E element) Inserts the specified element at the specified position in this list.
     **/
    this.add = function () {
        if (arguments.length === 1) {
            list.push(arguments[0]);
            return true;
        } else if (arguments.length === 2) {
            list.splice(arguments[0], arguments[1]);
        }
        /* TODO: Probably needs a else in case of the arguments are more than 2.
         */
    };

    /**
     *  boolean    addAll(Collection<? extends E> c)
     *              Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.
     *
     *  boolean    addAll(int index, Collection<? extends E> c)
     *              Inserts all of the elements in the specified collection into this list, starting at the specified position.
     * */
    this.addAll = function () {
        if (arguments.length === 1) {
            list = list.concat(arguments[0].toArray());
            return true;
        } else if (arguments.length === 2) {
            var index = arguments[0];
            var addingArray = arguments[1].toArray();
            var fragment1 = list.slice(0, index);
            var fragment2 = list.slice(index, list.length);
            list = fragment1.concat(addingArray);
            list = list.concat(fragment2);
        }
    };


    /**
     *  void        clear()
     *              Removes all of the elements from this list.
     * */
    this.clear = function () {
        list = [];
    };


    /**
     *  Object      clone()
     *              Returns a shallow copy of this ArrayList instance.
     * */
    this.clone = function () {
        var c = new ArrayList();

        list.forEach(function (element) {
            c.add(element);
        });
        return c;
    };


    /**
     *  boolean     contains(Object o)
     *  R           Returns true if this list contains the specified element.
     * */
    this.contains = function (object) {
        return list.indexOf(object) > -1;
    };

    /**
     *  void        ensureCapacity(int minCapacity)
     *              Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
     * */
    this.ensureCapacity = function (n) {
        list = new Array(n);
    };


    /**
     *  void        forEach(Consumer<? super E> action)
     *              Performs the given action for each element of the Iterable until all elements have been processed or the action throws an exception.
     * */
//    this.forEach = function (func) {
//        TODO:;
//    };


    /**
     *  E           get(int index)
     *              Returns the element at the specified position in this list.
     * */
    this.get = function (index) {
        if (index < list.length) return list[index];
        throw "Attempting is out of bounds";
    };


    /**
     * int          indexOf(Object o)
     *              Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * */
    this.indexOf = function (o) {
        return list.indexOf(o);
    };


    /**
     *  boolean     isEmpty()
     *              Returns true if this list contains no elements.
     * */
    this.isEmpty = function () {
        return list.length === 0;
    };

    /**
     *  Iterator<E>     iterator()
     *                  Returns an iterator over the elements in this list in proper sequence.
     * */
//    this.iterator = function (func) {
//        TODO:;
//    };


    /**
     *  int         lastIndexOf(Object o)
     *              Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
     * */
    this.lastIndexOf = function (o) {
        for (var i = list - 1; i < list.length; i--) {
            if (list[i] === o) return i;
        }
        return -1;
    };

    /**
     *  ListIterator<E>     listIterator(int index)
     *                      Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
     *  ListIterator<E>     listIterator(int index)
     *                      Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
     * */
//    this.listIterator = function() {
//    TODO:
//    };

    /**
     *  E 	        remove(int index)
     *              Removes the element at the specified position in this list.
     *
     *  boolean     remove(Object o)
     *              Removes the first occurrence of the specified element from this list, if it is present.
     * */
    this.remove = function () {
        if (typeof arguments[0] === "number") { //It is considered an index
            var element = list[arguments[0]];
            list.splice(arguments[0], 1);
            return element;
        } else {
            if (list.indexOf(arguments[0]) < -1) {
                list.splice(list.indexOf(arguments[0], 1));
                return true;
            }
            return false;
        }
    };

    /***
     *  boolean     removeAll(Collection<?> c)
     *              Removes from this list all of its elements that are contained in the specified collection.
     *              PD: Collections can be Arrays or ArrayList, hard to implement in JS.
     */
    this.removeAll = function (c) {
        var a = (c instanceof ArrayList) ? c.toArray() : c;
        var modified = false;

        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < list.length; j++) {
                if (a[i] === list[j]) {
                    list.splice(j, 1);
                    modified = true;
                    --j;
                }
            }
        }
        return modified;
    };

    /**
     *  boolean         removeIf(Predicate<? super E> filter)
     *                  Removes all of the elements of this collection that satisfy the given predicate.
     */


    /**
     *  protected void  removeRange(int fromIndex, int toIndex)
     *                  Removes from this list all of the elements whose index is between fromIndex, inclusive, and toIndex, exclusive.
     */
    this.removeRange = function (fromIndex, toIndex) {
        var a = [];

        list.forEach(function (element, index) {
            if (index >= toIndex || index < fromIndex) a.push(element);
        });
        list = a;
    };

    /**  void           replaceAll(UnaryOperator<E> operator)
     *                  Replaces each element of this list with the result of applying the operator to that element.
     */

    /**  boolean        retainAll(Collection<?> c)
     *                  Retains only the elements in this list that are contained in the specified collection.
     */
    this.retainAll = function (c) {
        var a = (c instanceof ArrayList) ? c.toArray() : c;
        var modified = false;

        for (var i = 0; i < list.length; i++) {
            if (a.indexOf(list[i]) === -1) {
                list.splice(i, 1);
                modified = true;
                --i;
            }
        }
        return modified;
    };


    /**  E              set(int index, E element)
     *                  Replaces the element at the specified position in this list with the specified element.
     */
    this.set = function (index, element) {
        var e;

        if (typeof element === typeof list[index]) {
            e = list[index];
            list[index] = element;
        }
        return e;
    };

    /**  int            size()
     *                  Returns the number of elements in this list.
     *
     */
    this.size = function () {
        return list.length;
    };

    /**  void           sort(Comparator<? super E> c)
     *                  Sorts this list according to the order induced by the specified Comparator.
     */
//    this.sort = function() {
//      TODO:
//    };


    /**  Spliterator<E> spliterator()
     *                  Creates a late-binding and fail-fast Spliterator over the elements in this list.
     */
//    this.spliterator = function() {
//    TODO:    
//    };


    /**  List<E>        subList(int fromIndex, int toIndex)
     *                  Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
     */
    this.sublist = function (fromIndex, toIndex) {
        var a = [];

        list.forEach(function (element, index) {
            if (index >= fromIndex || index < toIndex) a.push(element);
        });
        return a;
    };


    /**  Object[]       toArray()
     *                  Returns an array containing all of the elements in this list in proper sequence (from first to last element).
     */


    /**  <T> T[]        toArray(T[] a)
     *                  Returns an array containing all of the elements in this list in proper sequence (from first to last element); the runtime type of the returned array is that of the specified array.
     */
    this.toArray = function () {
        return list;
    };


    /**  void           trimToSize()
     *                  Trims the capacity of this ArrayList instance to be the list's current size.
     **/
    this.trimToSize = function () {
        var a = [];

        list.forEach(function (element) {
            if (element !== null) a.push(element);
        });
        list = a;
    };
};

var a = new ArrayList();
var b = new ArrayList();

for (var i = 0; i < 30; i++) a.add(i);

for (var i = 10; i < 20; i++) b.add(i);

console.log(a.toArray());
console.log(b.toArray());
console.log(a.toArray());
//console.log(a.retainAll([1, 2, 3, 4]));
console.log(a.retainAll(b));
console.log(a.toArray());
//a.removeRange(0, 1);
//console.log(a.toArray());
