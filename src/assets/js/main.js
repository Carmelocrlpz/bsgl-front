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

   /* $( ".contenedor" ).hover(function() {
      
      $(".back").css({"display":"block","transform":"rotateY(360deg)"});
     
    });*/

    
     /*$("#cc1").hover(function() {$(".back").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc2").hover(function() {$(".back").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc3").hover(function() {$(".back").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc4").hover(function() {$(".back").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc5").hover(function() {$(".back").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });*/
  /*

  $("#cc1").hover(function() {$("#ccb1").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e","transition":"all 1s"});});

     $("#cc2").hover(function() {$("#ccb2").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc3").hover(function() {$("#ccb3").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc4").hover(function() {$("#ccb4").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });
     $("#cc5").hover(function() {$("#ccb5").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 ); });*/


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



});



/*const menuLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');
menuLinks.foreach(menuLink => {
  menuLink.addEventListener("click", function(){
    menu.classList.remove("");
  });
});
*/

