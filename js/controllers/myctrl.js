app.controller("myCtrl", function($scope) {
	var clockNumbers = ["0px -10px", "390px -10px", "250px -10px",
					    "140px -10px", "10px 330px", "-120px 330px",
					    "270px 330px", "150px 330px", "10px 160px",
					    "390px 160px", "190px 180px"];
	var mattTime = function() {
		$("#seconds").hide();
		var nowDate = new Date();
		var nowSeconds = Math.floor((nowDate.getSeconds() % 10));
		var nowTenSeconds = Math.floor((nowDate.getSeconds()-nowSeconds)/10);
		if (nowSeconds == 0) {
			$("#tenSeconds").hide();
		}
		var nowMinutes = Math.floor((nowDate.getMinutes() % 10));
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)) {
			$("#minutes").hide();
		}
		var nowTenMinutes = Math.floor((nowDate.getMinutes()-nowMinutes)/10);
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)) {
			$("#tenMinutes").hide();
		}
		var nowHours = (nowDate.getHours())%12;
		var twelveHour = function(x) {
			if(x == 0) {
				return 12
			} else {
				return x
			};
		}
		nowHours = twelveHour(nowHours);
		var nowSingleHours = Math.floor(nowHours%10);
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)&&(nowTenMinutes == 0)) {
			$("#hours").hide();
		}
		var nowTenHours = Math.floor((nowHours-nowSingleHours)/10);
		console.log(nowHours-nowSingleHours);
		if (((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)&&(nowTenMinutes == 0)&&(nowHours == 0))) {
			$("#tenHours").hide();
		}
		document.getElementById("seconds").style.background =
		 "url(img/clock_numbers.jpg) " + clockNumbers[nowSeconds];
		document.getElementById("seconds").style.backgroundSize =
		 "510px 510px";
		$("#seconds").slideToggle(500,"swing","")
		if (nowSeconds == 0) {
			$("#tenSeconds").slideToggle(500,"swing","");
		}
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)) {
			$("#minutes").slideToggle(500,"swing","");
		}
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)) {
			$("#tenMinutes").slideToggle(500,"swing","");
		}
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)&&(nowTenMinutes == 0)) {
			$("#hours").slideToggle(500,"swing","");
		}
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)&&(nowTenMinutes == 0)&&(nowHours == 0)) {
			$("#tenHours").slideToggle(500,"swing","");
		}
		if ((nowSeconds == 0)&&(nowTenSeconds == 0)&&(nowMinutes == 0)&&(nowTenMinutes == 0)&&(nowHours == 1)&&(nowTenHours == 0)) {
			$("#tenHours").slideToggle(500,"swing","");
		}
		document.getElementById("tenSeconds").style.background =
		 "url(img/clock_numbers.jpg) " + clockNumbers[nowTenSeconds];
		document.getElementById("tenSeconds").style.backgroundSize =
		 "510px 510px";
		 document.getElementById("minutes").style.background =
		 "url(img/clock_numbers.jpg) " + clockNumbers[nowMinutes];
		document.getElementById("minutes").style.backgroundSize =
		 "510px 510px";
		document.getElementById("tenMinutes").style.background =
		 "url(img/clock_numbers.jpg) " + clockNumbers[nowTenMinutes];
		document.getElementById("tenMinutes").style.backgroundSize =
		 "510px 510px";
		document.getElementById("hours").style.background =
		 "url(img/clock_numbers.jpg) " + clockNumbers[nowSingleHours];
		document.getElementById("hours").style.backgroundSize =
		 "510px 510px";
		document.getElementById("tenHours").style.background =
		 "url(img/clock_numbers.jpg) " + clockNumbers[twelveHour(nowTenHours)];
		document.getElementById("tenHours").style.backgroundSize =
		 "510px 510px";
		document.getElementById("hourHand").style.transform =
		 "rotate(" + Math.floor((((nowHours/12) + (((nowTenMinutes*10)+nowMinutes)/720))*360) - 90) + "deg)";
		document.getElementById("minuteHand").style.transform =
		 "rotate(" + Math.floor((((((nowTenMinutes*10) + nowMinutes)/60) + (((nowTenSeconds*10)+nowSeconds)/3600))*360) - 90) + "deg)";
		document.getElementById("secondHand").style.transform =
		 "rotate(" + Math.floor(((((nowTenSeconds*10) + nowSeconds)/60)*360) - 90) + "deg)";
	}
	mattTime();
	var myVar = setInterval(mattTime, 1000);
})
