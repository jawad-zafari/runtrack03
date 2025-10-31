function tri(numbers, order) {
    let sorted = [];
    for (let i = 0; i < numbers.length; i++) {
        sorted[i] = numbers[i];
    }

    let needToRepeat = true;

    while (needToRepeat) {
        needToRepeat = false;

        for (let i = 0; i < sorted.length - 1; i++) {
            let current = sorted[i];
            let next = sorted[i + 1];

            if (order === "asc" && current > next) {
                sorted[i] = next;
                sorted[i + 1] = current;
                needToRepeat = true;
            }

            if (order === "desc" && current < next) {
                sorted[i] = next;
                sorted[i + 1] = current;
                needToRepeat = true;
            }
        }
    }

    return sorted;
}

let list1 = [5, 2, 9, 1, 5, 6];
let list2 = [10, 3, 8, 1];

console.log(tri(list1, "asc"));   
console.log(tri(list1, "desc"));  
console.log(tri(list2, "asc"));  