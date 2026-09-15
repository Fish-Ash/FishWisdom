const articles = [];

const inputArticleTitle = document.getElementById("inputArticleTitle");
const inputArticleAuthors = document.getElementById("inputArticleAuthors");

function saveArticleData(){
    const articleTitle = inputArticleTitle.value.trim();
    const articleAuthors = inputArticleAuthors.value.split(",").map(function(author){return author.trim()}).filter(Boolean);
    const article = {
        title: articleTitle,
        authors: articleAuthors
    };

    articles.push(article);

    console.log("saveArticleData()");

    return article;
}