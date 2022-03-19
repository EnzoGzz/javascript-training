class Article {

    id;
    title;
    description;

    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;

        this.assertRequiredProperty();
        this.assertUnicity();
    }

    assertRequiredProperty() {
        if (this.title === '')
            throw new RequiredPropertyError();
    }

    assertUnicity() {
        let h3s = document.querySelectorAll('.title');

        for (let i = 0; i < h3s.length; i++) {
            if (h3s[i].innerHTML.toLowerCase().trim() === this.title.toLowerCase().trim()) {
                throw new DuplicateArticleError();
            }
        }

        return true;
    }
}