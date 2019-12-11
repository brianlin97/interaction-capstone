let claimArray = [
  {
    claim: "The wall is moving rapidly. Large sections are being built every day. More contracts are being given out.",
    check: "No, Trump’s wall is not yet being built. Congress inserted specific language in its appropriations bill that none of the $1.57 billion appropriated for border protection may be used for prototypes of a concrete wall that Trump observed while in California.",
    count: 218
  },
  {
    claim: "Impeached for what, having created the greatest Economy in the history of our Country, building our strongest ever Military, Cutting Taxes too much?",
    check: "The president can certainly brag about the state of the economy, but he runs into trouble when he makes a play for the history books. By just about any important measure, the economy today is not doing as well as it did under Presidents Dwight D. Eisenhower, Lyndon B. Johnson or Bill Clinton — or Ulysses S. Grant.",
    count: 204
  },
  {
    claim: "Look, we've lost $500 billion a year for many, many years on average.",
    check: "Trump routinely inflates the size of the trade deficit with China. The U.S. trade deficit in goods and services in 2018 with China was $378 billion. Trump often just cites the goods deficit, which was $375 billion in 2017 and $419 billion in 2018, according to the Census Bureau. Despite Trump's trade war, the trade deficit has kept increasing during his term. In any case, countries do not make or lose money on trade deficits.",
    count: 171
  },
  {
    claim: "We have passed the largest tax cuts and reform, and also regulation cuts, in the history of country.",
    check: "Trump’s tax cut amounts to nearly 0.9 percent of the gross domestic product, meaning it is far smaller than President Ronald Reagan’s tax cut in 1981, which was 2.89 percent of GDP. Trump’s tax cut is the eighth largest tax cut — and even smaller than two tax cuts passed under Barack Obama.",
    count: 171
  },
  {
    claim: "We went through two years of Mueller, and that came out like a 10. It came out perfect. And a few days go by and they start this nonsense.",
    check: "President Trump frequently said the special counsel's investigation was a witch hunt or a hoax. Special counsel Robert Mueller revealed significant criminal activity by some of Trump's campaign advisers and by Russian individuals and entities. Mueller concluded Russian government actors successfully hacked into computers and obtained emails from persons associated with the Clinton campaign and Democratic Party organizations, and then publicly disseminated those materials through various intermediaries, including WikiLeaks, to sow discord in the United States, hurt Clinton and help Trump.",
    count: 167
  },
  {
    claim: "[Democrats] want open borders.",
    check: "Trump is fear mongering here. Democrats generally do not advocate for illegal immigration, and have repeatedly put forth immigration bills that both include a DACA solution and new border security measures. Sometimes Trump even claims Democrats 'don't mind crime.' Plus, as we've previously reported, most independent research contradicts the idea that illegal immigrants bring more crime.",
    count: 152
  },
  {
    claim: "We've spent $2.5 trillion since I've been President, and rebuilt our military. When I came in, we were low on ammunition and, as you know, we had jets that didn't work too well.",
    check: "The military budget has declined in recent years, as a result of decreases in funding for Overseas Contingency Operations as both the wars in Iraq and Afghanistan came to a close, not because it's been so gravely depleted. Trump frequently says his military budgets are biggest in history, but adjusted for inflation he lags years during the height of the Iraq war.",
    count: 124
  }
];
console.log("claim array length is " + claimArray.length);
console.log(claimArray[0].claim);

$(document).ready(function() {

  $(".btn").on("mouseover", function() {
    $("#btn-text").text("I'm not a puppet I'm a real boy");
    $("#btn-text").css({"font-size":"10px", "left": "25%"});
  });

  // run test on initial page load
  var day = 1;
  var claim = 0;
  checkSize();

  var $window = $(window),
  previousDimensions = {
    width: $window.width(),
    height: $window.height()
  };

  // run test on resize of the window
  $(window).resize(checkSize);
  $(window).resize(function() {
    var newDimensions = {
      width: $window.width(),
      height: $window.height()
    };

    if (newDimensions.width > previousDimensions.width) {
      day = parseInt(day)+10;
      claim = parseInt(claim)+200;
      // console.log(day);
      $("#day-count").text(day);
      $("#claim-count").text(claim);
      if (parseInt(day) > 993) {
        $("#day-count").text(993);
        day = 993;
      }
      if (parseInt(claim) > 13435) {
        $("#claim-count").text(13435);
        claim = 13435;
      }
    } else {
      day = parseInt(day)-10;
      claim = parseInt(claim)-200;
      if (parseInt(day) < 0) {
        $("#day-count").text(1);
        day = 1;
      }
      if (parseInt(claim) < 0) {
        $("#claim-count").text(0);
        claim = 0;
      }
      // console.log(day);
      $("#day-count").text(day);
      $("#claim-count").text(claim);
    }

    // Store the new dimensions
    previousDimensions = newDimensions;
  });

  var count = 0;
  function loopClaims() {
      setTimeout(function () {
          console.log(count);
          $("#text-caption-1").fadeIn(500);
          $("#text-display-1").text(claimArray[count].claim);
          $("#text-caption-1").text(claimArray[count].check);
          $("#repeat-count").text(claimArray[count].count);
          // $("#text-caption-1").fadeOut(5500);
          count++;
          if (count == 7) {
            count = 0;
          }
          loopClaims();
      }, 5000);
  }

  function lipAnimate() {
      $("#lip-closed").fadeOut(function() {
          $("#lip-closed").fadeIn(lipAnimate).delay(1500);
      })
  }
  lipAnimate();

  loopClaims();


  //Function to the css rule
  function checkSize(){

    if ($(".nose-base").css("width") == "50px" ){
      $("#text-display-1").empty();
      $("#text-caption-1").empty();
    }

    // if ($(".nose-base").css("width") == "70px" ){
    //   var num = Math.floor(Math.random() * 7) + 1;
    //   // $("#text-display-1").text("The worst mistake that the United States has ever made, in my opinion, was going into the Middle East.");
    //   $("#text-display-1").text(claimArray[num].claim);
    //   // $("#text-display-2").empty();
    //   // $("#text-display-3").empty();
    //   $("#text-caption-1").text(claimArray[num].check);
    //   // $("#text-caption-2").empty();
    //   // $("#text-caption-3").empty();
    // }
    //
    // if ($(".nose-base").css("width") == "360px" ){
    //   var num = Math.floor(Math.random() * 7) + 1;
    //   $("#text-display-1").text(claimArray[num].claim);
    //   $("#text-caption-1").text(claimArray[num].check);
    // }

    // if ($(".nose-base").css("width") == "1200px" ){
    //   $("#text-display-3").text("I signed the largest package of tax cuts and reforms in the history of our country.");
    //   $("#text-display-2").empty();
    //   $("#text-display-1").empty();
    //   $("#text-caption-1").empty();
    //   $("#text-caption-2").empty();
    //   $("#text-caption-3").text("Trump's tax cut amounts to nearly 0.9 percent of the gross domestic product, meaning it is far smaller than President Ronald Reagan's tax cut in 1981, which was 2.89 percent of GDP. Trump's tax cut is the eighth largest tax cut — and even smaller than two tax cuts passed under Barack Obama.")
    // }
  }


});
