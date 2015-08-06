// Divide-and-conqure matrix multiplication
var divideAndConquer = function (m, n) {
  var size = Math.sqrt(m.length);
  if (size > 2) {
    var m11 = [];
    var m12 = [];
    var m21 = [];
    var m22 = [];
    var n11 = [];
    var n12 = [];
    var n21 = [];
    var n22 = [];
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        
      }
    }
    var z11 = matrixAdd(divideAndConquer(m11, n11), divideAndConquer(m12, n21));
    var z12 = matrixAdd(divideAndConquer(m11, n12), divideAndConquer(m12, n22));
    var z21 = matrixAdd(divideAndConquer(m21, n11), divideAndConquer(m22, n21));
    var z22 = matrixAdd(divideAndConquer(m21, n12), divideAndConquer(m22, n22));
    var z = [];
    for (var i = 0; i < size; i++) {
      z[i] = [];
      for (var j = 0; j < size; j++) {
        
      }
    }
  } else {
    
  }
};

module.exports = function (a, b, c) {
  var matrixC = divideAndConquer(a, b);
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      c[i][j] = matrixC[i*a.length+j];
    }
  }
};