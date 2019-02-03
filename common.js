/***************************** meta-utility *****************************/
const log = console.log;

/***************************** inline html *****************************/

const content = document.querySelector('#common');
(function inlineHtml() {
    const html = ['Dog', 'Cat', 'Rabbit'].map((animal, i) => `
        <li class="animal">
            <span class="a-name">${animal}</span> - <span class="a-index">${i}</span>
        </li>
    `).join(''); // join '' to convert array to string
    const ul = document.createElement('ul');
    ul.innerHTML = html;
    content.appendChild(ul);
})();

/***************************** Different ways to clone an array *****************************/
const original = ['a', 'b', 3, 4, 'hey'];
// compatible with js < es5
const arr1 = original.slice(); // slice
const arr2 = [].concat(original); // concatenate with empty array
const arr3 = Array.from(original); // Array factory constructor
// es6
const arr4 = [...original]; // es6 spread syntax (processes each item in iterable instead of entire array)
// modify and test
for (const arr of [arr1, arr2, arr3]) {
    arr[5] = 'Hello World';
}
console.log({ original }, { arr1 }, { arr2 }, { arr3 }); // original intact while rest 5th item changed

/***************************** log both identifier and value *****************************/

const myObj = true;
console.log({ myObj });

/***************************** Concepts *****************************/

/* Using 'new' operator vs Function only */
let name = 'Bobby B';
function Person(name) {
    this.name = name;
}

// 'new' creates a copy of this Object and binds it to the 'this' inside the function.
const person1 = new Person('William');
// Function only - this inside function defaults to global this
const person2 = Person('Jake');
console.log(`Name of person1: ${person1.name}\n
Name of person2: ${person2 === undefined ? 'person2 is undefined' : person2.name}\n
Name of global name: ${this.name}`);

/* Shared properties */
// accomplished via function's prototype property
const person3 = new Person('Henry');
Person.prototype.country = 'USA';
console.log(`person1 lives in same country as person3: ${person1.country === person3.country}, which would be ${person1.country}.`);

// Unicode characters
// http://unicode.scarfboy.com
console.log('Play symbol: \u25BA');

// Closures
console.log('Closures');
function func1(a, b) {
    var c = 10;
    return function func2(global = false) {
        var ctx = this;
        var args = arguments;
        console.log(`Context: [${ctx}] and arguments: [${args.length}]`);

        if (global)
            console.log(`a=${this.a} | b=${this.b} | c=${this.c}`);
        else
            console.log(`a=${a} | b=${b} | c=${c}`);
    };
}
var a = 8, b = 9;
var func3 = func1(a, b);
func3();
a += 5; b += 5;
func3();
func3(true);
var c = 33;
func3(global = true);
func3(false, 1, 2, 3, 4, 5, 'Hello World!');

function f1(func) {
    var ctx = this;
    var args = arguments;
    return function () {
        func.apply(ctx, args);
    };
}

//// Debounce
// Debounce is a technique used to delay processing of UI Events
// until necessary. The event handler is paused until an event has
// stopped firing and a predetermined amount of wait time has elapsed
// before being invoked.

// Credit David Walsh (https://davidwalsh.name/javascript-debounce-function)
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

// https://levelup.gitconnected.com/debounce-in-javascript-improve-your-applications-performance-5b01855e086
function debounce(func, wait, immediate) {
    var timeout;

    return function executedFunction() {
        var context = this;
        var args = arguments;

        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };

        var callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) func.apply(context, args);
    };
}