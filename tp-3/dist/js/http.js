function getApiData(url){
    $.ajax({
        url: url,
        dataType: 'json',
        success: function(data){
            logMessageWithDate(JSON.stringify(data.results));
            data.results.forEach( (row) => {
                try{
                    let article = new Article(Article.count()+1, row.title, row.content);
                    article.insertArticleHtml();
                }catch (e){
                    clearErrors();
                    let form = $('#addNewsForm');

                    if (e instanceof RequiredPropertyError || e instanceof DuplicateArticleError) {
                        addError(e.message, form);
                    } else {
                        addError('Une erreur inconnue est survenue !', form);
                        console.error(e);
                    }
                }
            })
        },
        error: function (){
            throw new Error("Ajax request error.");
        }
    })
}