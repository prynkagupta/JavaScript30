//Q-01/30-helloWorld.js

// Q.2667 Create Hello World Function
//Write a function createHelloWorld. It should return a new function that always returns "Hello World".


let createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
const a = createHelloWorld();
console.log(a());