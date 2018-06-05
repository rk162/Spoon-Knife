// spread operator function sum(x,y,z) {     return x+y+z; } const
// num=[1,2,3,4]; console.log(sum(...num));  //splits the arguments array and
// passes in the arguments as separate arguments
// console.log(sum.apply(null,num)); rest operator
function sum(...num) {
    console.log(num.length);
    return num.reduce((previous, current) => {
        return previous + current;

    });
}
console.log(sum(1, 2, 3, 4, 5));
function multiply(multiplier, ...arr) {
    return arr.map(function (element) {
        return multiplier * element;
    })
}
var arr1 = multiply(5, 2, 3, 4);
console.log(arr1);
function sortArray() {
    var arr = Array.from(arguments);
    var sorted = arr.sort();
    return sorted;
}
console.log(sortArray(67, 68, 87, 84));

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getData() {
        console.log(this.name + " is " + this.age + " years old !");
    }
    setData() {
        console.log(`${this.name} is ${this.age}  old !`);
    }
}

var user = new User("foo", 77);
user.getData();
user.setData();

function Tree(name) {
    this.name = name;
}
var theTree = new Tree('Redwood');
console.log(theTree.constructor);
console.log(Function.prototype.toString());
var o = new Object();
o.name = 'Joe';
console.log(Object.prototype.toString());

// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved ' + x + ' and ' + y + '.');
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
console.log(Rectangle.prototype.constructor);
console.log(Rectangle);
var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

function Area() {
    this.r = 0;
}
Area.prototype.circle = function (r) {
    let ar;
    ar = 2 * Math.PI * r;
    console.info('area = ' + ar);
}
function Rectar() {
    this.l = 0;
    this.b = 0;
}
Rectar.prototype.area = function (l, b) {
    let ar;
    ar = l * b;
    console.info('area = ' + ar);
}
function Rect() {
    Area.call(this);
    Rectar.call(this);
}
Rect.prototype = Object.create(Area.prototype);
Object.assign(Rect.prototype, Rectar.prototype);
Rect.prototype.constructor = Rect;

var rectar = new Rect();
console.log(rectar instanceof Area);
console.log(rectar instanceof Rect);
console.log(rectar instanceof Rectar);
rectar.circle(7);
rectar.area(4, 5);
console.log(Object.getPrototypeOf(rectar));
console.log(rectar.hasOwnProperty());

var ob=['hello','whatsup'];
console.log(typeof ob);
// var sayHello = function () {
//     console.log(this.name + " says hello");
// }

// var rufus = {
//     name: "Rufus"
// }
// rufus.sayHello = sayHello;

// var sabby = {
//     name: "Sabby"
// }
// sabby.sayHello = sayHello;

// // invoke sayHello from the objects
// rufus.sayHello();
// sabby.sayHello();

var sayHello= function() {
    if(this.name) {
        console.log(this.name+" says hello");
    }
    else {
        console.log(this+" can't say hello because name property was not provided");
    }
}
var kalki= {
    name: "Kalki"
}
kalki.sayHello= sayHello;
sayHello();
kalki.sayHello();

let pets = new Set(["Cat", "Dog", "Hamster"]);
pets["species"] = "mammals";

for (let pet in pets) {
   console.log(pet); // "species" 
}

for (let pet of pets) {
    console.log(pet); // "Cat", "Dog", "Hamster"
}

for (let pet in pets) {
    console.log(pets[pet]); // "mammals" 
 }

 function arg() {
     for(let arg of arguments) {
         console.log(arg);
     }
     console.log('Total arguments passed '+arguments.length);
 }
 arg(67,7,99,675);

const a = function getno(no) {
     var num= Number(no);
    for(let i=2;i<=Math.sqrt(num);i++) {
        if(num%i===0) {
            console.log(`${num} composite`);
            return;
        }
    }
    console.log(`${num} prime`);
 }
 a(7);

 const b = function(a) {
         return a*a;
 }
 console.log(b(a(6)));
//  console.log(parseInt('0xf',16));
//  console.log(parseFloat('3.14'));
//  console.log(eval('400+300'));

// let animal = {
//     eats: true,
//     walk() {
//         console.log('animal walks');
//     }
// };
// let rabbit={
//     runs: true,
//     walk: function() {
//      console.log('rabbit walks');
//     },
//     __proto__: animal
// };
// let longEar={
//     earLength: 10,
//     __proto__: rabbit
// }
// console.log(rabbit.walk());
// console.log(rabbit.runs);
// console.log(animal.walk());
// console.log(longEar.runs);
// console.log(rabbit.eats);
// let z= Object.getPrototypeOf(rabbit);
// console.log(z);

