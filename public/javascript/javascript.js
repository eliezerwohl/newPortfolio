var a = $(".elieNav").offset().top;
$(document).scroll(function(){
    if($(this).scrollTop() > 0)
    {   
       $('.elieNav').css({"background":"white"});
         $('.elieNav').css({"border-bottom":"1px solid #808080"});
      } else {
       $('.elieNav').css({"border-bottom":"none"});
         $('.elieNav').css({"background":"transparent"});

    }
}); 

 $(".collapse").on('show.bs.collapse', function(){
        $('.container-fluid').css({"background":"white"});
    });
    $(".collapse").on('hide.bs.collapse', function(){
        $('.container-fluid').css({"background":"none"});
    });


$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});



var h = window.innerHeight;
$(".welcomeBackground").css({"height":h})



$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
    	
      $('html, body').animate({
        scrollTop: target.offset().top - 70
      }, 1000);
  
      return false;
    }

  }

})