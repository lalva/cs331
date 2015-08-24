var matrix = require('./matrix');
// Strassen matrix multiplication
var strassen = function (m, n, mRow, mCol, nRow, nCol, size) {
  if (size > 1) {
    var halfSize = size / 2;
    var aebg = matrix.add(strassen(m, n, mRow,           mCol, nRow,  nCol,          halfSize), strassen(m, n, mRow,          mCol+halfSize, nRow+halfSize, nCol, halfSize));
    var afbh = matrix.add(strassen(m, n, mRow,           mCol, nRow,  nCol+halfSize, halfSize), strassen(m, n, mRow,          mCol+halfSize, nRow+halfSize, nCol+halfSize, halfSize));
    var cedg = matrix.add(strassen(m, n, mRow+halfSize,  mCol, nRow,  nCol,          halfSize), strassen(m, n, mRow+halfSize, mCol+halfSize, nRow+halfSize, nCol, halfSize));
    var cfdh = matrix.add(strassen(m, n, mRow+halfSize,  mCol, nRow,  nCol+halfSize, halfSize), strassen(m, n, mRow+halfSize, mCol+halfSize, nRow+halfSize, nCol+halfSize, halfSize));
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
  return strassen(m, n, 0, 0, 0, 0, m.length);
};