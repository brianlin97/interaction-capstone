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
  responsiveChatPush('.chat', 'ToasterStrudel', 'you', '', 'Heyyy handsome &#128522');
}, 700);
setTimeout(function(){
  responsiveChatPush('.chat', 'ToasterStrudel', 'you', '', 'What you doing right now? :)');
}, 1500);
$(".message-option-container").delay(3000).transition({opacity: 1});
$(".explanation").delay(3000).transition({opacity: 1});

$(document).on('click',"#message-option-a",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Just chillin at home, wbu?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'ToasterStrudel', 'you', '', 'Finally a decent guy on here! I was beginning to lose <br> hope :stuck_out_tongue_closed_eyes:');
  }, 3000);
  setTimeout(function() {
    $("#message-option-a").delay(3500).attr("id","message-option-a-1");
  }, 2000);
  $(".explanation-text").transition({opacity:0});
  $("#response-1").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Ask a question");
    $(".explanation-text").transition({opacity:1}).html("They also never seem to fully respond to your messages and respond with strange syntax. Something's off here.");
  }, 4000);
  // $("#message-option-1").remove();
});

$(document).on('click',"#message-option-a-1",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'What&#8217;s with that emoji?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'ToasterStrudel', 'you', '', 'I&#8217;m on my way to bin 152, was meeting a friend but I think shes going to flake :(');
  }, 3000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Ask another question");
    $(".explanation-text").transition({opacity:1}).html("Again, your match is trying to change the conversation.");
  }, 4000);
  $("#message-option-a-1").attr('id','message-option-a-2');
});

$(document).on('click',"#message-option-a-2",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Whats bin 152? Is it like a restaurant?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'ToasterStrudel', 'you', '', 'Its a  restarant, so goood');
  }, 3000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Test the bot');
    $(".explanation-text").transition({opacity:1}).html("More advanced bots can respond to simple questions since they have a database of responses they can pull from. However, if you ask a nuanced question, they may change the subject by saying something completely unrelated.");
  }, 4000);
  $("#message-option-a-2").attr('id','message-option-a-3');
});

$(document).on('click',"#message-option-a-3",function(){
  responsiveChatPush('.chat', 'Me', 'me', '08.03.2017 14:30:7', 'I hear music in the background. Or is that just me?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Kate', 'you', '08.03.2017 14:30:7', 'You&#8217;re so fun to talk to, i  wanna know you better!');
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Kate', 'you', '08.03.2017 14:30:7', 'I have get off my phone now can you add me http://facebok.com/connect/ToasterStrudel Talk to u soon &#128540');
  }, 4500);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $(".explanation-text").transition({opacity:1}).html("Link scammers often want to lure you into connecting with them on Facebook or Whatsapp, but may be a fake link with those names misspelled.");
  }, 5000);
  $(".reflection").delay(5000).css({backgroundColor: "#BDBDBD"});
  $(".message-option-container").delay(3500).css({backgroundColor: "#333333", color: "white"});
  $(".message-option-response").delay(3500).css({color: "white"});
  $("#response-1").delay(5000).text('Learn about next scam');
  $("#message-option-a-3").attr('id','message-option-a-4');
});

$(document).on('click',"#message-option-a-4",function(){
  window.location = "promotion-scam.html";
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
