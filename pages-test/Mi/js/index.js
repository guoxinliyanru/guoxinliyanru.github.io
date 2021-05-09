function gwc_img(g_img){
	g_img = g_img.getElementsByTagName("img")[0];
	g_img.src = "img/car2.png";
}
function gwc_img2(g_img){
	g_img = g_img.getElementsByTagName("img")[0];
	g_img.src = "img/car1.png";
}
function xz_app_f(){
	var x = document.getElementById("xz_app_content");
	x.style.display = "block";
}
function xz_app_f2(){
	var x = document.getElementById("xz_app_content");
	x.style.display = "none";
}
function inpbor(x){
	x.style.borderRightStyle = "1px solid #ff5b00";
	var div = document.getElementsByClassName("tj_sj")[0];
	div.style.display = "block";
}
function sosuo_ipt(color){
	var ipt = document.getElementsByClassName("tj_sosuo_div1")[0].getElementsByClassName("tj_sousuo_td1")[0].getElementsByTagName("input")[0];
	ipt.style.borderRight = "1px solid #"+color;
}
function sosuo_tabl(x){
	x.style.border = "1px solid #ff5b00";
	sosuo_ipt("ff5b00");
}
function sosuo_tabl2(x){
	x.style.border = "1px solid #b0b0b0";
	sosuo_ipt("b0b0b0");
}
function sosuo_tabl3(x){
	x.style.border = "1px solid #e0e0e0";
	sosuo_ipt("e0e0e0");
	/*console.log("sosuo_tabl3");
	sosuo_tabl5(document.getElementsByClassName("tj_sj")[0]);*/
}
function sosuo_div(){
	var div = document.getElementsByClassName("tj_sosuo_div1")[0];
	div.style.border = "1px solid #ff5b00";
}
function sosuo_div2(){
	var div = document.getElementsByClassName("tj_sosuo_div1")[0];
	div.style.border = "1px solid #e0e0e0";
}
function sosuo_but(){
	sosuo_tabl5(document.getElementsByClassName("tj_sj")[0]);
}
function sosuo_but2(){
	sosuo_tabl5(document.getElementsByClassName("tj_sj")[0]);
}
function sosuo_tabl4(x){
	x.style.display = "block";
	sosuo_ipt("ff5b00");
	sosuo_div();
}
function sosuo_tabl5(x){
	x.style.display = "none";
	sosuo_ipt("e0e0e0");
	sosuo_div2();
}
function tuijian_hnr(x){
	var nr = document.getElementsByClassName("tj_top_nr")[0];
	var ul = nr.getElementsByTagName("ul")[x];
	ul.style.display = "block";
	nr.style.display = "block";
	nr.style.borderTop = "1px solid #e0e0e0";
	nr.style.boxShadow = "0 2px 4px -2px black";
}
function tuijian_nhnr(x){
	var nr = document.getElementsByClassName("tj_top_nr")[0];
	var ul = nr.getElementsByTagName("ul")[x];
	ul.style.display = "none";
	nr.style.display = "none";
	nr.style.borderTop = "none";
	nr.style.boxShadow = "none";
}
// 首页轮播图

