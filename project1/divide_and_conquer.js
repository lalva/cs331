var matrix = require('./matrix');
// Divide-and-conqure matrix multiplication
var dnc = function (m, n) {
  var size = m.length;
  if (size > 1) {
    var a = [];
    var b = [];
    var c = [];
    var d = [];
    var e = [];
    var f = [];
    var g = [];
    var h = [];
    var halfSize = size / 2;
    for (var i = 0; i < size; i++) {
      if (i < halfSize) {
        a[i] = [];
        e[i] = [];
        b[i] = [];
        f[i] = [];
      } else {
        c[i-halfSize] = [];
        g[i-halfSize] = [];
        d[i-halfSize] = [];
        h[i-halfSize] = [];
      }
      for (var j = 0; j < size; j++) {
        if (i < halfSize){
          if (j < halfSize) {
            a[i].push(m[i][j]);
            e[i].push(n[i][j]);
          } else {
            b[i].push(m[i][j]);
            f[i].push(n[i][j]);
          }
        } else {
          if (j < halfSize) {
            c[i-halfSize].push(m[i][j]);
            g[i-halfSize].push(n[i][j]);
          } else {
            d[i-halfSize].push(m[i][j]);
            h[i-halfSize].push(n[i][j]);
          }
        }
      }
    }
    var aebg = matrix.add(dnc(a, e), dnc(b, g));
    var afbh = matrix.add(dnc(a, f), dnc(b, h));
    var cedg = matrix.add(dnc(c, e), dnc(d, g));
    var cfdh = matrix.add(dnc(c, f), dnc(d, h));
    var z = [];
    for (var i = 0; i < size; i++) {
      z[i] = [];
      for (var j = 0; j < size; j++) {
        if (i < halfSize){
          if (j < halfSize) {
            z[i].push(aebg[i + j]);
          } else {
            z[i].push(afbh[i - halfSize + j]);
          }
        } else {
          if (j < halfSize) {
            z[i].push(cedg[i + j - halfSize]);
          } else {
            z[i].push(cfdh[i - halfSize + j - halfSize]);
          }
        }
      }
    }
    return z;
  } else {
    return [[m[0][0] * n[0][0]]];
  }
};

module.exports = dnc;