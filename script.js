/* If you're feeling fancy you can add interactivity
to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
var test1 = false;
var test2 = false;
var test3 = false;
var test4 = false;
var testedAll = false;
console.log(test1);


var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

var y = document.getElementById("jazzAudio");

function playJazzAudio() {
  y.play();
}

function requestFullScreen() {

  var el = document.body;

  // Supports most browsers and their versions.
  var requestMethod = el.requestFullScreen || el.webkitRequestFullScreen
  || el.mozRequestFullScreen || el.msRequestFullScreen;

  if (requestMethod) {

    // Native full screen.
    requestMethod.call(el);

  } else if (typeof window.ActiveXObject !== "undefined") {

    // Older IE.
    var wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
}

$(document).ready(function() {

  $(".item").each(function(i) {
    $(this).find(".count").text(++i);
  });
  /*------------------1------------------ */
  /* Changes the width */

  $("#item1").click( function(event){
    // event.preventDefault();
    if ( $(this).hasClass("changeWidth") ) {
      $("#item1").stop().animate({width:"300px"}, 500);
    } else {
      $("#item1").stop().animate({width:"500px"}, 500);
    }
    $(this).toggleClass("changeWidth");
    return false;
  });


  /*------------------2------------------ */
  /* Changes to a circle */


  $("#item2").click( function(event){
    // event.preventDefault();
    if ( $(this).hasClass("makeCircle") ) {
      $("#item2").stop()
      .css({
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10 })
        .animate({
          borderTopLeftRadius: 300,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 150,
          borderBottomRightRadius: 200}, 800);
        }
        else
        {
          $("#item2").stop()
          .css({
            borderTopLeftRadius: 300,
            borderTopRightRadius: 50,
            borderBottomLeftRadius: 150,
            borderBottomRightRadius: 200})
            .animate({
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10}, 400);
            }
            $(this).toggleClass("makeCircle");
            return false;
          });

          /*------------------3------------------ */
          /* Moon Poem */
          $("#item3").click(function(event){
            $('.moon').fadeOut(2000);
            $('#quote-disappear').fadeOut(2000);
            $('#quote-second-line').delay(2000).animate({opacity:"1"},4000);
          });

          /*------------------4------------------ */
          /* Blade Runner Test 1 */
          $("#br-q1-a").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            test1 = true;
          });

          $("#br-q1-b").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            test1 = true;
          });

          $("#br-q1-c").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            test1 = true;
          });

          /*------------------5------------------ */
          /* Blade Runner Test 2 */

          $("#br-q2-a").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test2 = true;
          });

          $("#br-q2-b").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test2 = true;
          });

          $("#br-q2-c").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test2 = true;
          });

          /*------------------6------------------ */
          /* Blade Runner Test 3 */
          var test3 = false;
          $("#br-q3-a").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test3 = true;
          });

          $("#br-q3-b").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test3 = true;
          });

          $("#br-q3-c").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test3 = true;
          });

          /*------------------6------------------ */
          /* Blade Runner Test 4 */

          var test4 = false;
          $("#br-q4-a").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test4 = true;
          });

          $("#br-q4-b").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test4 = true;
          });

          $("#br-q4-c").click(function(event){
            $(this).css({"background-color": "black", "color": "#fa0c60"})
            var test4 = true;
          });

          /*------------------8------------------ */
          /* Blade Runner Replicant Chance */
          $("#get-replicant").click(function(event){
            // if (test1 == true & test2 == true && test3 == true && test4 == true) {
            //   testedAll == true;
            //   console.log(testedAll);
            // }
            // console.log(test1);
            $("#replicant-answer").css("visibility", "visible");
            $("#get-replicant").hide();
            var number = 1 + Math.floor(Math.random() * 100);
            $('#replicant-chance').text(number);

          });

          /*------------------9------------------ */
          /* Get Hugs */
          $("#get-hug").click(function(event){
            $("#hug").css({"display": "block"});
            $("#get-hug").css({"display": "none"});
          });

          /*------------------10------------------ */
          /* Square Animation 1 */
          $("#item10").click(function(event){
            $(".div1-a").css({"animation": "square-to-circle-1 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse"});
            $(".div2-a").css({"animation": "square-to-circle-2 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse"});
          });

          /*------------------11------------------ */
          /* Square Animation 2 */
          $("#item11").click(function(event){
            $(".div1-b").css({"animation": "circle-to-square-1 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse"});
            $(".div2-b").css({"animation": "circle-to-square-2 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse"});
          });

          /*------------------12------------------ */
          /* Square Animation 3 */
          $("#item12").click(function(event){
            $(".div1-c").css({"animation": "circle-to-square-3 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse"});
            $(".div2-c").css({"animation": "circle-to-square-2 2.5s .5s infinite cubic-bezier(1,.015,.295,1.225) alternate-reverse"});
          });

          /*------------------13------------------ */
          /* Expand + Change color 3 */


          $("#item13").click( function(event){
            // event.preventDefault();
            if ($(this).hasClass("changeWidth-1")) {
              $("#item13").stop().animate({width:"300px", backgroundColor:"white"}, 2000);
            } else {
              $("#item13").stop().animate({width:"1100px", height:"600px", backgroundColor:"#eb9142"},2000);
            }
            $(this).toggleClass("changeWidth-1");
            return false;
          });

          /*------------------14------------------ */
          /* Get Loud */

          $("#item14").click( function(event){
            if ($(this).hasClass("getLoud")) {
              $("#item14").stop().animate({width:"300px", backgroundColor:"white"}, 1000);
              $("#loud").animate({fontSize:"1rem", color:"black"},500)
            } else {
              $("#item14").stop().animate({backgroundColor:"#f01641"},500);
              $("#loud").animate({fontSize:"7rem", color:"white"},500);
            }
            $(this).toggleClass("getLoud");
            return false;
          });

          /*------------------15------------------ */
          /* Get Louder */
          var fontIncrease = 1;
          $("#item15").click( function(event){

            $("#louder").animate({fontSize: fontIncrease+"rem"},100);
            fontIncrease +=1;
            console.log(fontIncrease);
          });

          /*------------------16------------------ */
          /* Blow Up Text */
          $("#item16").click( function(event){
            $("h1, h2, p").animate({fontSize: "10rem"},100);
            $("#item17").animate({backgroundColor:"#0754ed"},100);
          });

          /*------------------16------------------ */
          /* Tidy Up Text */
          $("#item17").click( function(event){
            $("h1, h2, p").animate({fontSize: "1rem"},1000);
            $("#tidy").text("cleaned up!");
          });

          /*------------------18------------------ */
          /* Form Input */
          var lightBox = $('#lightbox'),
          lightBoxContent = $('#lb-content');

          var positionLightbox = function() {
            var veiwWidth = $(window).width(),
            lbContentMargin = (veiwWidth / 2),
            lbContent = $('#lb-content');

            lbContent.css({
              'bottom' : '120px'
            });
          };

          $('#test').click(function(e) {
            e.preventDefault();
            lightBox.fadeIn(function() {
              lightBoxContent.show();
            });
            positionLightbox();
          });

          $('#lb-close').click(function() {
            lightBox.hide();
            lightBoxContent.hide();
          });
          /*hide click outside*/
          $(document).mouseup(function (e)
          {
            if (!lightBoxContent.is(e.target) // if the target of the click isn't the container...
            && lightBoxContent.has(e.target).length === 0) // ... nor a descendant of the container
            {
              lightBox.hide();
              lightBoxContent.hide();
            }
          });

          /*------------------19------------------ */
          /* Form Input */
          $('#item19').click(function() {
            // $("#page-cover").css({"opacity": "1"}).fadeIn(1000);
            $("#page-cover").show(1000);
            $("#light").delay(1200)
            .queue( function(next){
              $(this).css({"color": "white"});
              $(".bulb-frame").fadeTo(500, 1.0);
              next();
            });
          });

          /*------------------20------------------ */
          /* no black out */
          $('#item21').click(function() {
            $("#page-cover").css({"visibility": "hidden"});
            $(".bulb-frame").css({"background-color": "white"});
          });

          /*------------------22------------------ */
          /* toggle box shadow */
          $('#item22').click(function() {
            $('#circle-shadow').css({"box-shadow": "0px 7px 26px 2px rgba(166,166,166,1)", "border": "0px solid"});
          });

          /*------------------23------------------ */
          /* circle yes */
          $('#item23').click(function() {
            $("#circle-yes h1").toggle();
          });

          /*------------------24------------------ */
          /* circle invert */
          $("#item24").click( function(event){
            // event.preventDefault();
            if ( $(this).hasClass("invertColor") ) {
              $("#item24").stop().css({"backgroundColor": "#d12874"});
              $("#circle-invert").stop().css({"backgroundColor": "#0d2191"});
            } else {
              $("#item24").stop().css({"backgroundColor": "#0d2191"});
              $("#circle-invert").stop().css({"backgroundColor": "#d12874"});
            }
            $(this).toggleClass("invertColor");
            return false;
          });

          /*------------------25------------------ */
          /* invert everything */
          $("#item25").click( function(event){
            if ( $(this).hasClass("invertColor") ) {
              $(".item").stop().animate({backgroundColor: "#f01d94"});
              $("body, .container").stop().animate({backgroundColor: "#1df0b1"});
            } else {
              $(".item").stop().animate({backgroundColor: "#1df0b1"});
              $("body, .container").stop().animate({backgroundColor: "#f01d94"});
            }
            $(this).toggleClass("invertColor");
            return false;
          });

          /*------------------26------------------ */
          /* kittens */
          $("#item26").click( function(event){
            $("#kittens-gif").show(1000);
          });

          /*------------------27------------------ */
          /* kittens */
          $("#item27").click( function(event){
            if ( $(this).hasClass("invertColor") ) {
              $(".item").stop().animate({backgroundColor: "#000000"});
              $("body, .container").stop().animate({backgroundColor: "#fffff"});
            } else {
              $(".item").stop().animate({backgroundColor: "#000000"});
              $(".item").stop().css({"box-shadow": "-4px 7px 55px 14px rgba(255,46,192,1"});
              $("body, .container").stop().animate({backgroundColor: "#000000"});
              $("h1, h2, p").stop().css({"color": "#ff2ec0"});
            }
            $(this).toggleClass("invertColor");
            return false;
          });

          /*------------------28------------------ */
          /* glow text */
          $("#item28").click( function(event){
            $("#glow-text").stop().css({"animation": "glow 1s ease-in-out infinite alternate"});
          });

          /*------------------29------------------ */
          /* glow text all */
          $("#item29").click( function(event){
            $("h1, h2, h3, p").stop().css({"animation": "glow2 1s ease-in-out infinite alternate", "color": "white"});
          });

          /*------------------30------------------ */
          /* blurry */
          $("#item30").click( function(event){
            $("#blur-text").stop().css({"filter": "blur(0px)"});
          });

          /*------------------31------------------ */
          /* blurry all text */
          $("#item31").click( function(event){
            $("h1, p, img, h2, body").stop().css({"filter": "blur(6px)"});
            $("#item32").stop().css({"filter": "blur(0px)"});
          });

          /*------------------31------------------ */
          /* unblurry all text */
          $("#item32").click( function(event){
            $("h1, p, img, h2, body").stop().css({"filter": "blur(0px)"});
          });

          /*------------------33------------------ */
          /* unblurry text 2 */
          $("#item33").click( function(event){
            $("blurry-text-2 span").stop().css({"animation": "blur3 10s ease-out 100"});
          });

          /*------------------34------------------ */
          /* translate page */
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'ru'}, 'google_translate_element');
          }

          /*------------------35------------------ */
          /* emoji */
          $("#jim").click( function(event){
            var src = $('#jim').attr('src');
            if(src == 'assets/cowboy.png') {
              $("#jim").attr("src","assets/smile-face.png");
            } else if (src == "assets/smile-face.png") {
              $("#jim").attr("src","assets/slightly-smiling.png");
            }
            else if (src == "assets/slightly-smiling.png") {
              $("#jim").attr("src","assets/confused.png");
            }
            else if (src == "assets/confused.png") {
              $("#jim").attr("src","assets/anger.png");
            }
            else if (src == "assets/anger.png") {
              $("#jim").fadeOut(500);
              $("#jim-text").text("bruh");
            }
          });

          /*------------------35------------------ */
          /* yeet */
          $("#yeet").click( function(event){
            var number = 1 + Math.floor(Math.random() * 100);
            $('p, h1, h2, h3, h4, h5, h6, a, .question-responses').replaceWith("yeet yeet");
            $("h1").css({"font-size": "300px"});
          });

          /*------------------37------------------ */
          /* yeet */
          var words = [
            'YEET',
            'Special',
            'Dynamic',
            'Simple',
            'Great',
            'Better',
            'Stronger',
            'Stylish',
            'Flawless',
            'Envied',
            'Strong',
            'Sucessful',
            'Grow',
            'Innovate',
            'Global',
            'Knowledgable',
            'Unique',
            'Trusted',
            'Efficient',
            'Reliable',
            'Stable',
            'Secure',
            'Sofisticated',
            'Evolving',
            'Colorful',
            'Admirable',
            'Sexy',
            'Trending',
            'Shine',
            'Noted',
            'Famous',
            'Inspiring',
            'Important',
            'Bigger',
            'Stylish',
            'Expand',
            'Proud',
            'Awesome',
            'Solid'
          ];

          var getRandomWord = function () {
            return words[Math.floor(Math.random() * words.length)];
          }
          console.log(getRandomWord());

          $("#item37").click( function(event){
            $("#random-motivate").text(getRandomWord());
            $(this).css({"background-color":"#366ce0", "color": "white"})
            $("#random-motivate").css({ "color": "white"})
          });

          /*------------------39------------------ */
          $("#item38").click( function(event){
            // event.preventDefault();
            if ( $(this).hasClass("makeCircle") ) {
              $(".item").stop()
              .css({
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10 })
                .animate({
                  borderTopLeftRadius: 150,
                  borderTopRightRadius: 150,
                  borderBottomLeftRadius: 150,
                  borderBottomRightRadius: 150}, 800);
                }
                else
                {
                  $(".item").stop()
                  .css({
                    borderTopLeftRadius: 150,
                    borderTopRightRadius: 150,
                    borderBottomLeftRadius: 150,
                    borderBottomRightRadius: 150})
                    .animate({
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10}, 300);
                    }
                    $(this).toggleClass("makeCircle");
                    return false;
                  });

                  /*------------------39------------------ */
                  $(function() {
                    $("#item39").draggable();
                  });

                  /*------------------40------------------ */
                  $("#item40").click( function(event){
                    $(function() {
                      $(".item").draggable();
                    });
                  });

                  /*------------------41------------------ */
                  $("#item41").click( function(event){
                    $("#self-destruct").fadeOut(1000);
                    $("#item38").css({"z-index": "0"});
                    $("#page-cover").fadeOut(500).fadeIn(500).fadeOut(500).fadeIn(500).fadeOut(500);
                    $(".item").delay(2000).fadeOut(200);
                  });

                  /*------------------42------------------ */

                  $("#item42").click( function(event){
                    $(this).css({"background-color": "white","color": "black"});
                    $("#item42-text").hide();
                    var Messenger = function(el){
                      'use strict';
                      var m = this;

                      m.init = function(){
                        m.codeletters = "&#*+%?£@§$";
                        m.message = 0;
                        m.current_length = 0;
                        m.fadeBuffer = false;
                        m.messages = [
                          'The Grid.',
                          'A digital frontier.',
                          'I tried to picture clusters of information as they moved through the computer.',
                          'I kept dreaming of a world I thought Id never see.',
                          'And then one day . . .',
                          'I got in.'
                        ];

                        setTimeout(m.animateIn, 100);
                      };

                      m.generateRandomString = function(length){
                        var random_text = '';
                        while(random_text.length < length){
                          random_text += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
                        }

                        return random_text;
                      };

                      m.animateIn = function(){
                        if(m.current_length < m.messages[m.message].length){
                          m.current_length = m.current_length + 4;
                          if(m.current_length > m.messages[m.message].length) {
                            m.current_length = m.messages[m.message].length;
                          }

                          var message = m.generateRandomString(m.current_length);
                          $(el).html(message);

                          setTimeout(m.animateIn, 20);
                        } else {
                          setTimeout(m.animateFadeBuffer, 20);
                        }
                      };

                      m.animateFadeBuffer = function(){
                        if(m.fadeBuffer === false){
                          m.fadeBuffer = [];
                          for(var i = 0; i < m.messages[m.message].length; i++){
                            m.fadeBuffer.push({c: (Math.floor(Math.random()*12))+1, l: m.messages[m.message].charAt(i)});
                          }
                        }

                        var do_cycles = false;
                        var message = '';

                        for(var i = 0; i < m.fadeBuffer.length; i++){
                          var fader = m.fadeBuffer[i];
                          if(fader.c > 0){
                            do_cycles = true;
                            fader.c--;
                            message += m.codeletters.charAt(Math.floor(Math.random()*m.codeletters.length));
                          } else {
                            message += fader.l;
                          }
                        }

                        $(el).html(message);

                        if(do_cycles === true){
                          setTimeout(m.animateFadeBuffer, 50);
                        } else {
                          setTimeout(m.cycleText, 2500);
                        }
                      };

                      m.cycleText = function(){
                        m.message = m.message + 1;
                        if(m.message >= m.messages.length){
                          m.message = 0;
                        }

                        m.current_length = 0;
                        m.fadeBuffer = false;
                        $(el).html('');

                        setTimeout(m.animateIn, 500);
                      };

                      m.init();
                    }

                    console.clear();
                    var messenger = new Messenger($('#messenger'));

                  });

                  /*------------------43------------------ */
                  $("#item43").click( function(event){
                    requestFullScreen();
                  });

                  /*------------------44------------------ */
                  function getRandomColor() {
                    var letters = '0123456789ABCDEF';
                    var color = '#';
                    for (var i = 0; i < 6; i++) {
                      color += letters[Math.floor(Math.random() * 16)];
                    }
                    return color;
                  }

                  $("#item44").click( function(event){

                    setInterval(function () {
                      console.log(getRandomColor());
                      $("#strobe").toggleClass('black');
                      $(".black").css("background-color", getRandomColor());

                    }, 500);
                    $("#disco").fadeIn(300);
                    $("#jazz").fadeIn(300);
                  });

                  /*------------------47------------------ */
                  $("#item47").click( function(event){
                    $(".item").css("background-color", getRandomColor());
                  });

                  /*------------------48------------------ */
                  $("#item48").click( function(event){
                    for (i = 1; i < 50; i++) {
                      $("#item"+i).css("background-color", getRandomColor());
                    }
                  });

                  /*------------------49------------------ */


                  $("#item49").click( function(event){
                    var bounce = new Bounce();
                      bounce.scale({
                        from: { x: .8, y: .8 },
                        to: { x: 1, y: 1 },
                        stiffness: 2,
                        bounces: 4
                      })
                       .applyTo(document.querySelectorAll(".animation-target"));
                  });

                  /*------------------49------------------ */
                  $("#item50").click( function(event){
                    $(".item").css({"background-image": 'url(assets/old-town.gif)', "object-fill": "cover"});
                  });








                });
