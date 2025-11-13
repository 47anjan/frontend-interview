# JavaScript Interview Questions and Answers

## Q1: Difference between class and constructor function

Classes provide a more modern, syntactic way to create objects and handle inheritance, while constructor functions are the older way and rely on the `this` keyword and `new`.

## Q2: Inheriting from constructor functions

You can inherit by using `call` or `apply` to invoke the parent constructor and then setting up the prototype chain, so the child inherits from the parent.

## Q3: What is `this` in JavaScript?

`this` refers to the context in which a function is called. Its value can change depending on how a function is invoked. For instance, in a method, `this` refers to the object that owns the method. In a regular function, it can refer to the global object (or `undefined` in strict mode) unless it's called as part of an object. In arrow functions, `this` is lexically bound, meaning it takes the value of `this` from the surrounding scope.

## Q4: What is a closure in JavaScript?

Closures are a feature where a function retains access to its lexical scope, even after that outer function has finished executing. A closure allows a function to remember the environment in which it was created, enabling data privacy and function factories.

## Q5: What are Promises in JavaScript?

Promises represent the eventual completion or failure of an asynchronous operation. They can be in one of three states: pending, fulfilled, or rejected. Promises make handling asynchronous code more manageable compared to callbacks.

## Q6: What is a prototype in JavaScript?

Every JavaScript object has a prototype, which is another object from which it can inherit properties and methods. When you try to access a property on an object, JavaScript checks the object, then the prototype chain.

## Q7: Difference between `prototype` and `__proto__`

`prototype` is a property of a constructor function that defines the object used as the prototype for all instances created by that constructor. `__proto__` is an internal property of individual objects that points to their prototype.

## Q8: What is the Event Loop in JavaScript?

The event loop allows JavaScript to handle asynchronous code. It manages the execution of code, events, and messages by moving callbacks from the queue to the call stack once it's empty.

## Q9: What is a Factory Function?

A factory function returns a new object every time it's called. It doesn't use `new` or `this`, and can use closures for private data. It's flexible and simple to use.

## Q10: What is a Constructor Function?

A constructor function is used to create and initialize new objects using the `new` keyword. It sets `this` to the new object and assigns properties and methods to it.

## Q11: Difference between Factory and Constructor Functions

Constructor functions use `new` and `this`, while factory functions return an object manually and don't rely on `new`. Factories are more flexible and can use closures for private data.

## Q12: What are `call`, `apply`, and `bind`?

`call` invokes a function with a specific `this` and arguments individually.  
`apply` is similar, but takes arguments as an array.  
`bind` returns a new function with `this` permanently bound to the provided object.

## Q13: What is Scope in JavaScript?

Scope determines where variables are accessible. Types include global, function, and block scope. JavaScript also has lexical scope, meaning inner functions can access outer variables.

## Q14: What is Hoisting?

Hoisting moves variable and function declarations to the top of their scope before code execution. `var` declarations are hoisted but not initialized, while functions are fully hoisted. `let` and `const` are block-scoped and have a temporal dead zone.

## Q15: Difference between Promises and Async/Await

Promises represent eventual completion or failure of async operations, while `async/await` is syntax sugar that makes promise-based code look synchronous and easier to read.

## Q16: What are `Promise.all`, `Promise.allSettled`, and `Promise.race`?

- `Promise.all`: Resolves when all promises succeed, rejects if any fail.
- `Promise.allSettled`: Resolves when all promises settle, returns results of all.
- `Promise.race`: Resolves or rejects as soon as one promise settles.

## Q17: What is Event Delegation?

Event delegation attaches a single event listener to a parent element, handling events from its children using event bubbling. It's efficient and works well for dynamically added elements.

## Q18: Difference between Debouncing and Throttling

Debouncing waits until events stop firing before running a function (useful for search inputs). Throttling ensures a function is called at most once per interval (useful for scroll events).

## Q19: What is Memoization?

Memoization caches function results. When a function is called with the same arguments, it returns the cached value instead of recalculating. It improves performance for repeated expensive computations.