let person={
    name: 'John',
    lastname: 'Doe',
    set fullName(value) {
        [this.name,this.lastname]= value.split(" ");
    },
    get fullName() {
      return `${this.name} ${this.lastname}`;
    }
}
let admin={
    isAdmin: true,
    __proto__: person
}
console.log(admin.fullName);
admin.fullName= 'John Smith';
console.log(admin.fullName);
let animal={
    walk() {
        if(!this.isSleeping) {
            console.log('animal walk');
        }
    },
    sleep() {
     return this.isSleeping=true;
    }
};
let rabbit={
    name: 'white rabbit',
    __proto__: animal
};
console.log(rabbit.sleep());
console.log(rabbit.isSleeping);
console.log(animal.sleep());
console.log(animal);

// let hamster = {
//     stomach: [], //empty string
//     eat(food) {
//     this.stomach.push(food);
//     }
// };
    
// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };
    
// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };
//     speedy.eat('apple, banana');
//     console.log(speedy.stomach); //apple
//     console.log(lazy.stomach);
//     speedy.eat('apple, banana');
//     console.log(speedy.stomach); //apple

// let city={
//     example: 'bangalore',
//     metro() {
//         this.isMetro=true;
//     }
// }
// function Place(name) {
//     this.name=name;
// }
// Place.prototype= city;
// let area= new Place('Delhi');
// //area.constructor= Place;
// console.log(area.constructor===Place);
// console.log(area.__proto__===city);
// console.log(area.example);
// console.log(area.name);
// console.log(area.metro());
// console.log(area.isMetro);
// console.log(area.constructor===city.constructor);
// console.log(area.__proto__);
// console.log(area.__proto__.__proto__===Object.prototype);
// console.log(area.__proto__.__proto__.__proto__);

// let obje= {
//     name: 'one',
//     lname: 'two',
//     fname:function() {
//         return `${this.name} ${this.lname}`
//     }
// }
// console.log(Object.getOwnPropertyNames(obje));
// for(let entry in obje) {
//     console.log(obje[entry]);
// }
// let arr=['one','two',54,true];
// for(let item of arr) {
//     console.log(item);
//     if(item===54)
//     break;
// }

// function myAsyncFunction(url) {
//     return new Promise((resolve, reject) => {
//       const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
//       const xhr = new XMLHttpRequest();
//       xhr.open("GET", url, true);
//       xhr.onload = () => resolve(xhr.responseText);
//       xhr.onerror = () => reject(xhr.statusText);
//       xhr.send();
//     });
//   };
//   let count=0;
//   var p = function(resolve,reject){
//       resolve(count++);
//   };
// //   var callback = function(){
// //     Promise.all([(myAsyncFunction('https://jsonplaceholder.typicode.com/posts/'+count)),new Promise(p)])
// //     .then(function(response){
// //         let user= (response);
// //         let {userId,id,title,body}=user;
// //         for(let item in user) {
// //             console.log(item+": "+user[item]);
// //         }
// //     }).catch(function(err){
// //              console.log(err);
// //     });
// //     setTimeout(callback, 1000);
// // };
// // setTimeout(callback, 1000);
// //myAsyncFunction('https://jsonplaceholder.typicode.com/posts/'+count)

// // Promise.then(function(response) {
// //       console.log(response);
// // }).catch(function(err){
// //     console.log(err);
// // }).then(function(){
// //     console.log('finally');
// // });

// console.log('code running');
// let arr2=[1,2,3,4];
// console.log(arr2.toString());

// let animal1={
//     name: 'John',
//     surname: 'Smith',
//     walk() {
//         console.log('can walk');
//     },
//     set fullName(value) {
//         [this.name,this.surname]= value.split(" ");
//     },
//     get fullName() {
//         return `${this.name} ${this.surname}`
//     }
// };
// let animal2={
//     canRun: true,
//      __proto__: animal1
// };
// let animal3={
//     canWalk: false,
//     walk() {
//         console.log('can run');
//     },
//     name: 'Alice',
//     surname: 'Smith',
//     set fullName(value) {
//         [this.name,this.surname]= value.split(" ");
//     },
//     get fullName() {
//         return `${this.name} ${this.surname}`
//     },
//     __proto__:  animal2
// };
// animal3.walk();
// console.log(animal3.canRun);
// console.log(animal3.fullName);
// console.log(animal2.fullName);
// console.log(animal2);
// animal2.fullName= 'Sir Smith';
// console.log(animal2.fullName);
// console.log(animal1.fullName);
// console.log(animal2);

