class Article {

    static #news = document.querySelector('#news');

    #id;
    #title;
    #desc;

    constructor(id, title, desc) {

        self.#assertRequiredField(title);
        self.#assertArticleUnicity(title);

        this.#id = id;
        this.#title = title;
        this.#desc = desc;
    }

    show(){
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        newArticle.id = `article-${countArticles()+1}`
        h3.innerHTML = title;
        h3.classList.add('title');
        newArticle.append(h3);
        self.#news.append(newArticle);
    }

    static #countArticles(){
        return document.querySelectorAll('article').length
    }

    static #assertRequiredField(title) {
        if (title === '')
            throw 'Titre vide';

        if (title.length < 3)
            throw 'Titre trop court';
    }

    static #assertArticleUnicity(title) {
        let h3s = document.querySelectorAll('h3.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === title.toLowerCase().trim()) {
                throw 'Erreur article deja existant';
            }
        }

        return true;
    }

}