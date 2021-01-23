(function(window) {
    let yaakovGreeter = {};
    yaakovGreeter.name = "Yaakov";
    let greeting = "Hello ";
    yaakovGreeter.sayHello = function() {
        console.log(greeting + yaakovGreeter.name);
    }

    // этим действием мы указали що наша переменная будет та, что в функции
    window.yaakovGreeter = yaakovGreeter;

})(window);