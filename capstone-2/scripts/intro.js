$(document).ready(function(){
  $(".faq-header-group").click(function() {
    $(this).children("p").fadeToggle();
  });
  $(".next-arrow").click(function() {
    $("#intro-1").fadeOut(500);
    $("#home-container").delay(500).fadeIn(500);
    // $(".app-icon").delay(1200).css({"animation":"shake 0.82s cubic-bezier(.36,.07,.19,.97) both"});
    console.log("fajsdjfkads;");
  });

  $("#question").click(function() {
    if( $("#phone-homescreen").css('visibility') == 'hidden') {
      $("#question-container").fadeOut(500);
      setTimeout(function(){
        $("#phone-homescreen").css({"visibility":"visible"});
        $("#faq-container").css({"visibility":"visible"});
        $("#phone-homescreen").transition({opacity:1});
        $("#faq-container").transition({opacity:1})
      }, 200);
    }
    else {
      $("#phone-homescreen").transition({opacity:0});
      $("#faq-container").transition({opacity:0})
      setTimeout(function(){
        $("#phone-homescreen").css({"visibility":"hidden"});
        $("#faq-container").css({"visibility":"hidden"});
        $("#question-container").fadeIn(500);
      }, 200);
    }
    // $("#phone-homescreen").transition({opacity:0}).css({"visibility":"hidden"});
  });
  $("#report-btn").mouseenter(function() {
    $("#report-btn rect").css({fill: "#2894D0"})
  });
  $("#report-btn").mouseout(function() {
    $("#report-btn rect").css({fill: "#52BDF9"})
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
