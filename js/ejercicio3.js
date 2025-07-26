//Ejercicio 2

//User ID

const user = "Paco"
const password = "1234"

console.log("Bienvenido al sistema de calificaciones")
let user_in = prompt("Ingrese su usuario: ")
let pass_in = prompt("Ingrese su Contraseña: ")

if (user_in == user && pass_in == password){
    console.log(`Contraseña correcta. Bienvenido ${user}` )
}
else{
    console.log("Contraseña y/o usuario incorrecto. Impostor!")
}

