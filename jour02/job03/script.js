function addone() {
    let compteur = document.getElementById("compteur");
    let nombre = parseInt(compteur.textContent);
    nombre = nombre + 1;
    compteur.textContent = nombre;
}

let button = document.getElementById("button");
button.addEventListener("click", addone);