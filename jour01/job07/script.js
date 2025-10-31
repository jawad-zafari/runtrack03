function jourtravaille(date) {
    let Jour = date.getDate();
    let Mois = date.getMonth() + 1;
    let Annee = date.getFullYear();

    let joursFeries2020 = [
        "2020-01-01", // Jour de l'an
        "2020-04-13", // Lundi de Pâques
        "2020-05-01", // Fête du travail
        "2020-05-08", // Victoire 1945
        "2020-05-21", // Ascension
        "2020-06-01", // Lundi de Pentecôte
        "2020-07-14", // Fête nationale
        "2020-08-15", // Assomption
        "2020-11-01", // Toussaint
        "2020-11-11", // Armistice
        "2020-12-25"  // Noël
    ];

    let inputStr = Annee + "-" + (Mois < 10 ? "0" + Mois : Mois) + "-" + 
    (Jour < 10 ? "0" + Jour : Jour);

    for (let i = 0; i < joursFeries2020.length; i++) {
        if (inputStr === joursFeries2020[i]) {
            console.log("Le " + Jour + " " + Mois + " " + Annee + " est un jour férié");
            return;
        }
    }

    let JourSemaine = date.getDay();
    if (JourSemaine === 0 || JourSemaine === 6) {
        console.log("Non, " + Jour + " " + Mois + " " + Annee + " est un week-end");
    } else {
        console.log("Oui, " + Jour + " " + Mois + " " + Annee + " est un jour travaillé");
    }
}

let test1 = new Date(2020, 0, 1);   
let test2 = new Date(2022, 5, 9);    
let test3 = new Date(2022, 5, 25);  

jourtravaille(test1);
jourtravaille(test2);
jourtravaille(test3);