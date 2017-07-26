$(document).scroll(function() {
    checkOffset();
});

function checkOffset() {
    if($('#hotelmap').offset().top + $('#hotelmap').height()
        >= $('#footer').offset().top - 10){
        $('#hotelmap').css('top', '0px');
        $('#hotelmap').css('height', '80%');
    }
    if($(document).scrollTop() + window.innerHeight < $('#footer-container').offset().top){
        $('#hotelmap').css('top', '85px');
    $('#hotelmap').css('height', '90%');}
}