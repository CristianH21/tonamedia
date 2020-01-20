$(function(){

    $(window).on('scroll', function(evt){

        if($(window).scrollTop() > 10) {
            $('.navbar').addClass('no-transparent');
        } else {
            $('.navbar').removeClass('no-transparent');
        }
    });
  
});