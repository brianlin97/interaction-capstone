$(document).ready(function(){
   $(".faq-header-group").click(function() {
     $(this).children("p").fadeToggle();
   });
   $(".next-arrow").click(function() {
     $("#scene").transition({"y":"-40","opacity": "0","visibility":"hidden", duration:1000});
     $("#home-container").delay(500).fadeIn(500);
     $(".app-icon").delay(1200).css({"animation":"shake 0.82s cubic-bezier(.36,.07,.19,.97) both"});
     console.log("fajsdjfkads;");
   });
   $("#link-scam").click(function() {
      window.location = "bait.html";
   });
})
