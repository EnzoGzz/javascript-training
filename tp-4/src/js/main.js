import articleNews from "./ArticleNews.js";

Vue.createApp({
    data() {
        return {
            title: 'TP4 vueJS',
            articles: this.parseJson(ALLNEWSJSON),
            errors: [],
            success: false,
            successStyle: {
                color: '#00FF00'
            },
            errorStyle: {
                color: '#FF0000'
            },
            titleToAdd: '',
            descToAdd: '',
        }
    },
    computed: {
        getNbArticles(){
            return this.articles.length;
        }
    },
    methods: {
        parseJson(data){
            return JSON.parse(data);
        },
        deleteArticle(index){
            this.articles.splice(index,1)
        },
        addArticle(e){
            this.errors = [];
            this.success = false;

            try {
                this.articles.push(new Article(this.getNbArticles,this.titleToAdd, this.descToAdd));
                this.success = true;
            }catch (e){
                this.errors.push(e.message);
            }

            // if (this.checkForm()) this.articles.push({title: this.titleToAdd, description: this.descToAdd});
            e.preventDefault();
        },
        checkForm(){
            this.errors = [];
            this.success = false;
            if(this.titleToAdd && this.descToAdd) {
                this.success = true;
                return true;
            }
            if (!this.titleToAdd) this.errors.push('Titre required');
            if (!this.descToAdd) this.errors.push('Description required');
            return false;
        }
    },
    components: {
        'ArticleNews' : articleNews
    }
}).mount('#app')