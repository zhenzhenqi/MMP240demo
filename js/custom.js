$(document).ready(function () {
    $("nav").addClass('animated fadeIn');
    
});




$(window).scroll(function(){
//    console.log("scrolled!");   
    
    var how_much_document_scrolled = $(document).scrollTop();
    
    var h1_offset_top = $('#tagline h1').offset().top;
    
    
//    console.log(how_much_document_scrolled + "<," + h1_offset_top);
    
    if(h1_offset_top - how_much_document_scrolled < window.innerHeight){
        $('#tagline h1').addClass('animated fadeInDown');
    }
    
});