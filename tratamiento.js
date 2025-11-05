if (document.getElementById("condicional1").value=="No Existe") { 
    nutricion1.style.display = "none";
    nutricion2.style.display = "none";
    nutricion3.style.display = "none";
    nutricion4.style.display = "none"; }
if (document.getElementById("condicional2").value=="No Existe") {
    higiene1.style.display = "none";
    higiene2.style.display = "none";
    div11.style.display = "none";
    div12.style.display = "none"; 
    div13.style.display = "none"; 
    div14.style.display = "none"; 
    div15.style.display = "none"; 
    div16.style.display = "none"; 
    div17.style.display = "none"; 
    div18.style.display = "none"; 
    div19.style.display = "none"; 
    divp1.style.display = "none"; 
    divfp1.style.display = "none"; 
    divfi1.style.display = "none"; 

    div21.style.display = "none"; 
    div22.style.display = "none"; 
    div23.style.display = "none"; 
    div24.style.display = "none"; 
    div25.style.display = "none"; 
    div26.style.display = "none"; 
    div27.style.display = "none"; 
    div28.style.display = "none"; 
    div29.style.display = "none"; 
    divp2.style.display = "none"; 
    divfp2.style.display = "none"; 
    divfi2.style.display = "none"; }

var imc = document.getElementById("imc").value;
var edad = document.getElementById("edad").value;
var meses = document.getElementById("meses").value;
if(document.getElementById("genero").value=="Femenino") {
    if(edad == 5 && meses >= 0 && meses < 6){
        if(imc <= 11.8){ imcvalor.value="Desnutrición" }
        else if(imc >= 11.9 && imc <= 12.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.7 && imc <= 13.8){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 13.9 && imc <= 16.8){ imcvalor.value="Normal" }
        else if(imc >= 16.9 && imc <= 18.8){ imcvalor.value="Sobrepeso" }
        else if(imc >= 18.9){ imcvalor.value="Obesidad" } }
    
    if(edad == 5 && meses >= 6 && meses <= 11){
        if(imc <= 11.7){ imcvalor.value="Desnutrición" }
        else if(imc >= 11.8 && imc <= 12.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.7 && imc <= 13.8){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 13.9 && imc <= 16.8){ imcvalor.value="Normal" }
        else if(imc >= 16.9 && imc <= 18.9){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.0){ imcvalor.value="Obesidad" } }

    if(edad == 6 && meses >= 0 && meses < 6){
        if(imc <= 11.7){ imcvalor.value="Desnutrición" }
        else if(imc >= 11.8 && imc <= 12.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.7 && imc <= 13.8){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 13.9 && imc <= 16.9){ imcvalor.value="Normal" }
        else if(imc >= 17.0 && imc <= 19.1){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.2){ imcvalor.value="Obesidad" } }

    if(edad == 6 && meses >= 6 && meses <= 11){
        if(imc <= 11.7){ imcvalor.value="Desnutrición" }
        else if(imc >= 11.8 && imc <= 12.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.7 && imc <= 13.8){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 13.9 && imc <= 17.0){ imcvalor.value="Normal" }
        else if(imc >= 17.1 && imc <= 19.4){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.5){ imcvalor.value="Obesidad" } }

    if(edad == 7 && meses >= 0 && meses < 6){
        if(imc <= 11.8){ imcvalor.value="Desnutrición" }
        else if(imc >= 11.9 && imc <= 12.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.7 && imc <= 13.8){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 13.9 && imc <= 17.2){ imcvalor.value="Normal" }
        else if(imc >= 17.3 && imc <= 19.7){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.8){ imcvalor.value="Obesidad" } }

    if(edad == 7 && meses >= 6 && meses <= 11){
        if(imc <= 11.8){ imcvalor.value="Desnutrición" }
        else if(imc >= 11.9 && imc <= 12.7){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.8 && imc <= 13.9){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.0 && imc <= 17.4){ imcvalor.value="Normal" }
        else if(imc >= 17.5 && imc <= 20.0){ imcvalor.value="Sobrepeso" }
        else if(imc >= 20.1){ imcvalor.value="Obesidad" } }

    if(edad == 8 && meses >= 0 && meses < 6){
        if(imc <= 11.9){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.0 && imc <= 12.8){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 12.9 && imc <= 14.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.1 && imc <= 17.6){ imcvalor.value="Normal" }
        else if(imc >= 17.7 && imc <= 20.5){ imcvalor.value="Sobrepeso" }
        else if(imc >= 20.6){ imcvalor.value="Obesidad" } }

    if(edad == 8 && meses >= 6 && meses <= 11){
        if(imc <= 12.0){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.1 && imc <= 12.9){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.0 && imc <= 14.2){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.3 && imc <= 17.9){ imcvalor.value="Normal" }
        else if(imc >= 18.0 && imc <= 20.9){ imcvalor.value="Sobrepeso" }
        else if(imc >= 21.0){ imcvalor.value="Obesidad" } }

    if(edad == 9 && meses >= 0 && meses < 6){
        if(imc <= 12.1){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.2 && imc <= 13.0){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.1 && imc <= 14.3){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.4 && imc <= 18.2){ imcvalor.value="Normal" }
        else if(imc >= 18.3 && imc <= 21.4){ imcvalor.value="Sobrepeso" }
        else if(imc >= 21.5){ imcvalor.value="Obesidad" } }

    if(edad == 9 && meses >= 6 && meses <= 11){
        if(imc <= 12.2){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.3 && imc <= 13.2){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.3 && imc <= 14.5){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.6 && imc <= 18.6){ imcvalor.value="Normal" }
        else if(imc >= 18.7 && imc <= 21.9){ imcvalor.value="Sobrepeso" }
        else if(imc >= 22.0){ imcvalor.value="Obesidad" } }

    if(edad == 10 && meses >= 0 && meses < 6){
        if(imc <= 12.4){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.5 && imc <= 13.4){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.5 && imc <= 14.7){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.8 && imc <= 18.9){ imcvalor.value="Normal" }
        else if(imc >= 19.0 && imc <= 22.5){ imcvalor.value="Sobrepeso" }
        else if(imc >= 22.6){ imcvalor.value="Obesidad" } }

    if(edad == 10 && meses >= 6 && meses <= 11){
        if(imc <= 12.5){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.6 && imc <= 13.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.7 && imc <= 15.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.1 && imc <= 19.3){ imcvalor.value="Normal" }
        else if(imc >= 19.4 && imc <= 23.0){ imcvalor.value="Sobrepeso" }
        else if(imc >= 23.1){ imcvalor.value="Obesidad" } } 

    if(edad == 11 && meses >= 0 && meses < 6){
        if(imc <= 12.7){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.8 && imc <= 13.8){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.9 && imc <= 15.2){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.3 && imc <= 19.8){ imcvalor.value="Normal" }
        else if(imc >= 19.9 && imc <= 23.6){ imcvalor.value="Sobrepeso" }
        else if(imc >= 23.7){ imcvalor.value="Obesidad" } } 

    if(edad == 11 && meses >= 6 && meses <= 11){
        if(imc <= 12.9){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.0 && imc <= 14.0){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.1 && imc <= 15.5){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.6 && imc <= 20.2){ imcvalor.value="Normal" }
        else if(imc >= 20.3 && imc <= 24.2){ imcvalor.value="Sobrepeso" }
        else if(imc >= 24.3){ imcvalor.value="Obesidad" } } 

    if(edad == 12 && meses >= 0 && meses < 6){
        if(imc <= 13.2){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.3 && imc <= 14.3){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.4 && imc <= 15.9){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 16.0 && imc <= 20.7){ imcvalor.value="Normal" }
        else if(imc >= 20.8 && imc <= 24.9){ imcvalor.value="Sobrepeso" }
        else if(imc >= 25.0){ imcvalor.value="Obesidad" } } 

    if(edad == 12 && meses >= 6 && meses <= 11){
        if(imc <= 13.4){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.5 && imc <= 14.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.7 && imc <= 16.2){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 16.3 && imc <= 21.2){ imcvalor.value="Normal" }
        else if(imc >= 21.3 && imc <= 25.5){ imcvalor.value="Sobrepeso" }
        else if(imc >= 25.6){ imcvalor.value="Obesidad" } } 

    if(edad == 13 && meses >= 0 && meses < 6){
        if(imc <= 13.6){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.7 && imc <= 14.8){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.9 && imc <= 16.5){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 16.6 && imc <= 21.7){ imcvalor.value="Normal" }
        else if(imc >= 21.8 && imc <= 26.1){ imcvalor.value="Sobrepeso" }
        else if(imc >= 26.2){ imcvalor.value="Obesidad" } } 
} 

