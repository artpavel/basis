yaakovGreeter.sayHello();
johnGreeter.sayHi();

// Immediately Invoked Function Expression
// IIFE
(function(name) {
    console.log("Hello " + name);
})("Coursera!");



(function() {
    console.log(2 * 2);
})();

// очень простая и умная идея. Мы делаем ф-ию и сразу ее вызываем
// она сначала создает объект, а потом сразу его вызывает
// а в примерах мы передаем главый параметр window
(function(num) {
    console.log(num ** 2);
})(4);

(function(name, age) {
    console.log(`Hello, I am ${name} and I have ${age} years`);
})('Pavel', 42);