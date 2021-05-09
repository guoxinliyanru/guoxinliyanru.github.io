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
	/*x.head = "";*/
	x.style.display = "block";
}
function xz_app_f2(){
	var x = document.getElementById("xz_app_content");
	x.style.display = "none";
}
