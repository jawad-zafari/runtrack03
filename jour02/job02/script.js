function showhide() {
    let article = document.getElementById("monArticle");

    if (article === null) {
        let newArticle = document.createElement("article");
        newArticle.id = "monArticle"; 
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";

        document.body.appendChild(newArticle);
    }
    else {
        article.remove();
    }
}

let button = document.getElementById("button");

button.addEventListener("click", showhide);