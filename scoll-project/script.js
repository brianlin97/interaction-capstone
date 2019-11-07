var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

console.log(window.innerHeight);

var RADIUS = 100;

var RADIUS_SCALE = 1;
var RADIUS_SCALE_MIN = 1;
var RADIUS_SCALE_MAX = 5;

var QUANTITY = 5;

var canvas;
var context;
var particles;

var mouseX = SCREEN_WIDTH * 0.5;
var mouseY = SCREEN_HEIGHT * 0.5;
var mouseIsDown = false;

$( document ).ready(function() {

  var lastScrollTop = 0;

  function init() {

    canvas = document.getElementById( 'world' );

    if (canvas && canvas.getContext) {
      context = canvas.getContext('2d');

      // Register event listeners
      // document.addEventListener("scroll", createParticles);
      window.setInterval(createParticles, 3000);
      document.addEventListener('mousemove', documentMouseMoveHandler, true);
      window.addEventListener('mousedown', documentMouseDownHandler, false);
      window.addEventListener('mouseup', documentMouseUpHandler, false);
      document.addEventListener('touchstart', documentTouchStartHandler, false);
      document.addEventListener('touchmove', documentTouchMoveHandler, false);
      window.addEventListener('resize', windowResizeHandler, false);

      createParticles();

      windowResizeHandler();

      setInterval( loop, .1 / 1 );
    }
  }



  particles = [];
  function createParticles() {


    var particle = {
      size: 10,
      position: { x: mouseX  , y: mouseY },
      offset: { x: 0, y: 0 },
      shift: { x: mouseX, y: mouseY },
      speed: 0.01+Math.random()*0.04,
      targetSize: 10,
      fillColor: '#' + (Math.random() * 0x404040 + 0xaaaaaa | 0).toString(16),
      // fillColor: "#ff6666",
      orbit: RADIUS*.5 + (RADIUS * .5 * Math.random())
    };
    particles.push( particle );
    console.log(particles);
  }

  function documentMouseMoveHandler(event) {
    mouseX = Math.floor(event.clientX - (window.innerWidth - SCREEN_WIDTH) * .5);
    mouseY = Math.floor(event.clientY - (window.innerHeight - SCREEN_HEIGHT) * .5);
  }

  function documentMouseDownHandler(event) {
    mouseIsDown = true;
  }

  function documentMouseUpHandler(event) {
    mouseIsDown = false;
  }

  function documentTouchStartHandler(event) {
    if(event.touches.length == 1) {
      event.preventDefault();

      mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;;
      mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
    }
  }

  function documentTouchMoveHandler(event) {
    if(event.touches.length == 1) {
      event.preventDefault();

      mouseX = event.touches[0].pageX - (window.innerWidth - SCREEN_WIDTH) * .5;;
      mouseY = event.touches[0].pageY - (window.innerHeight - SCREEN_HEIGHT) * .5;
    }
  }

  function windowResizeHandler() {
    SCREEN_WIDTH = window.innerWidth;
    SCREEN_HEIGHT = window.innerHeight;

    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
  }

  function debounce(func, wait, immediate) {
    // 'private' variable for instance
    // The returned function will be able to reference this due to closure.
    // Each call to the returned function will share this common timer.
    var timeout;

    // Calling debounce returns a new anonymous function
    return function() {
      // reference the context and args for the setTimeout function
      var context = this,
        args = arguments;

      // Should the function be called now? If immediate is true
      //   and not already in a timeout then the answer is: Yes
      var callNow = immediate && !timeout;

      // This is the basic debounce behaviour where you can call this
      //   function several times, but it will only execute once
      //   [before or after imposing a delay].
      //   Each time the returned function is called, the timer starts over.
      clearTimeout(timeout);

      // Set the new timeout
      timeout = setTimeout(function() {

        // Inside the timeout function, clear the timeout variable
        // which will let the next execution run when in 'immediate' mode
        timeout = null;

        // Check if the function already ran with the immediate flag
        if (!immediate) {
          // Call the original function with apply
          // apply lets you define the 'this' object as well as the arguments
          //    (both captured before setTimeout)
          func.apply(context, args);
        }
      }, wait);

      // Immediate mode and no wait timer? Execute the function..
      if (callNow) func.apply(context, args);
    }
  }

  // Define the debounced function
  var debouncedMouseMove = debounce(loop, 5000000);
  //
  // Call the debounced function on every mouse move
  window.addEventListener("mousemove",loop);



  function loop() {
    RADIUS_SCALE = Math.min( RADIUS_SCALE, RADIUS_SCALE_MAX );
    var color = 0;
    context.fillStyle = 'rgba(color, color, color)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    $(window).bind('mousewheel', function(event) {
      if (event.originalEvent.wheelDelta >= 0) {
        if (particle.size > 500) {
          particle.size = 500;
        }
        particle.size -= .05;
        console.log('mouse X is ' + mouseX);
        console.log('Scroll up');
      }
      else {
        if (particle.size < 10) {
          particle.size = 10
        }
        particle.size += .05;
      }
    console.log("wheelDelta is " + event.originalEvent.wheelDelta);
    });

    color++;
    console.log("color num is " + color);
    for (i = 0, len = particles.length; i < len; i++) {
      var particle = particles[i];

      var lp = { x: particle.position.x, y: particle.position.y };

      // Rotation
      particle.offset.x += particle.speed * .2;
      particle.offset.y += particle.speed * .1;

      // Follow mouse with sag
      particle.shift.x += ( mouseX - particle.shift.x) * (particle.speed) *.5;
      particle.shift.y += ( mouseY - particle.shift.y) * (particle.speed);

      // Apply position
      particle.position.x = particle.shift.x + Math.cos(i + particle.offset.x) * (particle.orbit*RADIUS_SCALE)
      // particle.position.x = mouseX -= .05;
      particle.position.y = particle.shift.y + Math.sin(i + particle.offset.y) * (particle.orbit*RADIUS_SCALE);

      // // Limit to screen bounds
      // if (particle.position.x <10 || particle.position.x > SCREEN_WIDTH) {
      //   mouseX = 100;
      //   mouseY = 100;
      //   console.log("reached bounds");
      // }
      //
      // if (particle.position.y > SCREEN_HEIGHT || particle.position.y < 10) {
      //   mouseX = 500;
      //   mouseY = 500;
      // }

      // $(window).bind('mousewheel', function(event) {
      //   if (event.originalEvent.wheelDelta >= 0) {
      //     if (particle.size > 50) {
      //       particle.size = 50;
      //     }
      //     // particle.size += .01;
      //     mouseX += .005;
      //     console.log('Scroll up');
      //   }
      //   else {
      //     if (particle.size < 5) {
      //       particle.size = 5
      //     }
      //     // particle.size -= .01;
      //     mouseY += .005;
      //   }
      // });

      var random = Math.floor((Math.random() * 2))
      context.beginPath();
      context.fillStyle = particle.fillColor;
      context.strokeStyle = particle.fillColor;
      context.lineWidth = particle.size;
      context.moveTo(lp.x, lp.y);
      context.lineTo(particle.position.x, particle.position.y);
      context.stroke();
      context.arc(particle.position.x, particle.position.y, particle.size/2, 0, Math.PI*2, true);
      context.fill();
    }
  }

  window.onload = init;
  console.log( "ready!" );
  $("#instruction1").fadeOut(10000);
  $("#intro").fadeOut(5000);
});
