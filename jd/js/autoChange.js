var imgList = document.getElementById("img_list");
var changeImg = imgList.getElementsByTagName("img");
var imgA = document.getElementById("play_a");
var allA = imgA.getElementsByTagName("a");
var index = 0;
imgList.style.width = changeImg.length * 595 + "px";
for(var i = 0 ; i < allA.length ; i++){
	allA[i].num = i;
	allA[i].onclick = function(){
		index = this.num;
		clearInterval(timer);
		move(imgList , 20 , -590*index , "left" , function(){
			autoChange();
		});
		setA();
	};
};

function setA(){
	if(index >= changeImg.length -1){
		index = 0;
		imgList.style.left = 0;
	}
	for(var i = 0 ; i < allA.length ; i++){
		allA[i].className = "";
	};
	allA[index].className = "red";
};

autoChange();
var timer;
function autoChange(){
	timer = setInterval(function(){
		index++
		index %= changeImg.length;
		move(imgList , 10 , -590*index , "left" , function(){
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
		}
		obj.style[attr] = newValue + "px";
		if(newValue == target){
				clearInterval(obj.timer);
				callback && callback();
		};
	} , 20);
};

function getStyle(obj , name){
	if(getComputedStyle){
		return getComputedStyle(obj , null)[name];
	}else{
		return obj.currentStyle[name];
	}
};

