
document.addEventListener("DOMContentLoaded", function(event) {
   
  const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)
  
  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
  toggle.addEventListener('click', ()=>{
  // show navbar
  nav.classList.toggle('show')
  // change icon
  toggle.classList.toggle('bx-x')
  // add padding to body
  bodypd.classList.toggle('body-pd')
  // add padding to header
  headerpd.classList.toggle('body-pd')
  })
  }
  }
  
  showNavbar('header-toggle','nav-bar','body-pd','header')
  
  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll('.nav_link')
  
  function colorLink(){
  if(linkColor){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
  }
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
   // Your code to run since DOM is loaded and ready
  });

  window.onload = function() {
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
      }

$("#navbar_numero1").click(function() {
  navbar_img1.src="../recursos/img/inicio2.png";
  navbar_img2.src="../recursos/img/admin1.png";
  navbar_img3.src="../recursos/img/clasificar1.png";
  navbar_img4.src="../recursos/img/configurar1.png";
  }
);
$("#navbar_numero2").click(function() {
  navbar_img1.src="../recursos/img/inicio1.png";
  navbar_img2.src="../recursos/img/admin2.png";
  navbar_img3.src="../recursos/img/clasificar1.png";
  navbar_img4.src="../recursos/img/configurar1.png";
  }
);
$("#navbar_numero3").click(function() {
  navbar_img1.src="../recursos/img/inicio1.png";
  navbar_img2.src="../recursos/img/admin1.png";
  navbar_img3.src="../recursos/img/clasificar2.png";
  navbar_img4.src="../recursos/img/configurar1.png";
  }
);
$("#navbar_numero4").click(function() {
  navbar_img1.src="../recursos/img/inicio1.png";
  navbar_img2.src="../recursos/img/admin1.png";
  navbar_img3.src="../recursos/img/clasificar1.png";
  navbar_img4.src="../recursos/img/configurar2.png";
  }
);

$("#navbar_numero5").click( function confirmacion() {
  var respuesta=confirm("¿Desea Cerrar Sesión?");
  if(respuesta==true) {
    return true;
  }else {
    return false;
  }
}
);


$("#inicio").click(function() {
    inicio.style.backgroundColor="#989b9f";
    clasificar.style.backgroundColor="transparent";
    admin.style.backgroundColor="transparent";
    configuracion.style.backgroundColor="transparent";
  }
);
$("#clasificar").click(function() {
    inicio.style.backgroundColor="transparent";
    clasificar.style.backgroundColor="#989b9f";
    admin.style.backgroundColor="transparent";
    configuracion.style.backgroundColor="transparent";
  }
);
$("#admin").click(function() {
    inicio.style.backgroundColor="transparent";
    clasificar.style.backgroundColor="transparent";
    admin.style.backgroundColor="#989b9f";
    configuracion.style.backgroundColor="transparent";
  }
);
$("#configuracion").click(function() {
    inicio.style.backgroundColor="transparent";
    clasificar.style.backgroundColor="transparent";
    admin.style.backgroundColor="transparent";
    configuracion.style.backgroundColor="#989b9f";
  }
);