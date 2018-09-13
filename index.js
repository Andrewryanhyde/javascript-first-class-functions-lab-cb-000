function countdown(callback) {
  setTimeout(function () {
    callback();

  },2000);
}

function createMultiplier(multiplyValue) {
  return function (value) {
    return multipleValue * value;
  };

}
