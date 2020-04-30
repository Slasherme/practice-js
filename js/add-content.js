'use strict';
//var today = new Date();
//console.log('today ',today);
//var hourNow = today.getHours();
//console.log('hour now ',hourNow);
var hours = prompt('please enter an hour from 0-23');
console.log(hournow);
var greeting;//undefined
if (hourNow > 18 && hourknow <=23) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Something went wrong!';
  }
document.write('<h3>'+greeting+'</h3>');