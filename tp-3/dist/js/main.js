iterate();

let h1 = $('h1');
logMessageWithDate(h1.html());

let titleNews = $('#titleNews');
logMessageWithDate(titleNews.html());

let titles = $('.title');
titles.each( function() { logMessageWithDate($( this ).html()) } );

let button = $('input[name="addNewsBtn"]');
bindButton(button);

let buttons = $('article button');

buttons.each( function() {
    $(this).click(viewdetailClick);
});

let articles = JSON.parse(ALLNEWSJSON);

articles.forEach(function(element) {

    console.log(element);

    try {
        let a = new Article(element.id, element.title, element.description);
        a.insertArticleHtml();
    } catch (e) {
        clearErrors();
        let form = $('#addNewsForm');

        if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
            addError(e.message, form);
        } else {
            addError('Une erreur inconnue est survenue !', form);
            console.error(e);
        }
    }
});

getApiData('https://newsdata.io/api/1/news?apikey=pub_4969206f7cf169ce2b112dcb9054ae6277d8&language=fr&category=technology');
