// program runner
var moment = require('moment');
var matrixGen = require('./random_matrix');
var divideAndConquer = require('./divide_and_conquer');
var standard = require('./standard');
var strassen = require('./strassen');

for (var i = 1; true; i++) {
  console.log('i: '+i);
  matrixGen.multiply(matrixGen.create(Math.pow(2, i)), matrixGen.create(Math.pow(2, i)), divideAndConquer);
}
// var a = matrixGen.create(2);
// var b = matrixGen.create(2);
// console.log(matrixGen.toString(a));
// console.log(matrixGen.toString(b));
// var std = matrixGen.multiply(a, b, standard);
// console.log(matrixGen.toString(std));
// var dnc = matrixGen.multiply(a, b, divideAndConquer);
// console.log(matrixGen.toString(dnc))