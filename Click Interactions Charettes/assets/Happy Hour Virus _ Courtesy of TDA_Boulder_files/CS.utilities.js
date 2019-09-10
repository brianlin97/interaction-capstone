var CS = CS || {};
CS.util = CS.util || {};

/************************************
*	GENERAL
************************************/
window.log = function () {
	log.history = log.history || [];
	log.history.push(arguments);
	if ('console' in self && 'log' in console) {
		console.log(Array.prototype.slice.call(arguments));
	}
};

CS.util.hasFlashPlugin = function() {
	var UNDEF = "undefined",
		OBJECT = "object",
		SHOCKWAVE_FLASH = "Shockwave Flash",
		SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
		FLASH_MIME_TYPE = "application/x-shockwave-flash",
		plugin = false,
		nav = navigator;

	if (typeof nav.plugins != UNDEF && typeof nav.plugins[SHOCKWAVE_FLASH] == OBJECT) {
		d = nav.plugins[SHOCKWAVE_FLASH].description;
		if (d && !(typeof nav.mimeTypes != UNDEF && nav.mimeTypes[FLASH_MIME_TYPE] && !nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) { // navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin indicates whether plug-ins are enabled or disabled in Safari 3+
			plugin = true;
		}
	}

	return plugin;	
};


/************************************
*	OBJECTS/ARRAYS
************************************/
CS.util.getArrayByObjectKey = function(obj, key) {	
	var ary = [];
	$each(obj, function (v, k) {
		ary.push(v[key]);
	});
	return ary;
};	

CS.util.inObject = function(obj, key, val) {	
	var found = false;
	
	if (obj != undefined) {
		$each(obj, function (v, k) {
			if (key == k && val == v) {
				found = true;
			}
			else if (typeof v == 'object') {
				found = CS.util.inObject(v,key,val);
			}
		});
	}
	
	return found;
};

CS.util.safeObject = function(obj, key) {	
	return (obj[key] != undefined) ? obj[key] : {};
};

CS.util.sizeOf = function(obj) {	
	ct=0;
	
	if (obj != undefined) {
		for (i in obj) {
			ct++;
		};
	}
	return ct;
};

CS.util.isArray = function(obj) {
	return typeof obj === 'object' && Object.prototype.toString().call(obj) === '[object Array]';
}

CS.util.isObject = function(obj) {
	return typeof obj === 'object' && obj.toString() === '[object Object]';
}

CS.util.arrayShuffle = function(o){
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

CS.util.arrayRandItem = function(ary) {	
	return ary[Math.round(Math.random()*(ary.length-1))];
};


/************************************
*	NUMBERS
************************************/
CS.util.parseNumber = function (str) {	
	return parseInt(str.toString().replace(/[^\d\.]/g,''), 10);
};		

CS.util.ifDefined = function (objToTest, objToReturnSuccess, objToReturnFailure) {	
	if (objToTest == undefined)
		return objToReturnFailure;
	else
		return objToReturnSuccess;
};	

CS.util.zeroPad = function (number, width) {
	 width -= number.toString().length;
	  if (width > 0)
		return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
	  else
		return number;
};

CS.util.splitUrlVars = function (strUrl) {
	var getData = new Array();

	try {
	var vars = strUrl.split('?')[1];
	} catch(e){}
	if (vars) {
		vars = vars.substr(0);

		var pairs = vars.split("&");

		for (var i = 0; i < pairs.length; i++) {
			var formData = pairs[i].split("=");
			var name = formData[0];
			var value = formData[1];
			getData[name] = value;
		}
	}

	return getData;
};

CS.util.getUrlVar = function(url, name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


/************************************
*	DATES
************************************/
CS.util.jsToMysqlDate = function (jsDate) {
	return jsDate.getFullYear() + '-' +
    (jsDate.getMonth() < 9 ? '0' : '') + (jsDate.getMonth()+1) + '-' +
    (jsDate.getDate() < 10 ? '0' : '') + jsDate.getDate();
};

CS.util.mysqlToJSDate = function (mysqlDate) {
	var pac_time = new Date();
    var parts = String(mysqlDate).split(/[- :]/);
    pac_time.setFullYear(parts[0]);
    pac_time.setMonth(parts[1] - 1);
    pac_time.setDate(parts[2]);
    pac_time.setHours(parts[3]);
    pac_time.setMinutes(parts[4]);
    pac_time.setSeconds(parts[5]);
    pac_time.setMilliseconds(0);

    // mysql gave us pacific, so substract UTC offset and add back local offset
    var local_offset_millisec = pac_time.getTimezoneOffset() * 60 * 1000; // minutes -> millsec
    var pacific_offset_millisec = 25200000; // 7*60*60*1000 - note works with PDT, not PST!
    var realLocalTime = new Date(pac_time.getTime() - local_offset_millisec + pacific_offset_millisec);

    return realLocalTime.toString();
};


/************************************
*	STRINGS
************************************/
CS.util.isValidEmail = function(email) {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
	return emailPattern.test(email);  
};		

CS.util.pluralize = function (count, singular) {	
	var plural = (arguments.length == 3) ? arguments[2] : singular + 's';
	return (count == 1) ? singular : plural;
};

CS.util.capitalize = function(str) {
    return str.charAt(0).toUpperCase() + this.slice(1);
};

CS.util.appendTo = function (obj, str) {	
	if (obj == undefined)
		obj = '';
	return obj + str;
};	

CS.util.defaultValue = function (var1, var2) {	
	if (var1 == undefined)
		var1 = '';
		
	return (var1.split(' ').join('') != '') ? var1 : var2;
};

CS.util.toSlug = function(str) {
    return str
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
    ;
};

CS.util.ucwords = function(str) {
  return (str + '').replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function ($1) {
    return $1.toUpperCase();
  });
};

CS.util.fileToString = function(str) {
	str = str.substr(0, str.lastIndexOf('.')).replace(/_/g, ' ').replace(/-/g, ' ');
	return CS.util.ucwords(str);
};

CS.util.isLineBreak = function(str) {
	return (str.match(/\r\n|\r|\n/g));
};

/************************************
*	META TAGS
************************************/
CS.util.setTitle = function(title) {
	document.title = title;
};

CS.util.setMeta = function(metaName, name, value) {
	value = value.split('"').join('&quot;');
	var tag = 'meta['+metaName+'='+name+']';
	var metaTag = $(tag);
	if (metaTag.length === 0) {
		tag = '<meta '+metaName+'="'+name+'" />';
		metaTag = $(tag).appendTo('head');
	}
	metaTag.attr('content', value);
};

CS.util.setDefaultMeta = function() {
	$.each(WB.home.metaName, function (k, v) {
		CS.util.setMeta('name', k, v);
	});
	$.each(WB.home.metaProps, function (k, v) {
		CS.util.setMeta('property', k, v);
	});
};
	
