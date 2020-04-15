$('document').ready(function(){
	console.log('DOM loaded');

// 	Barba.Pjax.init();
// 	Barba.Prefetch.init();
// 	var transEffect = Barba.BaseTransition.extend({
// 		start: function(){
// 			this.newContainerLoading.then(val => this.fadeInNewcontent($(this.newContainer)));
// 		},
// 		fadeInNewcontent: function(nc) {
// 			nc.hide();
// 			var _this = this;
// 			$(this.oldContainer).fadeOut(1000).promise().done(() => {
// 				nc.css('visibility','visible');
// 				nc.fadeIn(1000, function(){
// 					_this.done();
// 				})
// 			});
// 		}
// 	});
// 	Barba.Pjax.getTransition = function() {
// 		return transEffect;
// 	}
// 	Barba.Pjax.start();
// });

// Match button
$("#view-button-1").click(function(){
  $("#match-inner-1").css({"animation":"slide-left-leave 500ms"}).fadeOut(500);
  $("#match-inner-2").delay(100).css({"animation":"slide-left-enter 500ms"}).fadeIn(200);
  $(".header").fadeIn(200).html("These comments describe a bot being born and immediately turning to its one purpose in life: finding a man.");
  $(".subtext").fadeIn(200).html("The Angels, also called 'hosts' by the company's engineers, lay dormant until a bot animates them and uses them like a skin to contact a male user. They used over 70,000 hosts to engage with Ashley Madison users, launching a synchronized attack to extract as much money and attention from the users as they could.");
  $("#match-tooltip-1").fadeOut(200);
  $("#match-tooltip-2").fadeIn(200);
  $("#match-tooltip-3").fadeIn(200);
});

$("#button-1").click(function() {
  $(".match-text").transition({opacity:0, x:100});
  $(this).transition({opacity:0});
  $("#match-inner-1").fadeIn(200).css({"animation":"shake 0.82s cubic-bezier(.36,.07,.19,.97) both"});
  $(".phone-frame").fadeIn(200).css({"animation":"shake 0.82s cubic-bezier(.36,.07,.19,.97) both"});
  $("#match-tooltip-1").fadeIn(200);
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

animateDiv('.bg-text');

// MENU
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
});


//BACKGROUND MENU
function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];
}

function animateDiv(myclass){
    var newq = makeNewPosition();
    $(myclass).transition({ top: newq[0], left: newq[1] }, 5000,   function(){
      animateDiv(myclass);
    });
  }
