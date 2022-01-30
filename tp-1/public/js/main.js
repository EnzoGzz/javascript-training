logIndex0to5();

logMessage(H1);
logMessage(H2);
H3S.forEach(h3 => logMessage(h3.innerText));

// From stuff
FORM.addEventListener('submit', e => e.preventDefault()); // Disable refresh on submit

BTN.addEventListener("click", () => {

    let title = NEWS.value;

    //Reset section
    NEWS.value = '';
    let err = document.querySelector('#err');
    if(document.contains(err)) err.remove();

    //Input validation section
    if(/^\s*$/.test(title)) throwErr('Empty input !'); // Whitespace regex
    if(NEWSSELECTION.innerText.indexOf(title) !== -1) throwErr('News already exists !');

    //Insert section
    NEWSSELECTION.insertAdjacentHTML('beforeend',`
        <article>
            <h3 class="title">${title}</h3>
        </article>
    `);

})