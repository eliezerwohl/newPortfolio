$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
})

var a = $(".elieNav").offset().top;
debugger
var h = window.innerHeight;
$(".welcomeBackground").css({"height":h})

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.elieNav').css({"background":"white"});
       $('.welcomeDiv').css({"padding-top":"200px"});
       $('.elieNav').addClass("navbar-fixed-top");

    } else {
       $('.elieNav').css({"background":"transparent"});
       $('.elieNav').removeClass("navbar-fixed-top");
       $('.welcomeDiv').css({"padding-top":"100px"});
    }
});