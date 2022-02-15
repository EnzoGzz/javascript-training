let addButton = document.querySelector('input[name="addNewsBtn"]');
bindAddButton(addButton);

let detailButtons = document.querySelectorAll('article button');
bindDetailsButton(detailButtons);

json = JSON.parse(ALLNEWSJSON);

json.forEach((row) => {
    let article = new Article(row.id,row.title,row.desc);
    article.show();

    console.log(article);
});
