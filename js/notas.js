//Datos de entrada

let nombre_estudiante = prompt("Estudiante")
let nota_conocimiento = parseFloat(prompt("Conocimiento"))
let nota_desempeno = parseFloat(prompt("Desempeño"))
let nota_prod = parseFloat(prompt("Producto"))

const porcentaje_conocimiento = 0.2
const porcentaje_desempeno = 0.3
const porcentaje_producto = 0.5

//datos proceso
let conocimiento_20 = nota_conocimiento*porcentaje_conocimiento
let desempeno_30 = nota_desempeno*porcentaje_desempeno
let producto_50 = nota_prod*porcentaje_producto

//Def
let definitiva = conocimiento_20 + desempeno_30 + producto_50

//Datos de salida

console.log("+++-----informe académico-----+++")
console.log(`Nombre del estudiante: ${nombre_estudiante}`)
console.log("+++----------------------+++")
console.log("+++-----Resumen Notas-----+++")
console.log(`Nota Conocimiento --->: ${nota_conocimiento} -- ${conocimiento_20.toFixed(2)}`)
console.log(`Nota Desempeño --->: ${nota_desempeno} -- ${desempeno_30.toFixed(2)}`)
console.log(`Nota Producto --->: ${nota_prod} -- ${producto_50.toFixed(2)}`)
console.log("+++----------------------+++")
console.log(`Nota Definitiva --->: ${definitiva.toFixed(2)}`)