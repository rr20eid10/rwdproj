$(function() {
     // show/hide mobile menu
      $(".menu-icon").on("click", function(){
          $(".top-nav").toggleClass("active");
          $(this).toggleClass("open");
        
      });
  });