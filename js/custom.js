$(document).ready(function () {
    $("nav").addClass('animated fadeIn');
    $("#featured_1").addClass('animated fadeInRight');
});




$(window).scroll(function(){
//    console.log("scrolled!");   
    var how_much_document_scrolled = $(document).scrollTop();
//    console.log(how_much_document_scrolled);
    
    var h1_offset_top = $('#tagline h1').offset().top;
     console.log(h1_offset_top);
    
//    console.log(how_much_document_scrolled + "," + h1_offset_top);
    
    if(h1_offset_top - how_much_document_scrolled < window.innerHeight){
        $('#tagline h1').addClass('animated fadeInDown');
    }
    
    
    var h3_offset_top = $('#founder h3').offset().top;
    if(h3_offset_top - how_much_document_scrolled < window.innerHeight-100){
        $('#founder h3').addClass('animated lightSpeedIn');
    }
});