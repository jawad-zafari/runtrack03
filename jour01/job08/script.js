function estPremier(nombre) {
    if (nombre <= 1) {return false;}
    if (nombre === 2) { return true;}
    if (nombre % 2 === 0) {return false;}
    for (let i = 3; i * i <= nombre; i = i + 2) {
        if (nombre % i === 0) {return false;}
    }
    return true;
}

function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) { return a + b;} 
    else {return false;}
}

console.log(sommenombrespremiers(3, 5));   
console.log(sommenombrespremiers(4, 7));  
console.log(sommenombrespremiers(11, 13));
console.log(sommenombrespremiers(2, 3));   