new Audio('sounds/iphone_sent.mp3').play();

$('document').ready(function(){
  console.log('DOM loaded');

  Barba.Pjax.init();
  Barba.Prefetch.init();
  var transEffect = Barba.BaseTransition.extend({
    start: function(){
      this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
    },
    fadeInNewcontent: function(nc) {
      nc.hide();
      var _this = this;
      $(this.oldContainer).fadeOut(500).promise().done(() => {
        nc.css('visibility','visible');
        nc.fadeIn(500, function(){
          _this.done();
        })
      });
    }
  });
  Barba.Pjax.getTransition = function() {
    return transEffect;
  }
  Barba.Pjax.start();
  Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {
  });


  $("#intro-1")
  .css({opacity: 0, top:'50vh'})
  .animate({
    opacity: 1, top:'40vh'}, 500);

  $("#button-1").click(function() {
    $("#intro-1").animate({
      opacity: 0, top:'20vh'}, 500);
      $("#intro-2")
      .css({opacity: 0, top:'35vh'})
      .animate({
        opacity: 1, top:'20vh'}, 500)
        $(this).hide();
        $("#button-2").show();
      });

  $("#button-2").click(function() {
    $("#intro-2")
    .animate({
      opacity: 0, bottom:'35vh'}, 500);
      $(this).hide();
      $("#intro-3")
      .animate({
        opacity: 1, bottom:'5vh'}, 500);
        $("#button-3").show();
      });

    $("#button-3").click(function() {
      $("#intro-3")
      .animate({
        opacity: 0, bottom:'20vh'}, 500);
        $(this).hide();
        $("#intro-4")
        .animate({
          opacity: 1, bottom:'5vh'}, 500);
          $("#button-4").show();
        });

      $("#button-4").click(function() {
        $("#intro-4")
        .animate({
          opacity: 0, bottom:'20vh'}, 500);
          $(this).hide();
          $("#intro-title")
          .animate({
            opacity: 1, bottom:'30vh'}, 500);
          });

      $(".intro-svg").mouseenter(function() {
        $("#send-icon").css({fill: "#0774B1"});
      });

      $(".intro-svg").mouseout(function() {
        $("#send-icon").css({fill: "#52BDF9"});
      });

      $("#intro-title").click(function(){
        $(this).hide();
        $("#intro-text-1-div")
        .animate({
          opacity: 1, bottom:'43vh'}, 500);
          $("#delivered")
          .delay(3000).queue(function(n){
            $(this).html("Read"); n();
          })
          $("#loader")
          .delay(3000)
          .animate({
            opacity: 1}, 500)
            .delay(750)
            .animate({
              opacity: 0}, 500);
              $("#intro-text-2 ")
              .delay(4000)
              .animate({
                opacity: 1, bottom:'-10vh'}, 500);
                $(".help-text")
                .delay(5000)
                .animate({
                  opacity: 1}, 500);
                  // $("#button-5")
                  // .delay(5500)
                  // .animate({
                  //   opacity: 1}, 500);
                });
              });


      //MATCH

      // Match button
      $("#view-button-1").click(function(){
        $("#match-inner-1").css({"animation":"slide-left-leave 500ms"}).fadeOut(500);
        $("#match-inner-2").delay(100).css({"animation":"slide-left-enter 500ms"}).fadeIn(200);
        $(".header").fadeIn(200).html("These comments describe a bot being born and immediately turning to its one purpose in life: finding a man.");
        $(".subtext").fadeIn(200).html("The Angels, also called 'hosts' by the company's engineers, lay dormant until a bot animates them and uses them like a skin to contact a male user. They used over 70,000 hosts to engage with Ashley Madison users, launching a synchronized attack to extract as much money and attention from the users as they could.");
      });

      // Potato Menu
      $("#potato-icon-default").mouseenter(function() {
        $("#potato-icon-hover").css({"display": "block"});
        $("#potato-icon-default").css({"display": "none"});
      });

      $("#potato-icon-hover").click(function() {
        if ($("#menu-links").children().hasClass("slide-in")) {
          $("#menu-links").children().removeClass("slide-in");
          $("#menu-links").fadeOut(100);
          // $("#potato-icon-hover").css({"display": "none"});
        }
        else {
          $("#menu-links").children().addClass("slide-in");
          $("#menu-links").fadeIn(100);
          // $("#potato-icon-default").css({"display": "block"});
          // $("#potato-icon-hover").css({"display": "none"});
        }
      });

      $("#potato-icon-hover").mouseout(function() {
        $("#potato-icon-hover").css({"display": "none"});
        $("#potato-icon-default").css({"display": "block"});
      });

      // MENU
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
