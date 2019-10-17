var windw = this;

$( document ).ready(function() {
    $(document).on("scroll", function(){
      $("#depth-num").text($(document).scrollTop()-80000);
    });
});

$.fn.followTo = function ( pos ) {
  var $this = this,
  $window = $(windw);

  $window.scroll(function(e){
    if ($window.scrollTop() > pos) {
      $this.css({
        position: 'absolute',
        top: pos
      });
    } else {
      $this.css({
        position: 'fixed',
        top: 0
      });
    }
  });
};
