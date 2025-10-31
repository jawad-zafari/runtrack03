function tri(numbers, order) {
    // Copie du tableau pour ne pas modifier l'original
    let sorted = [];
    for (let i = 0; i < numbers.length; i++) {
        sorted[i] = numbers[i];
    }

    // Variable pour savoir s'il faut recommencer le parcours
    let needToRepeat = true;

    // Tant qu'il y a eu un échange, on recommence
    while (needToRepeat) {
        needToRepeat = false;

        // Parcours du tableau, comparaison de chaque paire
        for (let i = 0; i < sorted.length - 1; i++) {
            let current = sorted[i];
            let next = sorted[i + 1];

            // Tri ascendant
            if (order === "asc" && current > next) {
                sorted[i] = next;
                sorted[i + 1] = current;
                needToRepeat = true;
            }

            // Tri descendant
            if (order === "desc" && current < next) {
                sorted[i] = next;
                sorted[i + 1] = current;
                needToRepeat = true;
            }
        }
    }

    // Retourne le tableau trié
    return sorted;
}

let list1 = [5, 2, 9, 1, 5, 6];
let list2 = [10, 3, 8, 1];

console.log(tri(list1, "asc"));   
console.log(tri(list1, "desc"));  
console.log(tri(list2, "asc"));  