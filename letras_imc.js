var imc= document.getElementById("imc").value;
var imcbajo= "18.5";
var imcnormal= "24.9";
var imcsobrepeso= "29.9";
var imcobesidad1= "34.9";
var imcobesidad2= "39.9";
var imcobesidad3= "49.9";
var imcobesidad4= "50";

if(imc <= imcbajo){
    letras.value="Bajo Peso";
}

if(imc >= imcbajo && imc <=imcnormal){
    letras.value="Peso Normal";
}

if(imc >= imcnormal && imc <=imcsobrepeso){
    letras.value="Sobrepeso";
}

if(imc >= imcsobrepeso && imc <=imcobesidad1){
    letras.value="Obesidad clase I";
}

if(imc >= imcobesidad1 && imc <=imcobesidad2){
    letras.value="Obesidad clase II";
}

if(imc >= imcobesidad2 && imc <=imcobesidad3){
    letras.value="Obesidad clase III";
}

if(imc >= imcobesidad4){
    letras.value="Obesidad clase IV";
}



