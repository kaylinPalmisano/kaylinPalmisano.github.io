var imgs = ["IMG_7252.jpg", "IMG_7115.jpg"], k=0;
 function changeImg() { 
   document.getElementById("myimg").src = imgs[k]; 
   if (k++ == imgs.length) 
   {
     k=0; 
     setTimeout('changeImg()', 3000);
   }
 } 
 
