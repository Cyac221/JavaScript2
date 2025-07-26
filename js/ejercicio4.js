let numero_dia =parseInt(prompt("Ingrese el numero del dia de la semana"))

if(numero_dia>=1 && numero_dia<=7){
    if(numero_dia==1){
        console.log("Lunes")
    }else if(numero_dia==2){
        console.log("Martes")
    }elseif (numero_dia==3){
        console.log("Miercoles")
    }elseif (numero_dia==4){
        console.log("Jueves")
    }elseif (numero_dia==5){
        console.log("Viernes")
    }elseif(numero_dia==6){
        console.log("Sabado")
    }elseif(numero_dia==7){
        console.log("Domingo")
    }
}
else{
    console.log("Debe ser entre 1 y 7. Aguevado")
}