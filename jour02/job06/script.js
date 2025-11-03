let code = "";
const konami = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightBA";

document.addEventListener("keydown", function(e) {
    code += e.key;
    
    if (code === konami) {
        document.body.style.backgroundColor = "#044e98ff";
        document.body.style.color = "white";
        document.body.style.textAlign = "center";
        document.body.style.paddingTop = "100px";
        document.body.style.transition = "all 0.5s";

        document.body.innerHTML = "";

        let title = document.createElement("h1");
        title.textContent = "La Plateforme_";
        title.style.color = "#FF6B35";
        title.style.fontSize = "3em";
        title.style.margin = "0";
        document.body.appendChild(title);

        let text = document.createElement("p");
        text.textContent = "École du numérique à Marseille";
        text.style.fontSize = "1.5em";
        text.style.marginTop = "20px";
        document.body.appendChild(text);

        code = ""; 
    }
});