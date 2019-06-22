var hr = document.getElementById("hr");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
var number = 1;
setInterval(function(){
	sec.innerHTML -= number;
	if(sec.innerHTML < 0){
		sec.innerHTML = 59;
		min.innerHTML -= number;
	};
	if(min.innerHTML < 0){
		min.innerHTML = 59;
		hr.innerHTML -= number;
	};
} , 1000);

