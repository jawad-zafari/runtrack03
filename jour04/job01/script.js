let t_Button = document.getElementById("button");

t_Button.addEventListener("click", function() {
    fetch("expression.txt")
        .then((response) => response.text())
        
        .then((data) => {
            let new_h1 = document.createElement("h1");
            new_h1.textContent = data;
            document.body.appendChild(new_h1);
        })
        
});