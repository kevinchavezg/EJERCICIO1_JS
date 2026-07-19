let cadena = prompt("Ingrese una cadena de texto: ");
function marco(cadena){
    let cadenaSeparada = cadena.split(" ");

    let longitudMax = 0
    for (i in cadenaSeparada){
        if (cadenaSeparada[i].length > longitudMax) {
            longitudMax = cadenaSeparada[i].length;
        }
    }

    console.log("*".repeat(longitudMax + 4));
    for (i in cadenaSeparada){
        espacios = longitudMax - cadenaSeparada[i].length
        console.log("*" + cadenaSeparada[i] + " ".repeat(espacios + 2) + "*");
    }
    console.log("*".repeat(longitudMax + 4));
}

marco(cadena);