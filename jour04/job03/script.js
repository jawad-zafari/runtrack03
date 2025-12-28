const btnFilter = document.getElementById("filter");
const resultDiv = document.getElementById("results");

btnFilter.addEventListener("click", function() {

    let inputId = document.getElementById("id").value;
    let inputName = document.getElementById("nom").value.toLowerCase();
    let inputType = document.getElementById("type").value;

    fetch("pokemon.json")
        .then(function(response) { return response.json() })
        .then(function(data) {
            
            let foundPokemons = [];

    for (let i = 0; i < data.length; i++) {
                
        let pokemon = data[i];

        let idMatch = true;
       if (inputId !== "" && pokemon.id != inputId) { 
        idMatch = false; 
    }

        let nameMatch = true;
        if (inputName !== "") {
        let pName = pokemon.name.english.toLowerCase();
        if (pName.indexOf(inputName) === -1) { 
             nameMatch = false;
                    }
                }

                let typeMatch = true;
                if (inputType !== "") {
                    if (pokemon.type.includes(inputType) === false) {
                        typeMatch = false;
                    }
                }

                if (idMatch && nameMatch && typeMatch) {
                    foundPokemons.push(pokemon);
                }
            }

            displayResults(foundPokemons);
        })
        .catch(function(error) {
            console.error(error);
        });
});

function displayResults(list) {
    resultDiv.innerHTML = "";

    if (list.length === 0) {
        resultDiv.innerHTML = "<p>Aucun Pokémon trouvé.</p>";
        return;
    }

    for (let i = 0; i < list.length; i++) {
        let p = list[i];

        let div = document.createElement("div");
        
        div.innerHTML = "ID: " + p.id + "<br>" + "Name: " + p.name.english + "<br>" + "Type: " + p.type.join(", ") + "<br><br>";
        
        resultDiv.appendChild(div);
    }
}