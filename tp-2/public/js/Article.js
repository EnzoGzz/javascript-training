class Article {

    static #length = document.querySelectorAll('article').length;

    #id;
    #title;
    #desc;

    constructor(id, title, desc) {
        try{
            this.#id = id;
            this.#title = title;
            this.#desc = desc;

            this.#assertRequiredField();
            this.#assertArticleUnicity();

            Article.#length++;
        }catch (e){
            throw e;
        }finally {
            clearErrors()
        }
    }

    static count(){
        return this.#length;
    }

    show(){
        let news = document.querySelector('#news');
        let newArticle = document.createElement('article');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let btn = document.createElement('button');

        newArticle.id = `article-${Article.count()}`
        h3.innerHTML = this.#title;
        h3.classList.add('title');
        p.innerHTML = this.#desc;
        btn.innerHTML = 'View details';
        bindDetailsButton([btn]);
        newArticle.append(h3, p, btn);
        news.append(newArticle);
    }

    #assertRequiredField() {
        if (/^\s*$/.test(this.#title))
            throw new TitleEmptyError;


        if (/^\s*$/.test(this.#desc))
            throw new DescEmptyError;

        if (this.#title.length < 3)
            throw new TitleTooShortError;
    }

    #assertArticleUnicity() {
        let h3s = document.querySelectorAll('h3.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.#title.toLowerCase().trim()) {
                throw new ArticleExistsError;
            }
        }

        return true;
    }

}