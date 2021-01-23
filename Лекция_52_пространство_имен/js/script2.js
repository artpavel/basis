(function (window) {
  let johnGreeter = {};
  johnGreeter.name = "John";
  let greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);



