// ----------------------------------------------------------------------------
//                            MAP : Solution:1
//     Map -Create a new array by doing something with each item in an array.
// ----------------------------------------------------------------------------
// var numbers = [3, 56, 2, 48, 5];
// function double(x){
//  return x * 2;
// }

// var a = numbers.map(double);
// console.log(a);

// ----------------------------------------------------------------------------
//                       MAP : Solution:2 (Using For-Each)
// ----------------------------------------------------------------------------
// var numbers = [3, 56, 2, 48, 5];
// var newNumbers = [];

// function double(x){
//   newNumbers.push(x * 2);
// }

// numbers.forEach(double);
// console.log(newNumbers);

// ----------------------------------------------------------------------------
//                             FILTER
//   Filter - Create a new array by keeping the items that return true.
// ----------------------------------------------------------------------------
// var numbers = [3, 56, 2, 48, 5];

// var a = numbers.filter(function(num) {
//   return (num < 10);
// });
// console.log(a);

// ----------------------------------------------------------------------------
//                       FILTER : Solution:2 (Using For-Each)
// ----------------------------------------------------------------------------
// var numbers = [3, 56, 2, 48, 5];

// var newArray = [];

// numbers.forEach(function(num){
//   if (num > 10){
//     newArray.push(num);
//   }
// });
// console.log(newArray);

// ----------------------------------------------------------------------------
//                               REDUCE
//  Reduce - Accumulate a value by doing something to each item in an array.
// ----------------------------------------------------------------------------
// var numbers = [3, 56, 2, 48, 5];

//  var a = numbers.reduce(function(Accumulate,CurrentNumber){

//   return Accumulate += CurrentNumber;
//  })

// console.log(a);

// ----------------------------------------------------------------------------
//                               REDUCE : Using ForEach
//  Reduce - Accumulate a value by doing something to each item in an array.
// ----------------------------------------------------------------------------
// var numbers = [3, 56, 2, 48, 5];
// var newNumber = 0;

// numbers.forEach(function (num) {
//   newNumber += num;
// });
// console.log(newNumber);

// ----------------------------------------------------------------------------
//                               FIND
//        Find - find the first item that matches from an array.
// ----------------------------------------------------------------------------

// var numbers = [3, 56, 2, 48, 5];

// var a = numbers.find(function(num){
// return (num < 10);
// })
// console.log(a);

// ----------------------------------------------------------------------------
//                               FindIndex
//        Find - find the first item that matches from an array.
// ----------------------------------------------------------------------------

// var numbers = [3, 56, 2, 48, 5];

// var a = numbers.findIndex(function(num){
// return (num > 40);
// })
// console.log(a);

import Emoji from "./emojipedia";

const a = Emoji.map(function (xyz) {
  return xyz.meaning.substring(0, 100);
});
console.log(a);
