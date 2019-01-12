// meta-utility
const log = console.log;

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