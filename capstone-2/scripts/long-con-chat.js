/*

Name    : Responsive HTML5 Chat

Responsive HTML5 Chat helps you to create useful chatbox on your website easly.
You can change skin and sizes. You can read the installation and support documentation
before you begin. If you do not find the answer, do not hesitate to send a message to me.

Owner   : Vatanay Ozbeyli
Web     : www.vatanay.com
Support : hi@vatanay.com

*/

$(document).on('click',".expand",function(){
$("#show-more-text").fadeIn(300);
$(".expand").removeClass("expand").addClass("hide").html("<p>- HIDE<p>");
});

$(document).on('click',".hide",function(){
$("#show-more-text").fadeOut(300);
$(".hide").removeClass("hide").addClass("expand").html("<p>+ SHOW MORE<p>");
});

// $(".expand").click(function() {
//   $("#show-more-text").fadeIn(300);
//   $(".expand")
// });

// function scrollSmoothToBottom(id) {
//   var div = document.getElementByClassName(id)[0];
//   $('#' + id).animate({
//     scrollTop: div.scrollHeight - div.clientHeight
//   }, 500);
//   console.log(div);
// }


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
  $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight}, 1000);
  console.log($('.messages')[0].scrollHeight);
  return false;
}

/* Activating chatbox on element */
responsiveChat('.responsive-html5-chat');

/* Let's push some dummy data */
// $(".chat-container").fadeIn(200);

// setTimeout(function(){
//   responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'Hello, nice meeting you, hope we can be friends Pretty damsel?');
// }, 700);
// $(".chat-bubble").css({"display": "none"});
$(".message-option-container").transition({opacity: 1});
$(".explanation").transition({opacity: 1});
$(".reflection").delay(5000).css({backgroundColor: "#BDBDBD"});
$(".message-option-container").delay(5000).css({backgroundColor: "#333333", color: "white"});
$("#response-1").delay(5000).css({color: "white"}).text('Start the con');

$(document).on('click',"#message-option-a",function(){
  $(".reflection").css({backgroundColor: "#9DDCFF"});
  $(".message-option-container").css({backgroundColor: "#52BDF9", color: "black"});
  $(".message-option-response").css({color: "black"});
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '7.15', 'Yes baby, would be going to India for a business trip, but I went to do a little shopping before');
  }, 500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '7.15', 'I got you a custom suit, a new iPhone, and Gucci bag. Check your messages for the photos &#x1f648;');
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '7.15', 'I dont want any one stealing you away form me or treating you in a better way than me &#x1f60b;');
  }, 4500);
  setTimeout(function() {
    $("#message-option-a").delay(3500).attr("id","message-option-a-1");
  }, 5500);
  $(".explanation-text").transition({opacity:0});
  $("#response-1").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Respond");
    $(".explanation-text").transition({opacity:1}).html("Once you have chatted with a scammer for a while and built up a connection, they may want to send you &ldquo;gifts&rdquo; to show their affection.");
  }, 5000);
  // $("#message-option-1").remove();
});

$(document).on('click',"#message-option-a-1",function(){
  responsiveChatPush('.chat', 'Me', 'me', '7.15', 'Aww, you didn&#39;t have to! Thank you so much!!!');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '7.15', 'Of course baby &#128536; What is your delivery address for me to send to?');
  }, 3000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Give work address");
    $(".explanation-text").transition({opacity:1}).html("Be very careful about giving someone you met online your home address or personal information. If you have to, give a work or non-personal address.");
  }, 4500);
  $("#message-option-a-1").attr('id','message-option-a-2');
});

$(document).on('click',"#message-option-a-2",function(){
  responsiveChatPush('.chat', 'Me', 'me', '7.15', 'Can you send it to **********');
  setTimeout(function(){
  responsiveChatPush('.chat', 'Me', 'me', '7.15', 'I can&#39;t wait!');
  }, 1500);
  $(".chat-container").delay(3000).fadeOut(2000).fadeIn(2000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $(".explanation-text").transition({opacity:1}).html("3 weeks later...");
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '8.10', 'Baby, i got text from Boston that your packages has arrive. Baby.. please let me know once you have them. Its 3 boxes love. Don&#39;t open the big box till am back love &#x1f648; Going in for a meetings now');
  }, 9000);
  $("#response-1").transition({opacity:0});
  setTimeout(function(){
    $(".explanation-text").transition({opacity:1}).html("Sophisticated scammers are part of syndicates working multiple con artists. Other people posing as customs officers or government officials may contact you and ask you to pay some sort of fee with the original scammer trying to convince you to pay them, making it seem real.");
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Respond');
  }, 11000);
  $("#message-option-a-2").attr('id','message-option-a-3');
});

$(document).on('click',"#message-option-a-3",function(){
  responsiveChatPush('.chat', 'Me', 'me', '8.10', 'This was so thoughtful of you');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '8.10', 'The courier company just called me to confirm the address. I think she said the packages are going through customs now!');
  }, 3000);
  $(".chat-container").delay(5000).fadeOut(2000).fadeIn(2000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $(".explanation-text").transition({opacity:1}).html("A few hours later...");
  }, 6000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '8.10', 'The same courier lady called me again, saying one of the boxes had an envelope of foreign currency that needed to be declared. She said I needed to pay &euro;1500 to declare it and to continue shipment?');
  }, 11500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '8.10', 'And to pay another &euro;100 to convert it into USD?');
  }, 13000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '8.10', 'Im so sorry baby I wanted to surprise you for your birthday');
  }, 14500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '8.10', 'I have many more surprise gifts in there :) Can you send customs the fee and then I will send it back');
  }, 16000);
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Pay customs fee');
  }, 16000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  $("#message-option-a-3").attr('id','message-option-a-4');
});

$(document).on('click',"#message-option-a-4",function(){
  $("#response-1").transition({opacity:0});
  responsiveChatPush('.chat', 'Me', 'me', '', 'Ok, I just paid the US customs, she said the packages are cleared and will arrive tomorrow morning');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '8.10', 'Ok baby. I will send you $200 more so I can relase your stress');
  }, 1500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'Cris', 'you', '8.10', 'Finished my meetings, already on my way to town to western union');
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Ask for update');
    $("#message-option-a-4").attr('id','message-option-a-5');
  }, 3000);
});

$(document).on('click',"#message-option-a-5",function(){
  responsiveChatPush('.chat', 'Me', 'me', '8.11', 'Hello? Any updates? I tried calling the customs number but nobody picked up');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '8.11', 'Why aren&#39;t you responding?');
  }, 6000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $(".explanation-text").transition({opacity:1}).html("Once you sent the scammers money, its often too late. They use fake IDs to create bank accounts so once a 24-hour time period has passed the money is withdrawn from the account and the account is closed, rendering the money and the scammer untraceable.");
  }, 5000);
  $(".reflection").delay(5000).css({backgroundColor: "#BDBDBD"});
  $(".message-option-container").delay(5000).css({backgroundColor: "#333333", color: "white"});
  $(".message-option-response").css({color: "white"});
  $("#response-1").delay(5000).css({color: "white"}).text('Back to home page');
  $("#message-option-a-5").attr('id','message-option-a-6');
});

$(document).on('click',"#message-option-a-6",function(){
  window.location = "intro.html";
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
// $('.messages').scrollTop(5000);
console.log($('.messages')[0].scrollHeight);
