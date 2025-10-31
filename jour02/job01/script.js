function citation() {
    const article = document.getElementById("citation");
    
    const texte = article.textContent;
    
    console.log(texte);
}

const bouton = document.getElementById("button");

bouton.addEventListener("click", citation);