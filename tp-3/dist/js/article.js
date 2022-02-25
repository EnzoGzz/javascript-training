class Article {
    static idPrefix = 'article-';
    static #length = $('article').length;

    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;


        this.assertRequiredProperty();
    }

    static count(){
        return Article.#length;
    }

    createArticleHtml() {
        let newArticle = $('<article></article>');
        let h3 = $('<h3></h3>');
        let p = $('<p></p>');
        let button = $('<button></button>');
        let news = $('#news');

        h3.html(this.title);
        p.html(this.description);
        button.html('View detail');
        this.bindButtonViewdetail(button, viewdetailClick);
        h3.addClass('title');
        newArticle.attr('id', Article.idPrefix + this.id );

        newArticle.append(h3);
        newArticle.append(p);
        newArticle.append(button);
        news.append(newArticle);

        Article.#length++;
    }

    insertArticleHtml() {
        this.assertRequiredProperty();
        this.assertUnicity();

        this.createArticleHtml();
        return true;
    }

    bindButtonViewdetail(button, callback) {
        button.click(callback);
    }

    assertUnicity() {
        let h3s = $('.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s.eq(i).html().toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new DuplicateArticleError();
            }
        }

        return true;
    }

    assertRequiredProperty() {
        if (this.title === '' || /^\s*$/.test(this.title))
            throw new RequiredPropertyError();
    }
}