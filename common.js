// meta-utility
const log = console.log;

/***************************** Helpful Code Snippets *****************************/

// inline html
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

// log both identifier and value
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