//Datos de entrada

//Aux transporte

/*
let nombre_empleado = prompt("Empleado: ")
let salario_base = parseFloat(prompt("Salario: "))

const aux_transporte = 200000


//datos proceso

if (salario_base >=2847000){
    derecho = "No tiene derecho a auxilio de transporte"
    salario = salario_base
}
else{
    derecho = "Si tiene"
    salario  = salario_base + aux_transporte
}

//Datos de salida

console.log("+++-----Colilla de pago-----+++")
console.log(`Nombre del empleado: ${nombre_empleado}`)
console.log("+++----------------------+++")
console.log("+++-----Salario-----+++")
console.log(`Base salario: ${salario_base}`)
console.log(`Tiene derecho a Aux transporte? --->: ${derecho}`)
console.log(`Neto --->: ${salario} `)
*/

//Ejercicio 2

//User ID

const user = "Carlosyepes021"
const password = "123456789"

console.log("Bienvenido al sistema de calificaciones")
user_in = prompt("Ingrese su usuario: ")
pass_in = prompt("Ingrese su Contraseña: ")

if (user_in == user && pass_in == password){
    console.log("Contraseña correcta. Bienvenido")
}
else{
    console.log("Contraseña y/o usuario incorrecto. Impostor!")
}
