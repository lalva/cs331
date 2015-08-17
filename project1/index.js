// program runner
var moment = require('moment');
var matrix = require('./matrix');
var divideAndConquer = require('./divide_and_conquer');
var standard = require('./standard');
var strassen = require('./strassen');

for (var i = 1; true; i++) {
  var a = matrix.generate(Math.pow(2, i));
  var b = matrix.generate(Math.pow(2, i));
  console.log('n: '+Math.pow(2, i));
  console.log('std:');
  var std = matrix.multiply(a, b, standard);
  // console.log(matrix.toString(std));
  console.log('dnc:');
  var dnc = matrix.multiply(a, b, divideAndConquer);
  // console.log(matrix.toString(dnc));
  console.log('');
}
// var a = matrix.generate(16);
// var b = matrix.generate(16);
// console.log(matrix.toString(a));
// console.log(matrix.toString(b));
// var std = matrix.multiply(a, b, standard);
// console.log(matrix.toString(std));
// var dnc = matrix.multiply(a, b, divideAndConquer);
// console.log(matrix.toString(dnc))