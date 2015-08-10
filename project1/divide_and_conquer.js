// Divide-and-conqure matrix multiplication
var matrixAdd = function(m, n) {
  var c = [];
  for (var i = 0; i < m.length; i++) {
    c.push(m[i]+n[i]);
  }
  return c;
};

var divideAndConquer = function (m, n) {
  var size = Math.sqrt(m.length);
  if (size > 1) {
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var e = [];
    var f = [];
    var g = [];
    var h = [];
    var newSize = size / 2;
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (i < newSize){
          if (j < newSize) {
            a.push(m[i*size+j]);
            e.push(n[i*size+j]);
          } else {
            b.push(m[i*size+j]);
            f.push(n[i*size+j]);
          }
        } else {
          if (j < newSize) {
            c.push(m[i*size+j]);
            g.push(n[i*size+j]);
          } else {
            d.push(m[i*size+j]);
            h.push(n[i*size+j]);
          }
        }
      }
    }
    var aebg = matrixAdd(divideAndConquer(a, e), divideAndConquer(b, g));
    var afbh = matrixAdd(divideAndConquer(a, f), divideAndConquer(b, h));
    var cedg = matrixAdd(divideAndConquer(c, e), divideAndConquer(d, g));
    var cfdh = matrixAdd(divideAndConquer(c, f), divideAndConquer(d, h));
    var z = []//z11.concat(z12.concat(z21.concat(z22.concat())));
    for (var i = 0; i < size; i++) {
      for (var j = 0; j < size; j++) {
        if (i < newSize){
          if (j < newSize) {
            z.push(aebg[i + j]);
          } else {
            z.push(afbh[i - newSize + j]);
          }
        } else {
          if (j < newSize) {
            z.push(cedg[i + j - newSize]);
          } else {
            z.push(cfdh[i - newSize + j - newSize]);
          }
        }
      }
    }
    return z;
  } else {
    return [m * n];
  }
};

module.exports = function (a, b, c) {
  var m = [].concat.apply([], a);
  var n = [].concat.apply([], b);
  var matrixC = divideAndConquer(m, n);
  for (var i = 0; i < a.length; i++) {
    c[i] = [];
    for (var j = 0; j < a.length; j++) {
      c[i][j] = matrixC[i*a.length+j];
    }
  }
};