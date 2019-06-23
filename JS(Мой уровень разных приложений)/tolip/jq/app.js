$(document).ready(function(){
    
     
     $('.tooltip').each(function(){
          $(this).parent().hover(function(){
               $(this).find('.tooltip').fadeIn('slow');
          },function(){
               $(this).find('.tooltip').fadeOut('slow');
          }
          )
     })


     $(document).mousemove(function(e){
          let mouseX = e.clientX,
               mouseY = e.clientY;

           $('.tooltip').css({
                'left':mouseX,
                'top':mouseY+20
           }) 

     })
})
     
