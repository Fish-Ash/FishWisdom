const importButton = document.getElementById("importButton");
const exportButton = document.getElementById("exportButton");

function escapeCSV(value){
    value = String(value);

    if(value.includes(",") || value.includes('"') || value.includes("\n")){
        value = '"' + value.replaceAll('"', '""') + '"';
    }

    return value;
}

exportButton.addEventListener("click", function(){
    let csvData = "\uFEFFarticle,author\n";

    articles.forEach(function(article){
        const authorList = article.authors.join(";");

        csvData += escapeCSV(article.title) + "," + escapeCSV(authorList) + "\n";
    });

    const blob = new Blob([csvData], {
        type: "text/csv;charset=utf-8"
    });

    const url = URL.createObjectURL(blob);

    const downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "ArticleNetwork.csv";

    downloadLink.click();

    URL.revokeObjectURL(url);
});

importButton.addEventListener("click", function(){
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".csv";

    fileInput.addEventListener("change", function(){
        const file = fileInput.files[0];

        if(!file){
            return;
        }

        const reader = new FileReader();

        reader.addEventListener("load", function(){
            const csvData = reader.result;
            const rows = parseCSV(csvData);

            if(rows.length === 0){
                return;
            }

            const header = rows[0];

            if(
                header[0].trim().replace("\uFEFF", "") !== "article" ||
                header[1].trim() !== "author"
            ){
                alert("CSV格式不正确");
                return;
            }

            if(articles.length > 0){
                const result = confirm("导入会替换当前数据，确认继续吗？");

                if(!result){
                    return;
                }
            }

            articles.length = 0;

            rows.slice(1).forEach(function(row){
                const title = row[0] ? row[0].trim() : "";
                const authorData = row[1] ? row[1].trim() : "";

                if(title === ""){
                    return;
                }

                const authorList = authorData
                    .split(";")
                    .map(function(author){
                        return author.trim();
                    })
                    .filter(Boolean);

                const article = {
                    title: title,
                    authors: authorList
                };

                articles.push(article);
            });

            saveLocalData();
            location.reload();
        });

        reader.readAsText(file, "UTF-8");
    });

    fileInput.click();
});

function parseCSV(csvData){
    const rows = [];
    let row = [];
    let value = "";
    let insideQuotes = false;

    for(let i = 0; i < csvData.length; i++){
        const character = csvData[i];

        if(character === '"'){
            if(insideQuotes && csvData[i + 1] === '"'){
                value += '"';
                i++;
            }else{
                insideQuotes = !insideQuotes;
            }
        }else if(character === "," && !insideQuotes){
            row.push(value);
            value = "";
        }else if(
            (character === "\n" || character === "\r") &&
            !insideQuotes
        ){
            if(character === "\r" && csvData[i + 1] === "\n"){
                i++;
            }

            row.push(value);

            if(row.some(function(item){
                return item !== "";
            })){
                rows.push(row);
            }

            row = [];
            value = "";
        }else{
            value += character;
        }
    }

    row.push(value);

    if(row.some(function(item){
        return item !== "";
    })){
        rows.push(row);
    }

    return rows;
}