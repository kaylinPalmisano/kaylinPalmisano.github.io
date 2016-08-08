
function displayNextImage() {
 x = (x === images.length - 1) ? 0 : x + 1;
 document.getElementById("myimg").src = images[x];
}

function displayPreviousImage() {
 x = (x <= 0) ? images.length - 1 : x - 1;
 document.getElementById("myimg").src = images[x];
}

function startTimer() {
 setInterval(displayNextImage, 5000);
}

var images = ["IMG_7115.jpg", "IMG_7252.jpg"], x = -1;
