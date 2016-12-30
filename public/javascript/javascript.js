var compensate = 0;

function layoutFunction(){
	var h = window.innerHeight;
	$(".welcomeBackground").css({"height":h});
	if (window.innerWidth <= 767){
  	compensate  = 50;
	}
	else{
  	compensate = 70;
	}
	$(".container").css({"min-height":h - compensate});
}
layoutFunction();


$(".navbar-toggle, .nav  .navbar-collapse a").on("click", function(e) {
	$("#bs-example-navbar-collapse-1").slideToggle("fast");
});
$(".navbar-brand").on("click", function() {
  $("#bs-example-navbar-collapse-1").slideUp("fast");
});

$( document ).ready(function() {
  $( window ).resize(function() {
 	  layoutFunction();
	});

  $(document).scroll(function(){
  if($(this).scrollTop() > 0){   
    $('.elieNav').removeClass("topNav").addClass("scrollNav");   
    $(".navbar-brand").removeClass("brandHide").addClass("brandShow");
    } 
    else { 
      $('.elieNav').removeClass("scrollNav").addClass("topNav");
      $(".navbar-brand").removeClass("brandShow").addClass("brandHide");
  	}
	});
  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
   });
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
	});
}); 