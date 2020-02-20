
exports.min = function min (array) {
  if (array && array.length > 0){
    return array.reduce((min, current) => min = min > current ? current : min, Infinity);
  }
  return 0;
}

exports.max = function max (array) {
  if (array && array.length > 0){
    return array.reduce((max, current) => max = max < current ? current : max, -Infinity);
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length > 0){
    return array.reduce((sum, current) => sum += current, 0)/array.length;
  } 
  return 0;
}
