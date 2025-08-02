//Leer una cantidad N de numeros +, - y 0
//Contar y sumar los +, - y 0
//Imprimir contadores y acumuladores

let cont_positiv = 0; let conr_negativos = 0; let contador_ceros = 0;
let acum_positiv=0; let acum_negativos=0; let acum_ceros = 0;

let n = parseInt(prompt("Cantidad de numeros a contar: "))

for (let i=0; i< n; i++){
    let nro = parseInt(prompt("Ingrese el numero"))
    if (nro > 0){
        cont_positiv++
        acum_positiv += nro
    } else if (nro <0){
        conr_negativos++
        acum_negativos+=nro
    } else {
        contador_ceros++
    }
}

console.log(`______Informe numeros______`)
console.log(`Cantidad de  positivos: ${cont_positiv}`)
console.log(`Cantidad de negativos: ${conr_negativos}`)

console.log(`______Suma numeros______`)
console.log(`Suma de los positivos: ${acum_positiv}`)
console.log(`Suma de los negativos: ${acum_negativos}`)
console.log(`______Contador de 0's ______`)

console.log(`Contador de cer0s: ${contador_ceros}`)
