let articlesOnglet = $('#articles');
let addFormOnglet = $('#addNewsForm');

$('#ongletsLabels > button').eq(0).click(function () {
    articlesOnglet.hide();
    addFormOnglet.show();
});

$('#ongletsLabels > button').eq(1).click(function () {
    addFormOnglet.hide();
    articlesOnglet.show();
});

addFormOnglet.hide();
