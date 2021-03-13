
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var newArr = [];
  if (matrix){
    for (var i = 0; i < matrix.length; i++){
      if ((i+1)%2 == 0) {
        matrix[i].reverse(); 
      } 
        newArr =  newArr.concat(matrix[i]);
    }
    return newArr;
  } else {return []; } 
}
