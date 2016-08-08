var metas = document.getElementsByTagName('meta');
var i;
var imgs = ["IMG_7252.jpg", "IMG_7115.jpg"], k=0;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}
 function changeImg() { 
   document.getElementById("myimg").src = imgs[k]; 
   if (k++ == imgs.length) 
   {
     k=0; 
   }
 } 
 onload=function(){setTimeout('changeImg()', 3000)} 
