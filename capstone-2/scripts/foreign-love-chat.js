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
  responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'Hello, nice meeting you, hope we can be friends Pretty damsel?');
}, 700);
$(".message-option-container").delay(3000).transition({opacity: 1});
$(".explanation").delay(3000).transition({opacity: 1});

$(document).on('click',"#message-option-a",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Sure, I would like to be friends eventually.');
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'You are beautiful, for me, you are the best woman in the world');
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'How is your husband and kids?');
  }, 4500);
  setTimeout(function() {
    $("#message-option-a").delay(3500).attr("id","message-option-a-1");
  }, 4000);
  $(".explanation-text").transition({opacity:0});
  $("#response-1").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Respond");
    $(".explanation-text").transition({opacity:1}).html("They will soon ask you if you&#39;re married early in the conversation so he doesn&#39;t waste his time grooming someone who won&#39;t respond to his relationship overtones. Other sneaky ways they fish for this include: <br> Do you live alone? <br> Do you live with your family?");
  }, 5000);
  // $("#message-option-1").remove();
});

$(document).on('click',"#message-option-a-1",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'I&#39;m single... that&#39; why I&#39;m on here');
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'Ah yes, I am single as well. I am a widower. I lost my wife through Maigrain a serious headach 3 years ago. I was emotionally devastated when my wife died, but I stay firm and strong for my beautiul daughter lisa...');
  }, 3000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text("Respond");
    $(".explanation-text").transition({opacity:1}).html("Once they know you are single, they will launch into their backstory. Without exception, he will always have a tragic story that he lost his wife and/or parents. Of course, any man who is looking for a wife needs a sob story because he is just looking for the perfect woman who can make them feel love again. That is where you come in.");
  }, 4500);
  $("#message-option-a-1").attr('id','message-option-a-2');
});

$(document).on('click',"#message-option-a-2",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'Oh, Im sorry to hear that. That must be very hard for you.');
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'Yes, it very hard');
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '', 'I am now a soldier, currently on peace keeping mission in Yemen. I have been here at the camp for 18 months now and i should be retired or transferred from here in less than 3 months');
  }, 4500);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Ask about Yemen');
    $(".explanation-text").transition({opacity:1}).html("A scammer will often say he is on a &#39;peacekeeping mission&#39; in Syria or Afghanistan. The words &#39;peacekeeping mission&#39; are a huge red flag-US military just doesn&#39;t say that. <br> The distance and time zone difference mean they aren&#39;t very available to talk. And your new love interest certainly can&#39;t meet you in person if he&#39;s on the other side of the world.");
  }, 5500);
  $("#message-option-a-2").attr('id','message-option-a-3');
});

$(document).on('click',"#message-option-a-3",function(){
  responsiveChatPush('.chat', 'Me', 'me', '08.03.2017 14:30:7', 'That&#39;s interesting. Tell me more about your job and experience in Yemen.');
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '08.03', 'It was a lot of fun');
  }, 3000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Keep on probing');
    $(".explanation-text").transition({opacity:1}).html("If you are suspicious you're talking to a romance scammer, probe them with questions. These scammers are often international and have poor English skills, and will often deflect questions or stick to a script.");
  }, 5000);
  $("#message-option-a-3").attr('id','message-option-a-4');
});

$(document).on('click',"#message-option-a-4",function(){
  responsiveChatPush('.chat', 'Me', 'me', '', 'That is all you have to say about your job?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'Me', 'me', '', 'I don&#39;t know if you are who you say you are');
  }, 1500);
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '08.03', 'You&#39;t believe me? I am in Yemen now.');
  }, 3500);
  $(".chat-container").delay(6000).fadeOut(2000).fadeIn(2000);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    $(".explanation-text").transition({opacity:1}).html("1 month later...");
  }, 5000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '09.15', 'honey am so sorry job has been taking so much off my time, I dropped a tear in the ocean, the day that I find it is the day I&#39;ll stop loving you');
  }, 11000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '09.15', 'My army deployment is finished I want to be with you, but I need money for flights and visa to visit.');
  }, 13000);
  setTimeout(function(){
    $("#response-1").transition({opacity:1});
    $("#response-1").text('Challenge the scammer');
    responsiveChatPush('.chat', 'arthur.langley', 'you', '09.15', 'Can you send me $1000? Thank you very much for your support. I miss you and you are always on my mind');
  }, 15000);
  $("#message-option-a-4").attr('id','message-option-a-5');
});

$(document).on('click',"#message-option-a-5",function(){
  responsiveChatPush('.chat', 'Me', 'me', '09.15', 'I thought you said you were deployed for 3 months? It&#39;s only been a month and your deployment&#39;s finished?');
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '08.03', 'We just came back to the camp from under covered mission');
  }, 3000);
  setTimeout(function(){
    responsiveChatPush('.chat', 'arthur.langley', 'you', '08.03', 'I will be leaving here soon to see my daughter lisa and you. Do you have western union?');
  }, 4500);
  $("#response-1").transition({opacity:0});
  $(".explanation-text").transition({opacity:0});
  setTimeout(function(){
    // $(".explanation-text").transition({opacity:1}).html("It often starts with something relatively inexpensive as a means of testing the waters, but can quickly escalate to large sums of money. Scammers will claim that they need a loan to pay for travel to get back home, to pay for a phone or computer so they can keep in touch, cover a major medical bill or anything else that may play upon the empathy of their victim. These scammers are masterful storytellers, building trusting relationships over a long period of time with you. To learn more about this type of scam, here is an actual playbook from a <a href="assets.documentcloud.org/documents/6544402/Nigerian-Scammers-Playbook.pdf">Nigerian scammer</a>");
  }, 5000);
  $(".reflection").delay(5000).css({backgroundColor: "#BDBDBD"});
  $(".message-option-container").delay(5000).css({backgroundColor: "#333333", color: "white"});
  $("#response-1").delay(5000).text('Learn about next scam');
  $("#message-option-a-5").attr('id','message-option-a-6');
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
