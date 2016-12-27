
$(document).scroll(function(){
  if($(this).scrollTop() > 0)
  {   
    $('.elieNav').removeClass("topNav");
    $('.elieNav').addClass("scrollTop");
    } else { 
      $('.elieNav').removeClass("scrollTop");
      $('.elieNav').addClass("topNav");
  }
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