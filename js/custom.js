// PRELOADER

/*window.onload = function() {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('webpage').style.display = 'block';
  }, 3000);
}*/


// ANIMATION WOW Activattion

$(function() {

  // Animate On Scroll
  new WOW().init();

});


//NAVIGATION SECTION

// Show/Hide Nav Transparent Background On Scroll
$(function() {

  $(window).scroll(function(){

    if($(this).scrollTop() < 50) {
      // hide nav
      $("nav").removeClass("sc-top-nav");
    } else {
      // show nav
      $("nav").addClass("sc-top-nav");
    }

  });

});

// Show Nav Transparent Background On Toggle (Mobile Nav)
$(function(){

  $(".navbar-toggler").click(function(){
    $("nav").toggleClass("toggleBg");
  });

});

// Smooth Scrolling
$(function(){

  $("a.smooth-scroll").click(function(event){

    event.preventDefault();

    // Get/Return ID like #services, #about, and #contact and etc
    var section = $(this).attr("href");

    $('html, body').animate({
      scrollTop: $(section).offset().top - 100
    }, 1250);

  });

});

// WORK/GALLERY SECTION
$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$(function() {
  $("#gallery, #work").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    // other options
    gallery:{
      enabled:true
    }
  });
});