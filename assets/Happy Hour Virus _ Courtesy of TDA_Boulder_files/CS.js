var CS 			= CS || {};
CS.util 		= CS.util || {};

$(document).ready( function(){	
	CS.loadingURL 	= (!Modernizr.apng) ? CS.basePath + 'images/admin/loading4.gif' : CS.basePath + 'images/admin/loading4.png';
	CS.loading 		= $('<div></div>').attr({'class':'loading'}).html( '<div><span></span><img src="'+CS.loadingURL+'" /></div>' );
	
	/*
	$('body').waitForImages(function() {				
		}, function(loaded, count, success) {	
		},
		true
	);
	*/
	
	CS.home();
	
	
	$('.modal_close').on('click', function(){
		$.fancybox.close();
		return false;
	});
});	

CS.home = function() {
	
	CS.fillLevel = $('#fill_level');
	CS.setFill();	
	$(document).scroll(CS.setFill);
	
	CS.hand = $('#hand');
	CS.selections = $('#selection li');
	CS.nextHand();
	CS.selectionInterval = setInterval(CS.nextHand, 3000);
	
	$('.fb').click( function(e) {
		CS.shareFB("Happy Hour can be Happy again thanks to the #happyhourvirus. It will 'break' your computer until you hit ESC, which we don't recommend doing until the next morning. It's the perfect excuse to get out of the office and into something more fun.", 'http://www.happyhourvirus.com/images/share.png');
		return false;
	});
	
	$('.tw').click( function(e) {
		CS.shareTwitter($(this), "Leaving work early thanks to the #happyhourvirus. Head to happyhourvirus.com if you want to join me.", 'http:happyhourvirus.com');
		return true;
	});
	
	$('#monitor').click(function(){
		$('html, body').animate({scrollTop: $('#selections').offset().top}, '1000', 'swing', function() { 
			log('done');
		});
	});
	
	CS.selectionTimer = {};
	CS.selections.hover(function(){		
		var self = this;
		CS.selectionTimer[$(self).attr('class')] = setInterval(function(){$(self).toggleClass('selected');}, 500);
	}, function(){
		for(var i in CS.selectionTimer) {
			log(i);
			clearInterval(CS.selectionTimer[i]);
		}
	});
	
	CS.selections.click(function(){
		var func = $(this).attr('class').replace('selection_', '').replace(' selected', ''),
			countdown = $('#selections_countdown'),
			inner = $('#selections_inner');
		CS[func]();
		
		/*
		inner.fadeOut(500, function(){
			countdown.html('');
			CS.typeString(countdown, 'THROW A FIT IN ...3 ...2 ...1', 0, 100, function(){
				inner.fadeIn(500);
			});
		});
		*/
	});
};

CS.shareFB = function(description, picture) {	
	if(description == undefined) {
		description = "I just received a coupon for $2 off any nutritious and delicious Van's product! You can get in on the goodness too. Discover love at first bite: " + CS.FB_TAB_URL_TINY;
	}
	if(picture == undefined) {
		picture = 'http://www.happyhourvirus.com/images/share.png';
	}
	
	var obj = {
		method: 		'feed',
		link: 			'http://www.happyhourvirus.com/',
		picture: 		picture,
		name: 			"Happy Hour Virus - Courtesy of TDA_Boulder",
		caption: 		"",
		description: 	description
	};
	log(obj);
	function callback(response) {
	  //document.getElementById('msg').innerHTML = "Post ID: " + response['post_id'];
	}
	FB.ui(obj, callback); 
};

CS.shareTwitter = function(obj, text) {
	if(text == undefined) {	
		text = "I just received a coupon for $2 off any Van's product. You can get in on the goodness too:";
	}
	var url = 'https://twitter.com/intent/tweet?text=' + escape(text) + '&url=' + escape(CS.FB_TAB_URL_TINY);
	obj.attr('href', url);
	obj.attr('target', '_blank');
};


CS.blue = function(){
	
	var blue = $('#blue');
	
	CS.blueContent = CS.blueContent || blue.find('p');
	CS.blueCopy = CS.blueCopy || CS.blueContent.html();
	CS.blueContent.html('');	
	blue.show();
	blue.fullscreen();
	CS.typeString(CS.blueContent, CS.blueCopy, 0, 10, null);
	
	$(document).bind('fscreenchange', function(e, state, elem) {
		if (!$.fullscreen.isFullScreen()) {
			if (CS.typeString.timeout != undefined) {
				clearTimeout(CS.typeString.timeout);
				blue.hide();
			}
		}
	});
};

CS.kernal = function(){
	
	var kernal = $('#kernal');
	
	kernal.fullscreen();
	kernal.show();
	kernal.find('.image').stop().css('height', 0).animate({'height': '556px'}, 2000);
			
	$(document).bind('fscreenchange', function(e, state, elem) {
		if (!$.fullscreen.isFullScreen()) {
			kernal.hide();
		}
	});
};

CS.broken = function(){
	log('here');
	var broken = $('#broken');
	
	broken.fullscreen();
	broken.show();
			
	$(document).bind('fscreenchange', function(e, state, elem) {
		if (!$.fullscreen.isFullScreen()) {
			broken.hide();
		}
	});
};

CS.nextHand = function() {
	CS.selected = ((CS.selected == undefined) || (CS.selected == CS.selections.length-1)) ? 0 : CS.selected+1;
	CS.setHand(CS.selections[CS.selected]);
};

CS.setHand = function(el) {
	var left = $(el).position().left - 90;
	
	//CS.selections.trigger('mouseleave');
	CS.hand.animate({'left':left + 'px'}, 500, function(){
		//$(el).trigger('mouseenter');
		//$(el).addClass('selected');
	});
};

CS.setFill = function(){
	var max = 34,
		top = $(document).scrollTop(),
		docHeight = $(document).height(),
		winHeight = $(window).height();
		scroll = (top/(docHeight-winHeight+1)),
		level = max - (max * scroll * 3); // added *3 to make it fill faster for smaller screens
	
	CS.fillLevel.css('height', Math.max(level, 0) + 'px')
};

CS.throttle = (function() {
	return function (fn, delay) {
		delay || (delay = 100);
		var last = +new Date;
		return function () {
			var now = +new Date;
			if (now - last > delay) {
				fn.apply(this, arguments);
				last = now;
			}
		};
	};
})();

CS.typeString = function($target, str, cursor, delay, cb) {
    $target.html(function (_, html) {
		
		var text = (CS.util.isLineBreak(str[cursor])) ? '<br />' : str[cursor];
		
      return html + text;
    });
    
    if (cursor < str.length - 1) {
      CS.typeString.timeout = setTimeout(function () {
        CS.typeString($target, str, cursor + 1, delay, cb);
      }, delay);
    }
    else if (cb) {
      cb();
    }
};

$.fn.loopingAnimation = function(props, dur, eas){
    if ($(this).data('loop') == true){
       $(this).animate(props, dur, eas, function(){
           if ($(this).data('loop') == true) {
			$(this).loopingAnimation(props, dur, eas);
		   }
       });
    }
    return this;
};
