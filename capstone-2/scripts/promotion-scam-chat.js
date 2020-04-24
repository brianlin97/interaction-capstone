/*

Name    : Responsive HTML5 Chat

Responsive HTML5 Chat helps you to create useful chatbox on your website easly.
You can change skin and sizes. You can read the installation and support documentation
before you begin. If you do not find the answer, do not hesitate to send a message to me.

Owner   : Vatanay Ozbeyli
Web     : www.vatanay.com
Support : hi@vatanay.com

*/

function scrollSmoothToBottom(id) {
  var div = document.getElementByClassName(id)[0];
  $('#' + id).animate({
    scrollTop: div.scrollHeight - div.clientHeight
  }, 500);
  console.log(div);
}


function responsiveChat(element) {
  $(element).html('<form class="chat"><span></span><div class="messages"></div><div class="message-options"><div class="message-option-container" id="message-option-a"><div class="reflection"></div><h3 class="message-option-response" id="response-1"></h3></div><h3 class="message-option-response" id="response-2"></h3></div><div class="chat-bubble"><div class="loading"><div class="dot one"></div><div class="dot two"></div><div class="dot three"></div></div><div class="tail"></div></div>');
  $("#response-1").text("Respond");
  function showLatestMessage() {
    $(element).find('.messages').scrollTop($(element).find('.messages').height());
  }
  showLatestMessage();

  $(element + ' input[type="text"]').keypress(function (event) {
    if (event.which == 13) {
      event.preventDefault();
      $(element + ' input[type="submit"]').click();
    }
  });
  $(element + ' input[type="submit"]').click(function (event) {
    event.preventDefault();
    var message = $(element + ' input[type="text"]').val();
    if ($(element + ' input[type="text"]').val()) {
      var d = new Date();
      var clock = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      var month = d.getMonth() + 1;
      var day = d.getDate();
      var currentDate =
      (("" + day).length < 2 ? "0" : "") +
      day +
      "." +
      (("" + month).length < 2 ? "0" : "") +
      month +
      "." +
      d.getFullYear() +
      "&nbsp;&nbsp;" +
      clock;
      $(element + ' div.messages').append(
        '<div class="message"><div class="myMessage"><p>' +
        message +
        "</p><date>" +
        currentDate +
        "</date></div></div>"
      );
      // setTimeout(function () {
      //   $(element + ' > span').addClass("spinner");
      // }, 100);
      // setTimeout(function () {
      //   $(element + ' > span').removeClass("spinner");
      // }, 2000);
    }
    $(element + ' input[type="text"]').val("");
    showLatestMessage();
  });
}
$(".messages").append("<div class='chat-bubble'><div class='loading'><div class='dot one'></div><div class='dot two'></div><div class='dot three'></div></div><div class='tail'></div></div>");

function responsiveChatPush(element, sender, origin, date, message) {
  var originClass;
  if (origin == 'me') {
    originClass = 'myMessage';
  } else {
    originClass = 'fromThem';
  }
  if (originClass == 'myMessage') {
    $('#sent').get(0).play();
  }
  if (originClass == 'fromThem') {
    // $('#received').get(0).play();
    $(".chat-bubble").fadeIn(400);
    }
  setTimeout(function () {
    $(".chat-bubble").fadeOut(100);
    $(element + ' .messages').append('<div class="message"><div class="' + originClass + '"><p>' + message + '</p><date><b>' + sender + '</b> ' + date + '</date></div></div>');
  }, 1000);

  // $('.messages').scrollTop($('.messages')[0].scrollHeight);
  setTimeout(function () {
  }, 100);
  // setTimeout(function () {
  //   $(element + ' > span').removeClass("spinner");
  // }, 2000);
  $('.messages').animate({ scrollTop: $(document).height() }, 1000);
  return false;
}

/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Let's push some dummy data */
$(".chat-container").fadeIn(200);
// $(".messages").append("<div class='chat-bubble'><div class='loading'><div class='dot one'></div><div class='dot two'></div><div class='dot three'></div></div><div class='tail'></div></div>");
// $(".chat-bubble").fadeIn(200).delay(1000).fadeOut(100);
// $(".messages").removeClass('chat-bubble'); g
setTimeout(function(){
  responsiveChatPush('.chat', 'Haley', 'you', '', 'Hey :)');
}, 700);
setTimeout(function(){
  responsiveChatPush('.chat', 'Haley', 'you', '', 'How has your week been?');
}, 1500);
$(".message-option-container").delay(3000).transition({opacity: 1});
$(".explanation").delay(3000).transition({opacity: 1});

