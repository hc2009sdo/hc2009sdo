var imp = document.getElementById("impression");
var btn = document.getElementById("btn");
btn.onclick = function(){
	var ipt = document.getElementsByTagName("input")[0];
	var text = ipt.value;
	if(text != ""){
		var p1 = document.createElement("p");
		p1.className = "del";
		p1.innerHTML = text;
		p1.title = text;
		imp.appendChild(p1);
		p1.onclick = delA;
	}
	return false;
};

var delAll = document.querySelectorAll(".del");
for(var i = 0 ; i < delAll.length ; i++){
	delAll[i].onclick = delA;
};

function delA(){
	var p1 = this.parentNode;
	var ih = this.innerHTML;
	var flag = confirm("确认删除" + ih + "吗？");
	if(flag){
		p1.removeChild(this);
	};
};
var phone = document.getElementById("phone");
phone.onclick = function(){
	alert(phone.innerHTML);
};

var poject = document.querySelector(".poject");
var aList = document.querySelectorAll("#a_list a");
var List = document.getElementById("a_list");
var index = 0;
List.style.left = (719 - aList.length * 25) / 2 + "px";

for(var i = 0 ; i < aList.length ; i++){
	aList[i].num = i;
	aList[i].onclick = function(){
		index = this.num;
		var a = -700;
		seleC(index);
	}
};

var myAll = document.querySelectorAll("#mymessage a");
for(var i = 0 ; i < myAll.length ; i++){
	myAll[i].num = i;
	myAll[i].onclick = function(){
		index = this.num;
		var a = -700;
		seleC(index);
	};
};

function seleC(obj){
	var a = -700;
		switch(obj){
			case 0:
			inner_w.style.left = 0 + "px";
			setA(aList);
			aColor(aList , index , "a_bg");
			break;
			case 1:
			inner_w.style.left = a + "px";
			setA(aList);
			aColor(aList , index , "a_bg");
			break;
			case 2:
			inner_w.style.left = a * 2 + "px";
			setA(aList);
			aColor(aList , index , "a_bg");
			break;
			case 3:
			inner_w.style.left = a * 3 + "px";
			setA(aList);
			aColor(aList , index , "a_bg");
			break;
		};
};

function setA(obj){
	for(var i = 0 ; i < obj.length ; i++){
		obj[i].className = "";
	};
};

function aColor(attr , name , target){
	attr[name].className = target;
};

function move(obj , target , attr){
	var oldValue = parseInt(getStyle(obj , attr));
	var newValue = oldValue + target;
};

function getStyle(obj , name){
	if(getComputedStyle){
		window.getComputedStyle(obj , null)[name];
	}else{
		obj.currentStyle[name];
	}
};

var innerW = document.getElementById("inner_w");
var myTitle = document.querySelectorAll(".mytitle");
innerW.style.width =(100 + 600) * myTitle.length + "px";

var img1 = document.getElementById("img1");
img1.onclick = function(){
	window.open("../images/img/jd_jm.png");
};
$('#img2').click(function(){
	window.open("../images/img/imgplay.png");
});


var email = document.getElementById("email");
email.onclick = function(){
	alert(email.innerHTML);
};

$('#text').click(function(){
	alert("111");
});