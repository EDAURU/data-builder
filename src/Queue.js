/*************************************************************
**                Created by Lascario Pacheco               **
**                                                          **
**                        29/OCT/2014                       **
**                                                          **
**                                                          **
**                      The EDAURU Team                     **
*************************************************************/

var Queue = function () {
  "use strict";
  
  var queue = [], capacity = 0;
  
  
  this.setCapacity = function (c) {
    capacity = c;
  };
  
  this.getCapacity = function () {
    return capacity;
  };
  
/*
   
Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and false if no space is currently available.
   
*/
  this.add = function (object) {
    if (queue.length === capacity) {
      return false;
    } else {
      queue.push(object);
      return true;
    }
  };
  
/*

Retrieves, but does not remove, the head of this queue.

*/
  this.element = function () {
    if (queue.length === 0) {
      return false;
    } else {
      return queue[0];
    }
  };
  
  
/*

Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.

*/
  this.offer = function (object) {
    if (queue.length === capacity) {
      return false;
    } else {
      queue.push(object);
      return true;
    }
  };
  
  
/*

Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.

*/
  this.peek = function () {
    if (queue.length === 0) {
      return null;
    } else {
      return queue[0];
    }
  };
  
  
/*

Retrieves and removes the head of this queue, or returns null if this queue is empty.

*/
  this.poll = function () {
    if (queue.length === 0) {
      return null;
    } else {
      return queue.shift();
    }
  };
  
/*

Retrieves and removes the head of this queue.

*/
  this.remove = function () {
    if (queue.length === 0) {
      return null;
    } else {
      return queue.shift();
    }
  };
  
};