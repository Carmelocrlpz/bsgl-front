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


   


/************************************************************************************************/
       
/***********************************************************************************************/
    /*function changemenu(){
      let mimenunav = document.getElementById('navigationbar');
    if (screen.width < 500){ 
          mimenunav.classList.remove('sticky-top');
          mimenunav.classList.remove('nav-top');
          mimenunav.classList.add('fixed-bottom');
       }else{ 
          mimenunav.classList.remove('fixed-bottom');
          mimenunav.classList.add('nav-top');
          mimenunav.classList.add('sticky-top');
      }
    }

    changemenu();


    THIS WAS MIGRATED TO COMPONENT:TS*/