var xuanze_count = 0; // 当前计时器li所在的位置+1
var xuanze_count2 = 0; // 当前计时器li所在的位置
var xuanze_jsq = null;// 计时器
// 背景图li对象
var xuanze_yc_obj = null;
// 选择器li对象
var xuanze_yc_bgcolor = null;
function xuanze_xs(x,obj){
	xuanze_count = x;
	xuanze_count2 = x;
	var li = document.getElementById("tj_cent_bg").getElementsByTagName("ul")[0].getElementsByTagName("li")[x];// 当前背景图li对象
	xuanze_yc_obj.style.display = "none"; // 上一个背景图对象
	//xuanze_yc_bgcolor
	xuanze_yc_bgcolor.style.backgroundColor = "#84776f";// 上一个选择器li对象
	obj.style.backgroundColor = "transparent"; // 当前的选择器li对象

	li.style.display = "block";
	xuanze_yc_obj = li;
	xuanze_yc_bgcolor = obj;
	clearInterval(xuanze_lunbo,3000);
}
function xuanze_lunbo(){
	xuanze_count++;
	if(xuanze_count > document.getElementById("tj_cent_bg").getElementsByTagName("ul")[0].getElementsByTagName("li").length-1){
		xuanze_count = 0;
	}
	xuanze_xs(xuanze_count,document.getElementById("tj_cent_bg").getElementsByTagName("ul")[1].getElementsByTagName("li")[xuanze_count]);
}
function tj_xs(x,obj){
	var tab = document.getElementsByClassName("xuanxiang_body")[0].getElementsByTagName("table")[x];
	tab.style.display = "block";
	var obj = document.getElementsByClassName("xuanxiang_body")[0].getElementsByTagName("table")[x];
	obj.style.boxShadow = "2px 0 4px #808080";
	obj.style.border = "1px solid #e0e0e0";
}
function tj_yc(x,obj){
	var tab = document.getElementsByClassName("xuanxiang_body")[0].getElementsByTagName("table")[x];
	tab.style.display = "none";
	var obj = document.getElementsByClassName("xuanxiang_body")[0].getElementsByTagName("table")[x];
	obj.style.boxShadow = "none";
	obj.style.border = "none";
}
function tj_xs2(x,obj){
	var a = document.getElementsByClassName("tj_xuanxiang")[0].getElementsByTagName("ul")[0].getElementsByTagName("a")[x];
	a.style.backgroundcolor = "#ff5b00";
	obj.style.display = "block";
	obj.style.boxShadow = "2px 0 4px #808080";
	obj.style.border = "1px solid #e0e0e0";
}
function tj_yc2(x,obj){
	var a = document.getElementsByClassName("tj_xuanxiang")[0].getElementsByTagName("ul")[0].getElementsByTagName("a")[x];
	a.style.backgroundColor = "inherit";
	obj.style.display = "none";
	obj.style.boxShadow = "none";
	obj.style.borderStyle = "none";
}
// 小米秒杀倒计时（未完善）
var h = 3;
var i = 59;
var s = 60;
var ms_lis;
var ms_djs_clear;
function ms_djs(){
	s--;
	if(s == 0){
		i -= 1;
		s = 59;
	}
	if(i == 0){
		h -= 1;
		i = 59; 
	}
	ms_lis[0].innerText = h > 9 ? h : "0"+h;
	ms_lis[1].innerText = i > 9 ? i : "0"+i;
	ms_lis[2].innerText = s > 9 ? s : "0"+s;
	if(h == 0 && i == 0 && s == 0){
		clearInterval(ms_djs_clear);
	}
}
onload = function(){
	xuanze_jsq = setInterval(xuanze_lunbo,3000);
	// 随机推荐产品名称
	// 推荐内容
	var sj_ipt_arr = ["小米11","洗衣机","耳机","红米","电视","个护","【新品】米家扫拖机器人"];
	var sj_ipt = document.getElementsByClassName("tj_sousuo_td1")[0].getElementsByTagName("input")[0];
	// 先提供一个随机的
	var sj_ipt_random = Math.floor(Math.random()*sj_ipt_arr.length);
	sj_ipt.setAttribute("placeholder",sj_ipt_arr[sj_ipt_random]);
	// 每隔一段时间就更改输入框内容
	setInterval(function(){
		var sj_ipt_random = Math.floor(Math.random()*sj_ipt_arr.length);
		sj_ipt.setAttribute("placeholder",sj_ipt_arr[sj_ipt_random]);
	},7000);
	
	// 给推荐的商品分类注册移入显示移出隐藏事件
	var tj_daohang = document.getElementsByClassName("tj_daohang")[0];
	var tj_a_arr = tj_daohang.getElementsByTagName("ul")[0].getElementsByTagName("a");
	
	for(var i = 0;i < (tj_a_arr.length-2);i++){
		tj_a_arr[i].counter = i;
		tj_a_arr[i].onmouseover = function(){
			tuijian_hnr(this.counter);
		}
		tj_a_arr[i].onmouseout = function(){
			tuijian_nhnr(this.counter);
		}
	}
	var tj_top_nr = document.getElementsByClassName("tj_top_nr")[0];
	var tj_ul_arr = tj_top_nr.getElementsByTagName("ul");
	for(var i = 0;i < tj_ul_arr.length;i++){
		tj_ul_arr[i].counter = i;
		tj_ul_arr[i].onmouseover = function(){
			tuijian_hnr(this.counter);
		}
		tj_ul_arr[i].onmouseout = function(){
			tuijian_nhnr(this.counter);
		}
	}
	tuijian_hnr(0);
	tuijian_nhnr(0);
	
	// 图片轮播
	xuanze_yc_obj  = document.getElementById("tj_cent_bg").getElementsByTagName("ul")[0].getElementsByTagName("li")[0];
	xuanze_yc_bgcolor = document.getElementById("tj_cent_bg").getElementsByTagName("ul")[1].getElementsByTagName("li")[0];
	// 循环注册事件
	var xuanze_lis = document.getElementsByClassName("bg_xuanze")[0].getElementsByTagName("ul")[0].getElementsByTagName("li"); // li 的集合
	var xuanze_img = document.getElementById("tj_cent_bg").getElementsByTagName("ul")[0].getElementsByTagName("a"); // img 的集合
	for(var i = 0;i < xuanze_lis.length;i++){
		xuanze_lis[i].index = i;
		xuanze_lis[i].onclick = function(){
			xuanze_xs(this.index,xuanze_lis[this.index]);
		}
		
		xuanze_lis[i].onmouseover = function(){
			if(this.index != xuanze_count2){
				this.style.backgroundColor = "transparent";	
			}
		}
		xuanze_lis[i].onmouseout = function(){
			if(this.index != xuanze_count2){
				this.style.backgroundColor = "#84776f";
			}
		}
		xuanze_img[i].onmouseover2 = function(){
			clearInterval(xuanze_jsq);
		}
		xuanze_img[i].onmouseout2 = function(){
			xuanze_jsq = setInterval(xuanze_lunbo,3000);
		}
	}
	
	// 
	var tx_as = document.getElementsByClassName("tj_xuanxiang")[0].getElementsByTagName("ul")[0].getElementsByTagName("a");
	var tx_tabs = document.getElementsByClassName("xuanxiang_body")[0].getElementsByTagName("table");
	for(var i = 0;i < tx_as.length;i++){
		tx_as[i].index = i;
		tx_as[i].onmouseover = function(){
			tj_xs(this.index);
		}
		tx_as[i].onmouseout = function(){
			tj_yc(this.index);
		}
		tx_tabs[i].index = i;
		tx_tabs[i].onmouseover = function(){
			tj_xs2(this.index,this);
		}
		tx_tabs[i].onmouseout = function(){
			tj_yc2(this.index,this);
		}
	}
	
	// 小米秒杀显示时间
	var ms = document.getElementsByClassName("xm_center_left")[0].getElementsByTagName("span")[0];
	var data = new Date();
	ms.innerText = data.getHours()+":00 场";
	var djs = 1000 * 60 * 60;
	ms_lis = document.getElementById("xm_center_left_sj").getElementsByTagName("li");
	ms_djs_clear = setInterval(ms_djs,1000);
	/*lis[0].innerText = ;*/
}
