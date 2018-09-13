function countdown(callback) {
  setTimeout(function () {
    callback();

  },2000);
}

function createMultiplier(multipleValue) {
  return function (value) {
    return multipleValue * value;
  };

}

function multiplier(a,b) {
  return a * b;
}

let doubler = createMultiplier(2)
let tripler = createMultiplier(3)
