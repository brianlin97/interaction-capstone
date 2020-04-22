$(document).ready(function(){
   $(".faq-header-group").click(function() {
     $(this).children("p").fadeToggle();
   });
   $(".next-arrow").click(function() {
     $("#intro-1").fadeOut(500);
     $("#home-container").delay(500).fadeIn(500);
     $(".app-icon").delay(1200).css({"animation":"shake 0.82s cubic-bezier(.36,.07,.19,.97) both"});
     console.log("fajsdjfkads;");
   });
   $(".cancel-btn").click(function() {
     $("#help-container").toggleClass("show");
   });
   $("#report-btn").click(function() {
     $("#help-container").toggleClass("show");
   });
   $("#link-scam").click(function() {
      window.location = "bait.html";
   });
   $("#promo-scam").click(function() {
      window.location = "promotion-scam.html";
   });
   $("#foreign-love").click(function() {
      window.location = "foreign-love.html";
   });
   $("#long-con").click(function() {
      window.location = "long-con.html";
   });
})
