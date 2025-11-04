document.addEventListener("DOMContentLoaded", function() {

    const button = document.getElementById("button");
    const resultDiv = document.getElementById("result");

    button.addEventListener("click", function() {

        fetch("expression.txt")
            .then(response => response.text())  
            .then(text => {
                const paragraph = document.createElement("p");
                paragraph.textContent = text;

                resultDiv.innerHTML = ""; 
                resultDiv.appendChild(paragraph);
            })
            .catch(error => {
                resultDiv.innerHTML = "<p style='color:red;'>Erreur : Fichier introuvable !</p>";
                console.error(error);
            });

    });
});