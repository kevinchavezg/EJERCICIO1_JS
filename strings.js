let cadena = prompt("Ingrese una cadena de texto: ");
let cadenaSeparada = cadena.split(" ");



for (i in cadenaSeparada){
    var longitudMax = 0
    var longitud = cadenaSeparada[i].length;
    if (cadenaSeparada[i].length > longitud) {
        longitudMax = cadenaSeparada[i];
    }
}
console.log("*".repeat(longitudMax+4));
for (i in cadenaSeparada){
    
    console.log("*"+ cadenaSeparada[i] +"*");
    
}
console.log("*".repeat(longitudMax+4));