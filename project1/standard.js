// standard matrix multiplication
module.exports = function(a, b, c) {
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a.length; j++) {
      c[i][j] = 0;
      for (var k = 0; k < a.length; k++) {
        c[i][j] += a[i][k] * b[k][j];
      }
    }
  }
};