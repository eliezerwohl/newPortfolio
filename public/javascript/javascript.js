 var testVar = 0

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

var a = $(".elieNav").offset().top;

var h = window.innerHeight;
$(".welcomeBackground").css({"height":h})

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.elieNav').css({"background":"white"});
       // $(".jim").css({"bottom-margin": "80px"})
       // $('.welcomeDiv').css({"padding-top":"200px"});
       $('.elieNav').addClass("navbar-fixed-top");

    } else {
       $('.elieNav').css({"background":"transparent"});
       $('.elieNav').removeClass("navbar-fixed-top");
    
        // $(".jim").css({"bt-margin": "0px"})
       // $('.welcomeDiv').css({"padding-top":"100px"});
    }
});

$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
    	if (document.documentElement.scrollTop || document.body.scrollTop ==  0){
    		compVar = 40
    	}
    	else{
    		compVar = 0
    	}
    	debugger
      $('html, body').animate({
        scrollTop: target.offset().top - 80 - compVar
      }, 1000);
  
      return false;
    }

  }

})