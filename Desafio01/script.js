// let n = 150.00
// console.log(n);
// let x = 3.14159
// console.log(x);
// let y = 8
// console.log(8);

// let resultado = x * Math.pow( n ,2)
// console.log(resultado.toFixed(4));

var resultado = "";
for (i = 1; i <= 7; i++) {
    for (j = 1; j <= 39; j++) {
        if (i == 1 || i == 7)
            resultado += "-";
        else if (j == 1 || j == 39)
            resultado += "|";
        else 
            resultado += " ";
    }
    resultado += "\n";
}
console.log(resultado);