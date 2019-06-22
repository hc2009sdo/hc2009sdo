/*
var ul = document.querySelectorAll(".play");
for(var i = 0 ; i < ul.length ; i++){
	var lis = ul[i].getElementsByTagName("li");
	for(var a = 0 ; a < lis.length ; a++){
		lis[a].onmouseover = function(){
		};
	};
};
var a1 = document.querySelectorAll(".a1");
for(var i = 0 ; i < a1.length ; i++){
	p.parentNode.onmousevoer = function(){
		alert("ddd");
	};
};
*/
/*
var a1 = document.querySelectorAll(".a1");
for(var i = 0 ; i < a1.length ; i++){
	var li = a1[i].parentNode;
	li.onmouseover = function(){
	};
};
*/
/*
<ul class="play">
<li>
<a href="#"><img src="../images/img/play18.png"></a>
<p><a href="#">俏薇妮情侣睡衣女春秋男士纯棉长袖休闲韩版圆领可外穿长裤家居服两件套装卡通 白色（女） M</a></p>
<p class="play_color"><a href="#">￥198.00</a></p>
<a class="a1" href="#">找相似</a>
<a class="a2" href="#">不喜欢</a>
</li>
</ul>
*/

var list = document.querySelectorAll(".list_p");
for(let i = 0 ; i < list.length ; i++){
	var p1 = list[i].children[1];
	var p2 = list[i].children[2];
		p1.classList.add("play_pbg");
		p2.classList.add("play_pbg");
};

