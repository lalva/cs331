// program runner
var moment = require('moment');
var matrix = require('./matrix');
var divideAndConquer = require('./divide_and_conquer');
var standard = require('./standard');
var strassen = require('./strassen');

// for (var i = 1; true; i++) {
//   console.log('n: '+Math.pow(2, i));
//   matrix.multiply(matrix.create(Math.pow(2, i)), matrix.create(Math.pow(2, i)), divideAndConquer);
// }
var a = matrix.generate(2);
var b = matrix.generate(2);
console.log(matrix.toString(a));
console.log(matrix.toString(b));
var std = matrix.multiply(a, b, standard);
console.log(matrix.toString(std));
var dnc = matrix.multiply(a, b, divideAndConquer);
console.log(matrix.toString(dnc))