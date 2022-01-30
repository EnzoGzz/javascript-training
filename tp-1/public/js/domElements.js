const H1 = document.querySelector('h1').innerText; // Or innerHtml to get html instead of text
const H2 = document.querySelector('h2#titleNews').innerText; // Or innerHtml to get html instead of text
const H3S = document.querySelectorAll('h3.title');

const FORM = document.querySelector('form#addNewsForm');
const BTN = document.querySelector('input[name="addNewsBtn"]');
const NEWS = document.querySelector('input[name="titleToAdd"]');
const NEWSSELECTION = document.querySelector('section#news');