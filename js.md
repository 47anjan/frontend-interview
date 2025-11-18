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

## Q20: Difference between `var`, `let`, and `const`

`var` is function-scoped, hoisted, and can be redeclared. `let` and `const` are block-scoped, have a temporal dead zone, and cannot be redeclared. `const` also cannot be reassigned (though objects/arrays can be mutated).

## Q21: What is the Temporal Dead Zone (TDZ)?

The TDZ is the period between entering a scope and the actual declaration of a `let` or `const` variable. Accessing the variable during this time throws a ReferenceError. It exists to catch errors and enforce better coding practices.

## Q22: Difference between `==` and `===`

`==` (loose equality) performs type coercion before comparison, converting operands to the same type. `===` (strict equality) checks both value and type without coercion. Always prefer `===` to avoid unexpected behavior.

## Q23: What is Deep Copy vs Shallow Copy?

A shallow copy copies only the first level of an object; nested objects are still references. A deep copy creates completely independent copies of all nested objects. Methods include `Object.assign()` and spread operator (shallow), or `structuredClone()` and libraries like Lodash (deep).

## Q24: What is Currying?

Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument. It enables partial application and creates specialized functions from general ones.

Example: `add(a, b, c)` becomes `add(a)(b)(c)`

## Q25: What are Higher-Order Functions?

Higher-order functions either take functions as arguments or return functions as results. Common examples include `map()`, `filter()`, `reduce()`, and `forEach()`. They enable functional programming patterns.

## Q26: What are the Spread and Rest Operators?

Both use `...` syntax but serve different purposes. Spread expands an array or object into individual elements (useful for copying or merging). Rest collects multiple elements into an array (used in function parameters or destructuring).

## Q27: What is Destructuring?

Destructuring extracts values from arrays or properties from objects into distinct variables using a concise syntax. It works in variable declarations, function parameters, and assignments.

Example: `const {name, age} = person` or `const [first, second] = array`

## Q28: Difference between CommonJS and ES6 Modules

CommonJS uses `require()` and `module.exports`, loads synchronously, and is used in Node.js. ES6 modules use `import` and `export`, support static analysis, load asynchronously, and are the standard for modern JavaScript.

## Q29: What are Microtasks and Macrotasks?

Microtasks (promises, `queueMicrotask()`) have higher priority and execute after the current script but before the next macrotask. Macrotasks (`setTimeout`, `setInterval`, I/O) execute one per event loop cycle. Microtasks always complete before the next macrotask starts.

## Q30: What is the difference between `null` and `undefined`?

`undefined` means a variable has been declared but not assigned a value, or a function returns nothing. `null` is an explicit assignment representing "no value" or "empty." `typeof null` returns "object" (a historical bug), while `typeof undefined` returns "undefined."

## Q31: What are Arrow Functions and how do they differ from regular functions?

Arrow functions have concise syntax, lexically bind `this` from the enclosing scope, cannot be used as constructors, don't have their own `arguments` object, and cannot be used as generators. They're ideal for callbacks and shorter functions.

## Q32: What is `use strict`?

`use strict` enables strict mode, which catches common coding errors and prevents certain actions. It makes debugging easier, disallows undeclared variables, prevents duplicate parameter names, and changes `this` behavior in functions (becomes `undefined` instead of global object).

## Q33: What are Immediately Invoked Function Expressions (IIFE)?

IIFEs are functions that execute immediately after being defined. They create a private scope, preventing variable pollution of the global namespace. Syntax: `(function() { /* code */ })()` or `(() => { /* code */ })()`.

## Q34: What is the `new` keyword and what does it do?

When using `new` with a constructor function: creates a new empty object, sets the object's `__proto__` to the constructor's prototype, binds `this` to the new object, executes the constructor code, and returns the object (unless the constructor explicitly returns another object).

## Q35: What are Getters and Setters?

Getters and setters are special methods that allow you to define object properties with custom get and set behavior. They use `get` and `set` keywords and are accessed like regular properties, enabling data validation, computed properties, and encapsulation.

## Q36: What is the `instanceof` operator?

`instanceof` checks if an object is an instance of a specific constructor or class by examining the prototype chain. It returns `true` if the object's prototype chain contains the constructor's prototype.

## Q37: What are Template Literals?

Template literals use backticks and allow embedded expressions with `${}`, multi-line strings without escape characters, and tagged templates for advanced string processing. They provide a cleaner syntax than string concatenation.

## Q38: What is Event Bubbling and Event Capturing?

Event bubbling propagates events from the target element up through ancestors to the root. Event capturing (less common) propagates from the root down to the target. You can control this with the third parameter in `addEventListener()`.

## Q39: What is the Spread Operator used for?

The spread operator expands iterables into individual elements. Uses include: copying arrays/objects, merging arrays/objects, passing array elements as function arguments, and converting iterables (like strings) into arrays.

## Q40: What is the difference between `map()` and `forEach()`?

`map()` creates and returns a new array with transformed elements, doesn't modify the original array, and is chainable. `forEach()` executes a function on each element, returns `undefined`, and is used for side effects. Use `map()` for transformations, `forEach()` for actions.

## Q41: What are Symbol primitives?

Symbols are unique, immutable primitive values often used as object property keys to avoid naming collisions. Each Symbol is guaranteed to be unique, even with the same description. They're useful for creating private properties and defining well-known symbols like `Symbol.iterator`.

## Q42: What is Proxy in JavaScript?

A Proxy wraps an object and intercepts operations performed on it through traps (handlers). It enables custom behavior for fundamental operations like property access, assignment, enumeration, and function invocation. Useful for validation, logging, and data binding.

## Q43: What is the difference between `Object.freeze()` and `Object.seal()`?

`Object.freeze()` makes an object completely immutable: cannot add, delete, or modify properties. `Object.seal()` prevents adding or deleting properties but allows modifying existing ones. Both only affect the first level (not nested objects).

## Q44: What are WeakMap and WeakSet?

WeakMap and WeakSet are collections that hold weak references to objects, allowing garbage collection if there are no other references. Keys in WeakMap must be objects. They don't prevent memory leaks and are not iterable. Useful for storing metadata without preventing cleanup.

## Q45: What is Optional Chaining (`?.`)?

Optional chaining safely accesses nested object properties without explicit null/undefined checks. If any reference is nullish, the expression short-circuits and returns `undefined`. Syntax: `obj?.prop`, `obj?.[expr]`, `func?.()`.

## Q46: What is Nullish Coalescing (`??`)?

The nullish coalescing operator returns the right operand when the left is `null` or `undefined`, otherwise returns the left operand. Unlike `||`, it only checks for nullish values, not all falsy values (0, '', false are preserved).

## Q47: What is the Module Pattern?

The module pattern uses closures and IIFEs to create private and public members, achieving encapsulation. It returns an object with public methods while keeping private variables and functions hidden. It was popular before ES6 modules for organizing code.

## Q48: What are Tagged Template Literals?

Tagged templates allow you to parse template literals with a function. The tag function receives an array of string literals and the values of substitutions, enabling custom string processing, sanitization, localization, or creating DSLs (domain-specific languages).