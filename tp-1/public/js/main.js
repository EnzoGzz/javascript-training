logIndex0to5();

const h1 = document.querySelector('h1').innerText; // Or innerHtml to get html instead of text
const h2 = document.querySelector('h2#titleNews').innerText; // Or innerHtml to get html instead of text
const h3s = document.querySelectorAll('h3.title');

logMessage(h1);
logMessage(h2);
h3s.forEach(h3 => logMessage(h3.innerText));

/* From stuff */
const form = document.querySelector('form#addNewsForm');
const btn = document.querySelector('input[name="addNewsBtn"]');
const news = document.querySelector('input[name="titleToAdd"]');
const newsSection = document.querySelector('section#news');

form.addEventListener('submit', e => e.preventDefault()); // Disable refresh on submit

btn.addEventListener("click", () => {

    let title = news.value;

    //Reset section
    news.value = '';
    let err = document.querySelector('#err');
    if(document.contains(err)) err.remove();

    //Input validation section
    if(/^\s*$/.test(title)) throwErr('Empty input !'); // Whitespace regex
    if(newsSection.innerText.indexOf(title) !== -1) throwErr('News already exists !');

    //Insert section
    newsSection.insertAdjacentHTML('beforeend',`
        <article>
            <h3 class="title">${title}</h3>
        </article>
    `);

})