else if(document.getElementById("genero").value=="Masculino") {
    if(edad == 5 && meses >= 0 && meses < 6){
        if(imc <= 12.1){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.2 && imc <= 12.9){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.0 && imc <= 14.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.1 && imc <= 16.5){ imcvalor.value="Normal" }
        else if(imc >= 16.6 && imc <= 18.2){ imcvalor.value="Sobrepeso" }
        else if(imc >= 18.3){ imcvalor.value="Obesidad" } }
    
    if(edad == 5 && meses >= 6 && meses <= 11){
        if(imc <= 12.1){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.2 && imc <= 12.9){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.0 && imc <= 14.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.1 && imc <= 16.6){ imcvalor.value="Normal" }
        else if(imc >= 16.7 && imc <= 18.3){ imcvalor.value="Sobrepeso" }
        else if(imc >= 18.4){ imcvalor.value="Obesidad" } }

    if(edad == 6 && meses >= 0 && meses < 6){
        if(imc <= 12.1){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.2 && imc <= 12.9){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.0 && imc <= 14.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.1 && imc <= 16.7){ imcvalor.value="Normal" }
        else if(imc >= 16.8 && imc <= 18.4){ imcvalor.value="Sobrepeso" }
        else if(imc >= 18.5){ imcvalor.value="Obesidad" } }

    if(edad == 6 && meses >= 6 && meses <= 11){
        if(imc <= 12.2){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.3 && imc <= 13.0){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.1 && imc <= 14.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.1 && imc <= 16.8){ imcvalor.value="Normal" }
        else if(imc >= 16.9 && imc <= 18.6){ imcvalor.value="Sobrepeso" }
        else if(imc >= 18.7){ imcvalor.value="Obesidad" } }

    if(edad == 7 && meses >= 0 && meses < 6){
        if(imc <= 12.3){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.4 && imc <= 13.0){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.1 && imc <= 14.1){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.2 && imc <= 16.9){ imcvalor.value="Normal" }
        else if(imc >= 17.0 && imc <= 18.9){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.0){ imcvalor.value="Obesidad" } }

    if(edad == 7 && meses >= 6 && meses <= 11){
        if(imc <= 12.3){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.4 && imc <= 13.1){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.2 && imc <= 14.2){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.3 && imc <= 17.1){ imcvalor.value="Normal" }
        else if(imc >= 17.2 && imc <= 19.2){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.3){ imcvalor.value="Obesidad" } }

    if(edad == 8 && meses >= 0 && meses < 6){
        if(imc <= 12.4){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.5 && imc <= 13.2){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.3 && imc <= 14.3){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.4 && imc <= 17.3){ imcvalor.value="Normal" }
        else if(imc >= 17.4 && imc <= 19.6){ imcvalor.value="Sobrepeso" }
        else if(imc >= 19.7){ imcvalor.value="Obesidad" } }

    if(edad == 8 && meses >= 6 && meses <= 11){
        if(imc <= 12.5){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.6 && imc <= 13.3){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.4 && imc <= 14.4){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.5 && imc <= 17.6){ imcvalor.value="Normal" }
        else if(imc >= 17.7 && imc <= 20.0){ imcvalor.value="Sobrepeso" }
        else if(imc >= 20.1){ imcvalor.value="Obesidad" } }

    if(edad == 9 && meses >= 0 && meses < 6){
        if(imc <= 12.6){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.7 && imc <= 13.4){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.5 && imc <= 14.5){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.6 && imc <= 17.8){ imcvalor.value="Normal" }
        else if(imc >= 17.9 && imc <= 20.4){ imcvalor.value="Sobrepeso" }
        else if(imc >= 20.5){ imcvalor.value="Obesidad" } }

    if(edad == 9 && meses >= 6 && meses <= 11){
        if(imc <= 12.7){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.8 && imc <= 13.5){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.6 && imc <= 14.7){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.8 && imc <= 19.1){ imcvalor.value="Normal" }
        else if(imc >= 19.2 && imc <= 20.8){ imcvalor.value="Sobrepeso" }
        else if(imc >= 20.9){ imcvalor.value="Obesidad" } }

    if(edad == 10 && meses >= 0 && meses < 6){
        if(imc <= 12.8){ imcvalor.value="Desnutrición" }
        else if(imc >= 12.9 && imc <= 13.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.7 && imc <= 14.8){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 14.9 && imc <= 18.4){ imcvalor.value="Normal" }
        else if(imc >= 18.5 && imc <= 21.3){ imcvalor.value="Sobrepeso" }
        else if(imc >= 21.4){ imcvalor.value="Obesidad" } }

    if(edad == 10 && meses >= 6 && meses <= 11){
        if(imc <= 12.9){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.0 && imc <= 13.8){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 13.9 && imc <= 15.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.1 && imc <= 18.7){ imcvalor.value="Normal" }
        else if(imc >= 18.8 && imc <= 21.8){ imcvalor.value="Sobrepeso" }
        else if(imc >= 21.9){ imcvalor.value="Obesidad" } } 

    if(edad == 11 && meses >= 0 && meses < 6){
        if(imc <= 13.1){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.2 && imc <= 14.0){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.1 && imc <= 15.2){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.3 && imc <= 19.1){ imcvalor.value="Normal" }
        else if(imc >= 19.2 && imc <= 22.4){ imcvalor.value="Sobrepeso" }
        else if(imc >= 22.5){ imcvalor.value="Obesidad" } } 

    if(edad == 11 && meses >= 6 && meses <= 11){
        if(imc <= 13.2){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.3 && imc <= 14.1){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.2 && imc <= 15.4){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.5 && imc <= 19.4){ imcvalor.value="Normal" }
        else if(imc >= 19.5 && imc <= 22.9){ imcvalor.value="Sobrepeso" }
        else if(imc >= 23.0){ imcvalor.value="Obesidad" } } 

    if(edad == 12 && meses >= 0 && meses < 6){
        if(imc <= 13.4){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.5 && imc <= 14.4){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.5 && imc <= 15.7){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 15.8 && imc <= 19.8){ imcvalor.value="Normal" }
        else if(imc >= 19.9 && imc <= 23.5){ imcvalor.value="Sobrepeso" }
        else if(imc >= 23.6){ imcvalor.value="Obesidad" } } 

    if(edad == 12 && meses >= 6 && meses <= 11){
        if(imc <= 13.6){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.7 && imc <= 14.6){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.7 && imc <= 16.0){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 16.1 && imc <= 20.3){ imcvalor.value="Normal" }
        else if(imc >= 20.4 && imc <= 24.1){ imcvalor.value="Sobrepeso" }
        else if(imc >= 24.2){ imcvalor.value="Obesidad" } } 

    if(edad == 13 && meses >= 0 && meses < 6){
        if(imc <= 13.8){ imcvalor.value="Desnutrición" }
        else if(imc >= 13.9 && imc <= 14.8){ imcvalor.value="Desnutrición Moderada" }
        else if(imc >= 14.9 && imc <= 16.3){ imcvalor.value="Desnutrición Leve" }
        else if(imc >= 16.4 && imc <= 20.7){ imcvalor.value="Normal" }
        else if(imc >= 20.8 && imc <= 24.7){ imcvalor.value="Sobrepeso" }
        else if(imc >= 24.8){ imcvalor.value="Obesidad" } } 
}

