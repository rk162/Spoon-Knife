function sayHello(name) {
    let text = 'Hello ' + name; //local variable
    let say= function() {
         console.log(text);
    }
    return say;
}
let say2= sayHello('Bob');
say2();
//sayHello('Bob')();
// function sayHello(name) {
//     let text = 'Hello ' + name; //local variable
//     console.log(text);
// }
// let say2= sayHello('Bob');
// say2;