$(document).ready(function() {


  // $("body").click(function() {
  //   var randomSize = Math.floor(Math.random() * 4) + 1;
  //   $('.grid').css({"grid-template-columns": "repeat(auto-fill, minmax(" + randomSize + "rem, 1fr)"});
  // });

  $(".fade").mouseenter(function() {
    $("#intro").animate("opacity", 1);
  });

  $("#reset").click(function() {
    location.reload(true);
  });

  jQuery.cssNumber.gridColumnStart = true;
  jQuery.cssNumber.gridColumnEnd = true;
  jQuery.cssNumber.gridRowStart = true;
  jQuery.cssNumber.gridRowEnd = true;
  jQuery.cssNumber.gridRowStart = true;
  jQuery.cssNumber.gridRowEnd = true;
  // for (var i = 0; i < 1500; i ++){
  //   $(".grid").append("<div class='grid-item'></div>")
  // }

  //for choosing between two classes
  function coinFlip() {
    return Math.floor(Math.random() * 2);
  }

  const grid = document.querySelector(".grid");
  animateCSSGrid.wrapGrid(grid, {duration : 600});

  $("#components").mouseenter(function(event){
    $(".components-header h2").animate({opacity: 1});
    $(".fade").animate({opacity: 1});
    $(".components-text").animate({opacity: 1});
    });

  $("#components").mouseout(function(event){
    $(".components-header h2").animate({opacity: 0});
    $(".components-text").animate({opacity: 0});
    $(".fade").animate({opacity: 0});
  });


  $(".square-module").mouseenter(function(event){
    $(this).stop();
    //set random number
    var random = coinFlip();
    console.log("random is "+random);

    //top
    $(".square-module-top").each(function (i, obj) {
      if (random == 1) {
        return false;
      }

      else {
        if ($(".square-module-top").hasClass("square-module-top-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".square-module").removeClass("square-module-top-expanded-2");
          // $(".square-module-bottom").css({"gridColumnStart": originTopColumn+2, "gridColumnEnd": originTopColumn-3});
          $(this).stop();
          $(".square-module-top").css({"width": "100%"});
        } else {
          $(".square-module-top").addClass("square-module-top-expanded-2");
          $(this).stop();
          // $(".square-module-top-expanded").css({"gridColumnStart": originTopColumn-2, "gridColumnEnd": originTopColumn+3});
          $(".square-module-top-expanded-2").css({"width": "150%"});
        }
        return false;
      }

    });

    $(".square-module-bottom").each(function (i) {
      // $(this).toggleClass("square-module-bottom")
      if (random == 1) {
        //bottom
        if ($(".square-module-bottom").hasClass("square-module-bottom-expanded")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".square-module").removeClass("square-module-bottom-expanded");
          $(this).stop();
          $(".square-module-bottom").css({"width": "100%", "bottom": "150%"});
          // $(".square-module-bottom").css({"gridRowStart": originBottomRow-3, "gridRowEnd": originBottomRow-3});

        } else {
          $(".square-module-bottom").addClass("square-module-bottom-expanded");
          $(this).stop();
          $(".square-module-bottom-expanded").css({"width": "100%", "top": "100%"});
          // $(".square-module-bottom-expanded").css({"gridRowStart": originBottomRow+3, "gridRowEnd": originBottomRow+3});
        }
        return false;
      }

      else {
        if ($(".square-module-bottom").hasClass("square-module-bottom-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".square-module").removeClass("square-module-bottom-expanded-2");
          $(this).stop();
          // $(".square-module-bottom").css({"gridColumnStart": originBottomColumn+2, "gridColumnEnd": originBottomColumn-3});
          $(".square-module-bottom").css({"width": "100%", "bottom": "100%", "top": ""});
        } else {
          $(".square-module-bottom").addClass("square-module-bottom-expanded-2");
          $(this).stop();
          // $(".square-module-bottom-expanded").css({"gridColumnStart": originBottomColumn-2, "gridColumnEnd": originBottomColumn+3});
          $(".square-module-bottom").css({"width": "140%"});
        }
        return false;
      }

    });

    //right
    $(".square-module-right").each(function (i) {

      if (random == 1) {
        if ($(".square-module-right").hasClass("square-module-right-expanded")) {
          $(".square-module").removeClass("square-module-right-expanded");
          $(this).stop();
          // $(".square-module-right").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+3});
          $(".square-module-right").css({"height":"100%"});
        } else {
          $(".square-module-right").addClass("square-module-right-expanded");
          $(this).stop();
          // $(".square-module-right-expanded").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+5});
          $(".square-module-right-expanded").css({"height":"150%"});
        }
        return false;
      }

      else {
        if ($(".square-module-right").hasClass("square-module-right-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".square-module").removeClass("square-module-right-expanded-2");
          $(this).stop();
          // $(".square-module-right").css({"gridColumnStart": originRowColumn+2, "gridColumnEnd": originRowColumn-3});
          $(".square-module-right").css({"height":"50%"});
        } else {
          $(".square-module-right").addClass("square-module-right-expanded-2");
          $(this).stop();
          $(".square-module-right-expanded-2").css({"height":"100%", "left": "150%"});
        }
        return false;
      }
    });

    //left
    $(".square-module-left").each(function (i) {

      if (random == 1) {
        if ($(".square-module-left").hasClass("square-module-left-expanded")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".square-module").removeClass("square-module-left-expanded");
          $(this).stop();
          $(".square-module-left").css({"height":"100%"});
          // $(".square-module-left").css({"gridRowStart": originLeftRow, "gridRowEnd": originLeftRow+3});
        } else {
          $(".square-module-left").addClass("square-module-left-expanded");
          $(this).stop();
          $(".square-module-left-expanded").css({"height":"160%"});
          // $(".square-module-left-expanded").css({"gridRowStart": originLeftRow, "gridRowEnd": originLeftRow+5});
        }
        return false;
      }

      else {
        if ($(".square-module-left").hasClass("square-module-left-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".square-module").removeClass("square-module-left-expanded-2");
          $(this).stop();
          $(".square-module-left").css({"height":"50%"});

        } else {
          $(".square-module-left").addClass("square-module-left-expanded-2");
          $(this).stop();
          $(".square-module-left-expanded-2").css({"height":"100%"});
        }
        return false;
        // $("#square-top").toggleClass("square-module-top-expanded-2");
        // $("#square-bottom").toggleClass("square-module-bottom-expanded-2");
        // $("#square-left").toggleClass("square-module-left-expanded-2");
      }
    });
  });


  // HORSESHOE MODULE
  $(".horseshoe-module").mouseenter(function(event){
    //set random number
    var random = coinFlip();
    console.log("random is "+random);

    //top
    $(".horseshoe-module-top").each(function (i, obj) {
      // console.log($(".horseshoe-module-top").length)
      // var originTopRow = parseInt($(this).css('grid-row-start'));
      // var originTopColumn = parseInt($(this).css('grid-column-start'));
      // console.log("origin top Row is " + originTopRow);

      if (random == 1) {
        return false;
      }

      else {
        if ($(".horseshoe-module-top").hasClass("horseshoe-module-top-expanded-2")) {
          $(".horseshoe-module").removeClass("horseshoe-module-top-expanded-2");
          $(".horseshoe-module-top").css({"width": "100%"});
        } else {
          $(".horseshoe-module-top").addClass("horseshoe-module-top-expanded-2");
          $(".horseshoe-module-top-expanded-2").css({"width": "120%"});
        }
        return false;
      }

    });



    $(".horseshoe-module-bottom").each(function (i) {
      if (random == 1) {
        //bottom
        if ($(".horseshoe-module-bottom").hasClass("horseshoe-module-bottom-expanded")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".horseshoe-module").removeClass("horseshoe-module-bottom-expanded");
          $(".horseshoe-module-bottom").css({"width": "100%"});
          console.log(originBottomRow);
          // $(".square-module-bottom").css({"gridRowStart": originBottomRow-3, "gridRowEnd": originBottomRow-3});

        } else {
          $(".horseshoe-module-bottom").addClass("horseshoe-module-bottom-expanded");
          $(".horseshoe-module-bottom-expanded").css({"width": "150%"});
          // $(".square-module-bottom-expanded").css({"gridRowStart": originBottomRow+3, "gridRowEnd": originBottomRow+3});
        }
        return false;
      }

      else {
        if ($(".horseshoe-module-bottom").hasClass("horseshoe-module-bottom-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".horseshoe-module").removeClass("horseshoe-module-bottom-expanded-2");
          // $(".square-module-bottom").css({"gridColumnStart": originBottomColumn+2, "gridColumnEnd": originBottomColumn-3});
          $(".horseshoe-module-bottom").css({"width": "80%", "bottom": "100%"});
        } else {
          $(".horseshoe-module-bottom").addClass("horseshoe-module-bottom-expanded-2");
          // $(".square-module-bottom-expanded").css({"gridColumnStart": originBottomColumn-2, "gridColumnEnd": originBottomColumn+3});
          $(".horseshoe-module-bottom").css({"width": "150%", "top": "100%"});
        }
        return false;
      }

    });

    //right
    $(".horseshoe-module-right").each(function (i) {

      if (random == 1) {
        if ($(".horseshoe-module-right").hasClass("horseshoe-module-right-expanded")) {
          $(".horseshoe-module").removeClass("horseshoe-module-right-expanded");
          // $(".square-module-right").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+3});
          $(".horseshoe-module-right").css({"height":"100%"});
        } else {
          $(".horseshoe-module-right").addClass("horseshoe-module-right-expanded");
          // $(".square-module-right-expanded").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+5});
          $(".horseshoe-module-right-expanded").css({"height":"150%", "left": "150%"});
        }
        return false;
      }

      else {
        if ($(".horseshoe-module-right").hasClass("horseshoe-module-right-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".horseshoe-module").removeClass("horseshoe-module-right-expanded-2");
          // $(".square-module-right").css({"gridColumnStart": originRowColumn+2, "gridColumnEnd": originRowColumn-3});
          $(".horseshoe-module-right").css({"height":"50%"});
        } else {
          $(".horseshoe-module-right").addClass("horseshoe-module-bottom-expanded-2");
          $(".horseshoe-module-right-expanded-2").css({"height":"100%", "left": "30%"});
        }
        return false;
      }
    });
  });


  // HORSESHOE MODULE hinge-module-lefthinge-module-left
  $(".horseshoe-module-flipped").mouseenter(function(event){
    //set random number
    var random = coinFlip();
    console.log("random is "+random);

    //top
    $(".horseshoe-module-flipped-top").each(function (i, obj) {
      // console.log($(".horseshoe-module-top").length)
      // var originTopRow = parseInt($(this).css('grid-row-start'));
      // var originTopColumn = parseInt($(this).css('grid-column-start'));
      // console.log("origin top Row is " + originTopRow);

      if (random == 1) {
        if ($(".horseshoe-module-flipped-top").hasClass("horseshoe-module-flipped-top-expanded")) {
          $(".horseshoe-module-flipped").removeClass("horseshoe-module-flipped-top-expanded");
          $(".horseshoe-module-flipped-top").css({"width": "100%"});
        } else {
          $(".horseshoe-module-flipped-top").addClass("horseshoe-module-flipped-top-expanded");
          $(".horseshoe-module-flipped-top-expanded").css({"width": "100%", "bottom": "210%"});
        }
        return false;
      }

      else {
        if ($(".horseshoe-module-flipped-top").hasClass("horseshoe-module-flipped-top-expanded-2")) {
          $(".horseshoe-module-flipped").removeClass("horseshoe-module-flipped-top-expanded-2");
          $(".horseshoe-module-flipped-top").css({"width": "100%"});
        } else {
          $(".horseshoe-module-flipped-top").addClass("horseshoe-module-flipped-top-expanded-2");
          $(".horseshoe-module-flipped-top-expanded-2").css({"width": "210%"});
        }
        return false;
      }

    });



    $(".horseshoe-module-flipped-bottom").each(function (i) {
      if (random == 1) {
        //bottom
        if ($(".horseshoe-module-flipped-bottom").hasClass("horseshoe-module-flipped-bottom-expanded")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".horseshoe-module-flipped").removeClass("horseshoe-module-flipped-bottom-expanded");
          $(".horseshoe-module-flipped-bottom").css({"width": "100%"});
          // $(".square-module-bottom").css({"gridRowStart": originBottomRow-3, "gridRowEnd": originBottomRow-3});

        } else {
          $(".horseshoe-module-flipped-bottom").addClass("horseshoe-module-flipped-bottom-expanded");
          $(".horseshoe-module-flipped-bottom-expanded").css({"width": "150%"});
          // $(".square-module-bottom-expanded").css({"gridRowStart": originBottomRow+3, "gridRowEnd": originBottomRow+3});
        }
        return false;
      }

      else {
        if ($(".horseshoe-module-flipped-bottom").hasClass("horseshoe-module-flipped--bottom-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".horseshoe-module-flipped").removeClass("horseshoe-module-bottom-expanded-2");
          // $(".square-module-bottom").css({"gridColumnStart": originBottomColumn+2, "gridColumnEnd": originBottomColumn-3});
          $(".horseshoe-module-flipped-bottom").css({"width": "80%", "bottom": "100%"});
        } else {
          $(".horseshoe-module-flipped-bottom").addClass("horseshoe-module-flipped-bottom-expanded-2");
          // $(".square-module-bottom-expanded").css({"gridColumnStart": originBottomColumn-2, "gridColumnEnd": originBottomColumn+3});
          $(".horseshoe-module-flipped-bottom").css({"width": "150%", "top": "100%"});
        }
        return false;
      }

    });

    //right
    $(".horseshoe-module-flipped-left").each(function (i) {

      if (random == 1) {
        if ($(".horseshoe-module-flipped-left").hasClass("horseshoe-module-flipped-left-expanded")) {
          $(".horseshoe-module-flipped").removeClass("horseshoe-module-flipped-left-expanded");
          // $(".square-module-right").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+3});
          $(".horseshoe-module-flipped-left").css({"height":"100%"});
        } else {
          $(".horseshoe-module-flipped-left").addClass("horseshoe-module-flipped-left-expanded");
          // $(".square-module-right-expanded").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+5});
          $(".horseshoe-module-flipped-left-expanded").css({"height":"150%", "bottom": "60%"});
        }
        return false;
      }

      else {
        if ($(".horseshoe-module-flipped-left").hasClass("horseshoe-module-flipped-left-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".horseshoe-module-flipped").removeClass("horseshoe-module-flipped-left-expanded-2");
          // $(".square-module-right").css({"gridColumnStart": originRowColumn+2, "gridColumnEnd": originRowColumn-3});
          $(".horseshoe-module-right-flipped").css({"height":"50%"});
        } else {
          $(".horseshoe-module-flipped-left").addClass("horseshoe-module-flipped-bottom-expanded-2");
          $(".horseshoe-module-flipped-left-expanded-2").css({"height":"100%", "left": "30%"});
        }
        return false;
      }
    });
  });

  // HINGE MODULE
  $(".hinge-module").mouseenter(function(event){
    //set random number
    var random = coinFlip();
    console.log("random is "+random);

    //top
    $(".hinge-module-top").each(function (i, obj) {
      if ($(".hinge-module-top").hasClass("hinge-module-top-expanded")) {
        $(".hinge-module").removeClass("hinge-module-top-expanded");
        $(".hinge-module-top").css({"width": "100%"});
      } else {
        $(".hinge-module-top").addClass("hinge-module-top-expanded");
        $(".hinge-module-top-expanded-2").css({"width": "60%"});
      }
      if (random == 1) {
        return false;
      }

      else {
        if ($(".hinge-module-top").hasClass("hinge-module-top-expanded-2")) {
          $(".hinge-module").removeClass("hinge-module-top-expanded-2");
          $(".hinge-module-top").css({"width": "100%"});
        } else {
          $(".hinge-module-top").addClass("hinge-module-top-expanded-2");
          $(".hinge-module-top-expanded-2").css({"width": "150%"});
        }
        return false;
      }

    });



    $(".hinge-module-bottom").each(function (i) {
      if (random == 1) {
        //bottom
        if ($(".hinge-module-bottom").hasClass("hinge-module-bottom-expanded")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".hinge-module").removeClass("hinge-module-bottom-expanded");
          $(".hinge-module-bottom").css({"width": "100%"});
          console.log(originBottomRow);
          // $(".square-module-bottom").css({"gridRowStart": originBottomRow-3, "gridRowEnd": originBottomRow-3});

        } else {
          $(".hinge-module-bottom").addClass("hinge-module-bottom-expanded");
          $(".hinge-module-bottom-expanded").css({"width": "150%"});
          // $(".square-module-bottom-expanded").css({"gridRowStart": originBottomRow+3, "gridRowEnd": originBottomRow+3});
        }
        return false;
      }

      else {
        if ($(".hinge-module-bottom").hasClass("hinge-module-bottom-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".hinge-module").removeClass("hinge-module-bottom-expanded-2");
          // $(".square-module-bottom").css({"gridColumnStart": originBottomColumn+2, "gridColumnEnd": originBottomColumn-3});
          $(".hinge-module-bottom").css({"width": "80%", "bottom": "100%"});
        } else {
          $(".hinge-module-bottom").addClass("horseshoe-module-bottom-expanded-2");
          // $(".square-module-bottom-expanded").css({"gridColumnStart": originBottomColumn-2, "gridColumnEnd": originBottomColumn+3});
          $(".hinge-module-bottom").css({"width": "150%", "top": "100%"});
        }
        return false;
      }

    });

    //right
    $(".hinge-module-left").each(function (i) {

      if (random == 1) {
        if ($(".hinge-module-left").hasClass("hinge-module-left-expanded")) {
          $(".hinge-module").removeClass("hinge-module-left-expanded");
          // $(".square-module-right").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+3});
          $(".hinge-module-left").css({"height":"100%"});
        } else {
          $(".hinge-module-left").addClass("hinge-module-left-expanded");
          // $(".square-module-right-expanded").css({"gridRowStart": originRightRow, "gridRowEnd": originRightRow+5});
          $(".hinge-module-left-expanded").css({"height":"150%", "top": "60%"});
        }
        return false;
      }

      else {
        if ($(".hinge-module-left").hasClass("hinge-module-left-expanded-2")) {
          // $(".square-module-bottom").removeClass("square-module-bottom-expanded");
          $(".hinge-module").removeClass("hinge-module-left-expanded-2");
          // $(".square-module-right").css({"gridColumnStart": originRowColumn+2, "gridColumnEnd": originRowColumn-3});
          $(".hinge-module-left").css({"height":"100%"});
        } else {
          $(".hinge-module-left").addClass("hinge-module-left-expanded-2");
          $(".hinge-module-left-expanded-2").css({"height":"100%", "top": "30%"});
        }
        return false;
      }
    });
  });

  // TITTLE
  $(".tittle-module").mouseenter(function(event){
    //set random number
    var random = coinFlip();

    //top
    $(".tittle-module-top").each(function (i, obj) {

      if (random == 1) {
        if ($(".tittle-module-top").hasClass("tittle-module-top-expanded")) {
          $(".tittle-module-top").removeClass("tittle-module-top-expanded");
          $(".tittle-module-top").css({"height": "100%", "bottom": "150%"});
        } else {
          $(".tittle-module-top").addClass("tittle-module-top-expanded");
          $(".tittle-module-top-expanded").css({"height": "150%", "bottom": "150%"});
        }
        return false;
      }

      else {
        if ($(".tittle-module-top").hasClass("tittle-module-top-expanded-2")) {
          $(".tittle-module-top").removeClass("tittle-module-top-expanded-2");
          $(".tittle-module-top").css({"height": "100%", "top": ""});
        } else {
          $(".tittle-module-top").addClass("tittle-module-top-expanded-2");
          $(".tittle-module-top-expanded-2").css({"width": "150%", "top": "60%"});
        }
        return false;
      }
    });

    //side
    $(".tittle-module-side").each(function (i, obj) {

      if (random == 1) {
        if ($(".tittle-module-side").hasClass("tittle-module-side-expanded")) {
          $(".tittle-module-side").removeClass("tittle-module-side-expanded");
          $(".tittle-module-side").css({"width": "100%"});
        } else {
          $(".tittle-module-side").addClass("tittle-module-side-expanded");
          $(".tittle-module-side-expanded").css({"width": "210%"});
        }
        return false;
      }

      else {
        if ($(".tittle-module-side").hasClass("tittle-module-side-expanded-2")) {
          $(".tittle-module-side").removeClass("tittle-module-side-expanded-2");
          $(".tittle-module-side").css({"width": "100%"});
        } else {
          $(".tittle-module-side").addClass("tittle-module-side-expanded-2");
          $(".tittle-module-side-expanded-2").css({"width": "300%"});
        }
        return false;
      }
    });
  });

  // THREE CROSSBAR MODULE
  $(".three-crossbar-module").mouseenter(function(event){
    //set random number
    var random = coinFlip();

    //VERTICAL
    //top
    $(".three-crossbar-module").each(function (i, obj) {
      var originTopRow = parseInt($(this).css('grid-row-start'));
      var originTopColumn = parseInt($(this).css('grid-column-start'));

      if (random == 1) {
        if ($(".three-crossbar-module").hasClass("three-crossbar-module-expanded")) {
          $(".three-crossbar-module").removeClass("three-crossbar-module-expanded");
          $(".three-crossbar-module").css({"height": "100%"});

          $(".three-crossbar-module-horizontal").removeClass("three-crossbar-module-horizontal-expanded");
          $(".three-crossbar-module-horizontal").css({"height": "100%", "top": ""});
        } else {
          $(".three-crossbar-module").addClass("three-crossbar-module-expanded");
          $(".three-crossbar-module-expanded").css({"height": "180%"});

          $(".three-crossbar-module-horizontal").addClass("three-crossbar-module-horizontal-expanded");
          $(".three-crossbar-module-horizontal-expanded").css({"height": "100%", "top": "240%"});
        }
        return false;
      }

      else {
        if ($(".three-crossbar-module").hasClass("three-crossbar-module-expanded-2")) {
          $(".three-crossbar-module").removeClass("three-crossbar-module-expanded-2");
          $(".three-crossbar-module").css({"height": "100%"});
        } else {
          $(".three-crossbar-module").addClass("three-crossbar-module-expanded-2");
          $(".three-crossbar-module-expanded-2").css({"height": "100%", "left": "100%"});

          $(".three-crossbar-module-horizontal").addClass("three-crossbar-module-horizontal-expanded-2");
          $(".three-crossbar-module-horizontal-expanded-2").css({"width": "210%"});
        }
        return false;
      }
    });
  });


  // SIX CROSSBAR MODULE
  $(".six-crossbar-module").mouseenter(function(event){
    //set random number
    var random = coinFlip();

    //top
    $(".six-crossbar-module").each(function (i, obj) {
      var originTopRow = parseInt($(this).css('grid-row-start'));
      var originTopColumn = parseInt($(this).css('grid-column-start'));

      if (random == 1) {
        if ($(".six-crossbar-module").hasClass("six-crossbar-module-expanded")) {
          $(".six-crossbar-module").removeClass("six-crossbar-module-expanded");
          $(".six-crossbar-module").css({"height": "100%", "width": "100%"});
        } else {
          $(".six-crossbar-module").addClass("six-crossbar-module-expanded");
          $(".six-crossbar-module-expanded").css({"height": "150%"});
        }
        return false;
      }

      else {
        if ($(".six-crossbar-module").hasClass("six-crossbar-module-expanded-2")) {
          $(".six-crossbar-module").removeClass("six-crossbar-module-expanded-2");
          $(".six-crossbar-module").css({"height": "100%", "width": "100%"});
        } else {
          $(".six-crossbar-module").addClass("six-crossbar-module-expanded-2");
          $(".six-crossbar-module-expanded-2").css({"height": "70%"});
        }
        return false;
      }
    });
  });

});