var iho = document.getElementById("iho").value;
if(iho <= 25.0){ ihovalor.value = "Higiene Oral Óptima"; }
else if(iho > 25.0 && iho <= 40.0){ ihovalor.value = "Higiene Oral Buena"; }
else if(iho > 40.0 && iho <= 70.0){ ihovalor.value = "Higiene Oral Mediocre"; }
else if(iho > 70.0){ ihovalor.value = "Higiene Oral Deficiente"; }

if(document.getElementById("n11").value=="0"){ div11.style.display = "none"; }
if(document.getElementById("n12").value=="0"){ div12.style.display = "none"; }
if(document.getElementById("n13").value=="0"){ div13.style.display = "none"; }
if(document.getElementById("n14").value=="0"){ div14.style.display = "none"; }
if(document.getElementById("n15").value=="0"){ div15.style.display = "none"; }
if(document.getElementById("n16").value=="0"){ div16.style.display = "none"; }
if(document.getElementById("n17").value=="0"){ div17.style.display = "none"; }
if(document.getElementById("n18").value=="0"){ div18.style.display = "none"; }
if(document.getElementById("n19").value=="0"){ div19.style.display = "none"; }
if(document.getElementById("p1").value=="0"){ divp1.style.display = "none"; }
if(document.getElementById("fp1").value=="0"){ divfp1.style.display = "none"; }
if(document.getElementById("fi1").value=="0"){ divfi1.style.display = "none"; }

if(document.getElementById("n21").value=="0"){ div21.style.display = "none"; }
if(document.getElementById("n22").value=="0"){ div22.style.display = "none"; }
if(document.getElementById("n23").value=="0"){ div23.style.display = "none"; }
if(document.getElementById("n24").value=="0"){ div24.style.display = "none"; }
if(document.getElementById("n25").value=="0"){ div25.style.display = "none"; }
if(document.getElementById("n26").value=="0"){ div26.style.display = "none"; }
if(document.getElementById("n27").value=="0"){ div27.style.display = "none"; }
if(document.getElementById("n28").value=="0"){ div28.style.display = "none"; }
if(document.getElementById("n29").value=="0"){ div29.style.display = "none"; }
if(document.getElementById("p2").value=="0"){ divp2.style.display = "none"; }
if(document.getElementById("fp2").value=="0"){ divfp2.style.display = "none"; }
if(document.getElementById("fi2").value=="0"){ divfi2.style.display = "none"; }

function printHTML() { 
    if (window.print) { 
      window.print();
    }
  }
  document.addEventListener("DOMContentLoaded", function(event) {
    printHTML(); 
  });