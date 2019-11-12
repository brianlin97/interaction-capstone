$(document).ready(function() {

	function myFunction(x) {
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		var colors = ["#DABFFF", "#907AD6", "#4F518C", "#2C2A4A", "#7FDEFF"];
		var colorSet;
		if (x.matches) { // If media query matches
			for (var i = 1; i < 10; i++) {
				$("#" + i).css({"background-color": '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});

			}
			console.log($(".grid-item-color"));
			document.body.style.backgroundColor = "black";
		}
		else {
			$(".grid-item-color").css({"background-color": '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});
		}
	}

	function change2(change2) {
		function getRandomInt(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		if (change2.matches) { // If media query matches
			for (var i = 1; i < 10; i++) {
				$("#" + i).css({"background-color": '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});

			}
			console.log($(".grid-item-color"));
			$(".grid-item-color").css({"background-color": '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)});2
		}
		console.log("ready!!");
	}
		var x = window.matchMedia("(min-width: 1000px) and (max-width: 1500px)")
		myFunction(x) // Call listener function at run time
		x.addListener(myFunction) // Attach listener function on state changes

		var change2 = window.matchMedia("(min-width: 500px) and (max-width: 1000px)");
		myFunction(change2) // Call listener function at run time
		change2.addListener(change2) // Attach listener function on state changes


});
