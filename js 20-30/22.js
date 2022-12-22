String.prototype.toString = function() {
    return this.valueOf().split('').reverse().join("");
};

console.log(("Hello World!").toString())