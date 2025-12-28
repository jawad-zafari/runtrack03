const btnUpdate = document.getElementById("update-btn");
const tbody = document.getElementById("users-tb");

btnUpdate.addEventListener("click",function(){
    fetch("users.php")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
tbody.innerHTML = "";

for(let i = 0; i <data.length; i++){
    let user = data[i];

    let tr = document.createElement("tr");

             tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.lastname}</td>
            <td>${user.email}</td>`;

     tbody.appendChild(tr);

}
    })
    .catch(function(error){
        console.error("errroooor : ",error);
        alert("Erreur !, veuillez vérifier la console")
    });
})