function saveLocalData(){
    localStorage.setItem("articles", JSON.stringify(articles));
    console.log("LocalStorage.js--saveLocalData");
};

function loadLocalData(){
    const localArticles = JSON.parse(localStorage.getItem("articles"));

    if(localArticles !== null){
        localArticles.forEach(function(article){
            articles.push(article);
        });
    }

    console.log("LocalStorage.js--loadLocalData");
};