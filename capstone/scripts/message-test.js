var chatMessages = [{
  name: "ms1",
  msg: "Say potato if you're real",
  delay: 100,
  align: "right",
  showTime: true,
  time: "7:40"
},
{
  name: "ms2",
  msg: "&#129364 Is this real enough?",
  delay: 2000,
  align: "left",
  showTime: true,
  time: "7:42"
},
{
  name: "ms3",
  msg: "In 2016, the FBI’s International Crime Complaint Center received more than 15,000 romance scam complaints in 2016.",
  delay: 2500,
  align: "left",
  showTime: false,
  time: "7:42"
},
{
  name: "ms3",
  msg: "This website is created to protect you against these types of scams.",
  delay: 2600,
  align: "left",
  showTime: false,
  time: "7:42"
}

                   ];
var chatDelay = 0;

function onRowAdded() {
  $('.chat-container').animate({
    scrollTop: $('.chat-container').prop('scrollHeight')
  });
};
$.each(chatMessages, function(index, obj) {
  chatDelay = chatDelay + 1000;
  chatDelay2 = chatDelay + obj.delay;
  chatDelay3 = chatDelay2 + 10;
  scrollDelay = chatDelay;
  chatTimeString = " ";
  msgname = "." + obj.name;
  msginner = ".messageinner-" + obj.name;
  spinner = ".sp-" + obj.name;
  if (obj.showTime == true) {
    chatTimeString = "<span class='message-time'>" + obj.time + "</span>";
  }
  $(".chat-message-list").append("<li class='message-" + obj.align + " " + obj.name + "' hidden><div class='sp-" + obj.name + "'><span class='spinme-" + obj.align + "'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-" + obj.name + "' hidden><span class='message-text'>" + obj.msg + "</span>" + chatTimeString + "</div></li>");
  $(msgname).delay(chatDelay).fadeIn();
  $(spinner).delay(chatDelay2).hide(1);
  $(msginner).delay(chatDelay3).fadeIn();
  setTimeout(onRowAdded, chatDelay);
  setTimeout(onRowAdded, chatDelay3);
  chatDelay = chatDelay3;
});
