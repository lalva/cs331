var moment =  require('moment');

// private methods
var createMatrix = function(size, func) {
  //generate rows
  var c = [];
  for (var i = 0; i < size; i++) {
    //generate columns
    var col = [];
    for (var j = 0; j < size; j++) {
      var val = null;
      if (typeof func === 'function') {
        val = func(i, j);
      }
      col.push(val);
    }
    c.push(col);
  }
  return c;
};

module.exports = {
  generate: function (size) {
    // size is out of bounds
    if (!size || (Math.log(size) / Math.LN2) % 1 !== 0 || (Math.log(size) / Math.LN2) < 1) {
      console.log('Invalid matrix. Defaulting to 2x2');
      size = 2;
    }
    return createMatrix(size, function(){
      return Math.floor(Math.random()*1000) % 100;
    });
  },
  create: function (size, f) {
    // size is out of bounds
    if (!size || (Math.log(size) / Math.LN2) % 1 !== 0 || (Math.log(size) / Math.LN2) < 1) {
      console.log('Invalid matrix. Defaulting to 2x2');
      size = 2;
    }
    return createMatrix(size, f);
  },
  add: function(a, b) {
    if (Array.isArray(a) && Array.isArray(a[0]) && a.length === a[0].length && Array.isArray(b) && Array.isArray(b[0]) && b.length === b[0].length && a.length === b.length) {
      return createMatrix(a.length, function(i, j) {
        return a[i][j] + b[i][j];
      });
    } else {
      console.log('Invlaid matricies for addition');
      return null;
    }
  },
  subtract: function(a, b) {
    if (Array.isArray(a) && Array.isArray(a[0]) && a.length === a[0].length && Array.isArray(b) && Array.isArray(b[0]) && b.length === b[0].length && a.length === b.length) {
      return createMatrix(a.length, function(i, j) {
        return a[i][j] - b[i][j];
      });
    } else {
      console.log('Invlaid matricies for addition');
      return null;
    }
  },
  multiply: function (a, b, f) {
    if (Array.isArray(a) && Array.isArray(a[0]) && a.length === a[0].length && Array.isArray(b) && Array.isArray(b[0]) && b.length === b[0].length && a.length === b.length) {
      var start = moment();
      var c = f(a, b);
      console.log(moment().diff(start));
      return c;
    } else {
      console.log('Invlaid matricies for multiplication');
      return null;
    }
  },
  compare: function (a, b) {
    if (Array.isArray(a) && Array.isArray(a[0]) && a.length === a[0].length && Array.isArray(b) && Array.isArray(b[0]) && b.length === b[0].length && a.length === b.length) {
      for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a.length; j++) {
          if (a[i][j] !== b[i][j]) {
            return false;
          }
        }
      }
      return true;
    } else {
      console.log('Invlaid matricies for addition');
      return false;
    }
  },
  toString: function (matrix) {
    //check valid matrix
    if (Array.isArray(matrix) && Array.isArray(matrix[0]) && matrix.length === matrix[0].length) {
      var size = matrix[0].length;
      var str = "";
      //print rows
      for (var i = 0; i < size; i++) {
        //print columns
        for (var j = 0; j < size; j++) {
          str += matrix[i][j]+'\t';
        }
        str += '\n';
      }
      return str;
    } else {
      return 'Invalid matrix.';
    }
  }
};