// Variables
/**
 * var: old way to declare variables (avoid it, use let or const)
 */
var num = 10;

// console.log(num)

/**
 * let and const: block-scoped variables (const cannot be reassigned)
 */

let name = "Gilbert";

const PI = 3.1416;

/**
 * Primitive data types
 */

// Strings (text)

let greeting = "Hello";
const friend = "Gilbert";

const message = greeting + " " + friend;

const template = `Greeting: ${greeting} ${friend}`;

console.log(message);
console.log(template);

// Number

let num1 = 1;
let num2 = 1.16;
let num3 = "2"; // This value is a string, so + joins it as text: "2.162"
const sum = num1 + num2 + num3;

console.log(sum);
// console.log(NaN)
console.log(undefined + 5);

// Boolean

const isTrue = true;
const isFalse = false;

// Null

const empty = null;

// undefined

const notDefined = undefined;

/**
 * Composite data types
 */

// Arrays

const fruits = ["apple"];
fruits.push("banana");
fruits.push("orange");
fruits.push(5);
fruits.push(true);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);

// Objects

const person = {
  name: "Gilbert",
  age: 26,
  favoriteTeam: "Liverpool",
};

console.log(person.name);
console.log(person.age);
console.log(person.favoriteTeam);