$(document).on('click',"#message-option-a",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'It&#39;s been a long week of work, finally looking forward to the weekend haha');
  $(".explanation-text").transition({opacity:0});
  $("#response-1").transition({opacity:0});
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '', 'And you?');
  }, 1500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Haley', 'you', '', 'I&#39;m still recovering from last night &#128540; Currently relaxing with a game on my phone, called castle clash lol');
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Haley', 'you', '', 'You heard of it?');
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Say no");
    $(".explanation-text").transition({opacity:1}).html("These bots are scripted to answer with the same responses no matter what you say, and they are usually run by unscrupulous marketing and app promotion companies who can create thousands of these bots.");
  }, 6000);
  setTimeout(function() {
    $("#message-option-a").delay(3500).attr("id","message-option-a-1");
  }, 6000);
  // $("#message-option-1").remove();
});

$(document).on('click',"#message-option-a-1",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Can&#39;t say I have');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Haley', 'you', '', 'You should play it, I downloaded it the other day and now I&#39;m addicted');
  }, 1500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Haley', 'you', '', 'If you beat me in Castle Clash, I&#39;ll consider giving you a date');
  }, 3500);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Question your match");
    $(".explanation-text").transition({opacity:1}).html("The app&#39;s developers denied any involvement in this scam, which is doubtful. But needless to say, it doesn&#39;t really reflect well on these companies to be resorting to such tactics to boost its downloads.");
  }, 5500);
  $("#message-option-a-1").attr('id','message-option-a-2');
});

$(document).on('click',"#message-option-a-2",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Is that a challenge?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '', 'You seem to be really into this game');
  }, 1500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Haley', 'you', '', 'My username is lilygram52, lmk your username when you&#39;re done and we can keep on chatting there &#128517;');
  }, 4000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Haley', 'you', '', 'http://www.tinderverified.com/castleclash');
  }, 5500);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Respond');
    $(".explanation-text").transition({opacity:1}).html("<p>There is an entire dark ecosystem of less-than-savory <a target=”_blank” href='https://www.wickedfire.com/shooting-the-shit/181829-spamming-tinder.html'>internet marketing forums </a> with spammers trading tips for steering clear of Tinder&#39;s spam detection systems and not raising users&#39; suspicions.</p>");
  }, 7000);
  $("#message-option-a-2").attr('id','message-option-a-3');
});

$(document).on('click',"#message-option-a-3",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Lol please tell me you&#39;re not advertising');
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $(".message-option-container").css({backgroundColor: "#333333", color: "white"});
    $(".message-option-response").css({color: "white"});
    $("#response-1").text('Learn about next scam');
    $("#response-1").transition({opacity:1});
    $(".explanation-text").transition({opacity:1}).html("&ldquo;Dont respond to msgs [sic] all at once or immediately; you will get busted pretty quick,&rdquo; wrote one forum user named cygon, &ldquo;Spend some time to make your bot more personal. Your conversions will skyrocket. Once a guy gets feels a little emotionally involved he will go above and beyond to get a date.&rdquo;");
  }, 3500);
  $(".reflection").delay(5000).css({backgroundColor: "#BDBDBD"});
  $("#message-option-a-3").attr('id','message-option-a-4');
});

$(document).on('click',"#message-option-a-4",function(){
  window.location = "foreign-love.html";
});


// responsiveChatPush('.chat', 'Me', 'me', '08.03.2016 14:31:22', 'It looks like the iPhone message box.');
// responsiveChatPush('.chat', 'Kate', 'me', '08.03.2016 14:33:32', 'Yep, is this design responsive?');
// responsiveChatPush('.chat', 'Kate', 'me', '08.03.2016 14:36:4', 'By the way when I hover on my message it shows date.');
// responsiveChatPush('.chat', 'John Doe', 'you', '08.03.2016 14:37:12', 'Yes, this is completely responsive.');
// responsiveChatPush('.chat', 'John Doe', 'me', '08.03.2016 14:37:12', 'Yeehaw');

/* DEMO */
if (parent == top) {
  $("a.article").show();
}

$('.messages').scrollTop($('.messages')[0].scrollHeight);
console.log($('.messages').scrollTop($('.messages')[0].scrollHeight));
