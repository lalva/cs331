var moment =  require('moment');
// generate a random matrix
module.exports = {
  create: function (size) {
    // size is out of bounds
    if (!size || (Math.log(size) / Math.LN2) % 1 !== 0 || (Math.log(size) / Math.LN2) < 1) {
      console.log('Invalid matrix. Defaulting to 2x2');
      size = 2;
    }
    //generate rows
    var rows = [];
    for (var i = 0; i < size; i++) {
      //generate columns
      var column = [];
      for (var j = 0; j < size; j++) {
        column.push(Math.floor(Math.random()*1000) % 100);
      }
      rows.push(column);
    }
    return rows;
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
      return 'Not a matrix.';
    }
  },
  multiply: function (a, b, f) {
    if (Array.isArray(a) && Array.isArray(a[0]) && a.length === a[0].length && Array.isArray(b) && Array.isArray(b[0]) && b.length === b[0].length) {
      var c = [];
      var size = a[0].length;
      for (var i = 0; i < size; i++) {
        var col = [];
        for (var j = 0; j < size; j++) {
          col.push(null);
        }
        c.push(col);
      }
      var start = moment();
      f(a, b, c);
      console.log(moment().diff(start));
      return c;
    } else {
      console.log('Invlaid matricies for multiplication')
      return null
    }
  }
};