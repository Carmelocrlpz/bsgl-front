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

    $(".contenedor").each(function() {
     $(this).hover(function() {
       $(".back").css({"display":"block","transform":"rotateY(360deg)","background-color":"#959f3e"}).delay( 800 );
    });
  });


});
