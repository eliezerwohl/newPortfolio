var a = $(".elieNav").offset().top;

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