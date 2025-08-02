
let contador_

let estudiante = prompt("Nombre del estudiante: ")

let materia = parseInt(prompt("Ingrese: \n 1. Python \n 2. SpringBoot \n 3. Bases de datos"))

switch (materia){
    case 1:
        console.log(`Hola ${estudiante}! Usted ingresó a Python`)
        break;

    case 2:
        console.log(`Hola ${estudiante}! Usted ingresó a SpringBoot`)
        break;
    
    case 3:
        console.log(`Hola ${estudiante}! Usted ingresó a Bases de datos`)
        break;
}

