var imgList = document.querySelector(".img_list");
var imgAll = document.querySelectorAll(".img_list img");
var box1 = document.getElementById("box1");
var imgA = document.querySelector(".img_a");
var allA = document.querySelectorAll(".img_a a");
var index = 0;
imgList.style.width = imgAll.length * 610 + "px";
imgA.style.left = (box1.offsetWidth - allA.length * 25) / 2 + "px";

for(var i = 0 ; i < allA.length ; i++){
	allA[i].num = i;
	allA[i].onclick = function(){
		index = this.num;
		clearInterval(timer);
		setA();
		move(imgList , 20 , -610*index , "left" , function(){
			autoChange();
		});
	};
};

function setA(){
	if(index >= imgAll.length - 1){
		index = 0;
		imgList.style.left = 0;
	}
	for(var i = 0 ; i < allA.length ; i++){
		allA[i].className = "";
	};
	allA[index].className = "a_bg";
};

autoChange();

var timer;

function autoChange(){
	timer = setInterval(function(){
		index++;
		index %= imgAll.length;
		move(imgList , 20 , -610*index , "left" , function(){
			setA();
		});
	} , 3000);
};

function move(obj , speed , target , attr , callback){
	clearInterval(obj.timer);
	var current = parseInt(getStyle(obj , attr));
	if(current > target){
		speed = -speed;
	}
	obj.timer = setInterval(function(){
		var oldValue = parseInt(getStyle(obj , attr));
		var newValue = oldValue + speed;
		if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
			newValue = target;
		};
		obj.style[attr] = newValue + "px";
		if(newValue == target){
			clearInterval(obj.timer);
			callback && callback();
		};
	} , 20);
};

function getStyle(obj , name){
	if(getComputedStyle){
		return window.getComputedStyle(obj , null)[name];
	}else{
		return obj.currentStyle[name];
	}
};