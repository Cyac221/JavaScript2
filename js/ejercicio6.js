/* 
let salario =parseInt(prompt("Ingrese su salario: "))
let aux_trans = 200000

let resultado = salario > 2800000 ? `No tiene derecho a auxilio de transporte. Salario neto: ${salario}` : `Tiene derecho a auxilio de transporte: ${aux_trans}, Salario: ${salario}, Salario neto: ${salario+aux_trans}`

console.log(resultado)  */

//Ejercicio 2

let antiguedad_empresa =parseInt(prompt("Ingrese el tiempo que lleva en la empresa: "))
let salario =parseInt(prompt("Ingrese su salario: "))

if (antiguedad_empresa <= 5){
    salario = salario*(1+ 0.1)
    console.log(`Sus años de servicio han sido: ${antiguedad_empresa}`)
    console.log(`Su incremento es del 10%, y ahora es de: ${salario}`)

} else if (antiguedad_empresa <= 10){
    salario = salario*(1+0.2)
    console.log(`Sus años de servicio han sido: ${antiguedad_empresa}`)
    console.log(`Su incremento es del 20%, y ahora es de: ${salario}`)

} else if (antiguedad_empresa <= 20){
    salario = salario*(1+0.4)
    console.log(`Sus años de servicio han sido: ${antiguedad_empresa}`)
    console.log(`Su incremento es del 40%, y ahora es de: ${salario}`)

} else if (antiguedad_empresa <= 40){
    salario = salario*(1+0.6)
    console.log(`Sus años de servicio han sido: ${antiguedad_empresa}`)
    console.log(`Su incremento es del 60%, y ahora es de: ${salario}`)

} else if (antiguedad_empresa >41 ){
    salario = salario*(1+1)
    console.log(`Sus años de servicio han sido: ${antiguedad_empresa}`)
    console.log(`Su incremento es del 100%, y ahora es de: ${salario}`)
} 
