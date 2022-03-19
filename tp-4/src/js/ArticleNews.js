export default {
    data() {
        return {
        }
    },
    props: ['title','description','index'],
    methods : {
        viewDetailArticle(article){
            console.log(article.description);
        },
        deleteArticle(index){
            console.log(index)
            articles.splice(index,1)
        },
    },
    template: `
        <article>
            <h3 class="title">{{ this.title }}</h3>
            <p>{{ this.description }}</p>
            <button @click="viewDetailArticle(this)">View detail</button>
            <button @click="$emit('delete')">Delete</button>
        </article>
    `
}