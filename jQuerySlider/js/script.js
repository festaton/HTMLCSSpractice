$(document).ready(function() {
    //setting options
    
    var speed = 500;                //fade speed
    var autoswitch = true           //auto slider options
    var autoswitch_speed = 4000     //auto slider speed
    
    // add initial active class
    $('.slide').first().addClass('active');
    
    //hide all slides
    $('.slide').hide();
    
    //show first slide
    $('.active').show();
    
    
    
    //NEXT button
    $('#next').on('click',nextSlide)
    
    //PREVIOUS button
     $('#prev').on('click',prevSlide)
     
     if(autoswitch == true) {
         setInterval(nextSlide, autoswitch_speed)
     }
    
    //function for previous
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive'); //change active to oldActive
        if($('.oldActive').is(':first-child')) {                   //if oldActive is last slide
            $('.slide').last().addClass('active');               //loop back and make first slide active
        }
        else {
            $('.oldActive').prev().addClass('active');            
        }
         
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed); 
    }
    
    //function for nextSlide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive'); //change active to oldActive
        if($('.oldActive').is(':last-child')) {                   //if oldActive is last slide
            $('.slide').first().addClass('active');               //loop back and make first slide active
        }
        else {
            $('.oldActive').next().addClass('active');            
        }
        
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed); 
    }
    
});