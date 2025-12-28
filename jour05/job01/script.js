document.addEventListener("DOMContentLoaded", function(){

    const inputName = document.getElementById("name");
    const inputLastname = document.getElementById("lastname");
    const inputAddress = document.getElementById("address");
    const inputCodeP = document.getElementById("code-p");
    const inputEmail = document.getElementById("email");
    const inputPass= document.getElementById("pass");
    const inputConfirmPass = document.getElementById("confirm-pass");
    const loginEmail = document.getElementById("login-email");
    const loginPass = document.getElementById("login-pass");

    // ------------------------------------------------------------------

    const errName = document.getElementById("err-name");
    const errLastname = document.getElementById("err-lastname");
    const errAddress = document.getElementById("err-address");
    const errCodeP = document.getElementById("err-code-p");
    const errEmail = document.getElementById("err-email");
    const errPass = document.getElementById("err-pass");
    const errConfirm = document.getElementById("err-confirm-pass");
    const errLoginEmail = document.getElementById("err-login-email");
    const errLoginPass = document.getElementById("err-login-pass");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;


    function errors(input, message, errSpan){
        if(input.value.trim() === ""){
            errSpan.textContent = message;
            // errSpan.style.color = "red";
        }else if(input.value.length < 3){
            errSpan.textContent = "La taille est trop petite";
        }else{
            errSpan.textContent= "";
        }
    }

    if(inputName){
        inputName.addEventListener("input",
            function(){
                errors(inputName, "Le prénom est obligatoire", errName);
            });
    }

    if(inputLastname){
        inputLastname.addEventListener("input", function(){
            errors(inputLastname,"Le nom de famille est obligatoire", errLastname);
        }
        );
    }
    if(inputAddress){
        inputAddress.addEventListener("input", function(){
            errors(inputAddress,"L'adresse est requise", errAddress);
        });
    }
    if(inputCodeP){
        inputCodeP.addEventListener("input", function(){
            if(isNaN(inputCodeP.value)){
                errCodeP.textContent = "Il vous suffit de saisir le numéro !";
            }else if(inputCodeP.value.length < 5){
                errCodeP.textContent ="Le code postal doit comporter au moins 5 chiffres";
            }else{
                errCodeP.textContent  = "";
            }
        });
    }

    function validEmail(input, errorSpan){
        input.addEventListener("input",function(){
            if(input.value.trim() === ""){
                errorSpan.textContent = "E-mail est requis";
            }else if(emailRegex.test(input.value) === false){
                errorSpan.textContent = " Le format de l'e-mail est incorrect";
            }else{
                errorSpan.textContent = "";
            }
        });
    }

    if(inputEmail){
        validEmail(inputEmail,errEmail);
    }
    if(loginEmail){
        validEmail(loginEmail,errLoginEmail);
    }

    if(inputPass){
        inputPass.addEventListener("input", function(){
            if(passRegex.test(inputPass.value) === false){
                errPass.textContent =  "Le mot de passe doit comporter 8 chiffres, comprenant des lettres, des chiffres et des symboles spéciaux ";
            }else{
                errPass.textContent = "";
            }
        });
    }

    if(inputConfirmPass){
        inputConfirmPass.addEventListener("input", function(){
            if(inputConfirmPass.value !== inputPass.value){
                errConfirm.textContent =  "Le mot de passe ne correspond pas";
            }else{
                errConfirm.textContent = "";
            }
        });
    }

    if(loginPass){
        loginPass.addEventListener("input", function(){
            if(loginPass.value.trim() === ""){
                errLoginPass.textContent = "Mot de passe est requis !";
            }else{
                errLoginPass.textContent= "";
            }
        });
    }

});