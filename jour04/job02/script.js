let json_Data = `{
    "name": "La Plateforme",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

function json_Key(j_String, key) {
    
    let object = JSON.parse(j_String);

    return object[key];
}

let res = json_Key(json_Data, "city");

console.log(res);
