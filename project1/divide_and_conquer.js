var matrix = require('./matrix');
// Divide-and-conqure matrix multiplication
var dnc = function (m, n, mRow, mCol, nRow, nCol, size) {
  if (size > 1) {
    var halfSize = size / 2;
    var aebg = matrix.add(dnc(m, n, mRow,           mCol, nRow,  nCol,          halfSize), dnc(m, n, mRow,          mCol+halfSize, nRow+halfSize, nCol, halfSize));
    var afbh = matrix.add(dnc(m, n, mRow,           mCol, nRow,  nCol+halfSize, halfSize), dnc(m, n, mRow,          mCol+halfSize, nRow+halfSize, nCol+halfSize, halfSize));
    var cedg = matrix.add(dnc(m, n, mRow+halfSize,  mCol, nRow,  nCol,          halfSize), dnc(m, n, mRow+halfSize, mCol+halfSize, nRow+halfSize, nCol, halfSize));
    var cfdh = matrix.add(dnc(m, n, mRow+halfSize,  mCol, nRow,  nCol+halfSize, halfSize), dnc(m, n, mRow+halfSize, mCol+halfSize, nRow+halfSize, nCol+halfSize, halfSize));
    var z = [];
    for (var i = 0; i < size; i++) {
      z[i] = [];
      for (var j = 0; j < size; j++) {
        if (i < halfSize){
          if (j < halfSize) {
            z[i].push(aebg[i][j]);
          } else {
            z[i].push(afbh[i][j - halfSize]);
          }
        } else {
          if (j < halfSize) {
            z[i].push(cedg[i - halfSize][j]);
          } else {
            z[i].push(cfdh[i - halfSize][j - halfSize]);
          }
        }
      }
    }
    return z;
  } else {
    return [[m[mRow][mCol] * n[nRow][nCol]]];
  }
};

module.exports = function(m, n) {
  return dnc(m, n, 0, 0, 0, 0, m.length);
};