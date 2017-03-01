function iterativeLog(array) {
  array.forEach((element, index, array)  => {
    console.log(`${index}: ${element}`)
  })
}

function sqr(x) {
  return x*x;
}

function iterate(callback) {
  newArray = [Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100)];
  newArray.forEach(callback);
  return newArray;
}

function doToArray (array, callback) {
  array.forEach(callback);
}