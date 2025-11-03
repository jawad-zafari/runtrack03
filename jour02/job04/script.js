let keylogger = document.getElementById("keylogger");

document.addEventListener("keydown", function(event) {
    let lettre = event.key;

    if (lettre.length === 1 && lettre.match(/[a-z]/i)) {
        
        let inTextarea = (document.activeElement === keylogger);

        if (inTextarea) {
            event.preventDefault();
            
            keylogger.value += lettre + lettre;
        }
        else {
            keylogger.value += lettre;
        }
    }
});