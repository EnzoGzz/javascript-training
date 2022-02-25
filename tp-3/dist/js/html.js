function bindButton(button) {
    button.click(
        function(event) {
            event.preventDefault();
            let title = $('input[name="titleToAdd"]');
            let description = $('textarea[name="descriptionToAdd"]');
            try {
                clearErrors();
                let article = new Article(Article.count()+1, title.val(), description.val());
                if (article.insertArticleHtml()) {
                    title.val('');
                    description.val('');
                }
            } catch (e) {
                let form = $('#addNewsForm');

                if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                    addError(e.message, form);
                } else {
                    addError('Une erreur inconnue est survenue !', form);
                    console.error(e);
                }
            }
            return false;
    }
    );
}

function clearErrors() {
    $('.error').remove();
}

function addError(message, parent) {
    let error = $('<p></p>');
    error.html(message);
    error.css('color',ROUGE);
    error.addClass('error');

    parent.prepend(error);
}

function viewdetailClick() {
    let p = $(this).closest('article').find('p');
    logMessageWithDate( p.html() );
}