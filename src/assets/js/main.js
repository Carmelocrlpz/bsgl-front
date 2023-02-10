window.addEventListener('scroll', function()  {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;
  
        for(var i = 0; i < elements.length; i++) {
        var element = elements[i];

        if(element.getBoundingClientRect().top < screenSize) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }

      }
});

$( document ).ready(function() {
    $("#secondary-container").addClass( "visible" );
    $("#container-video").addClass( "visible" );

    $(window).scroll(function(){
        var barra = $(window).scrollTop();
        var posicion = barra * 0.40;

        $('body').css({
          'background-position': '0 ' + posicion + 'px'
        });
      });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
$('.carousel').carousel({
  interval: 3000

});

});



/*const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
menuLinks.foreach(menuLink => {
  menuLink.addEventListener("click", function(){
    menu.classList.remove("");
  });
});
*/

/*
$(function(){

    var texto = "NUESTRO OBJETIVO ES BRINDAR LA TECNOLOGÍA PARA AUTOMATIZAR SUS PROCESOS";
    maquina("slogan",texto,100);

});


function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   tagHtml = document.getElementById(contenedor);
   tagHtml.innerHTML="";
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      tagHtml.innerHTML = tagHtml.innerHTML.substr(0,tagHtml.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         tagHtml.innerHTML = tagHtml.innerHTML.substr(0,longitud);

         maquina("slogan",texto,100);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }
   },intervalo);
};*/


function escribirEnPantalla(texto){
  let arr=texto.split("");
  
  i=0;
 let intervalo= setInterval(function(){
    if(i==arr.length-1){ 
      document.getElementById("slogan").innerHTML+=arr[i];
      clearInterval(intervalo);} 
    else {
    if(arr[i]==" "){
     document.getElementById("slogan").innerHTML+=arr[i];
     document.getElementById("slogan").innerHTML+=arr[i+1];
      i+=2;
    }else{
    document.getElementById("slogan").innerHTML+=arr[i];
    i++;
      }
    }
  },100); 
}

escribirEnPantalla("NUESTRO OBJETIVO ES BRINDAR LA TECNOLOGÍA PARA AUTOMATIZAR SUS PROCESOS");


    var inputs = document.getElementsByClassName('formulario__input');
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
          this.nextElementSibling.classList.add('fijar');
        } else {
          this.nextElementSibling.classList.remove('fijar');
        }
      });
    }
