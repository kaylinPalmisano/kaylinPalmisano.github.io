document.getElementById("content").addEventListener("click", displayContent);

var text = document.getElementById("content").scr = "/home/index.html";

displayContent(name)
{
  switch(name)
  {
    case "about": text = document.getElementById("content").scr = "/about/index.html";
    break;
    case "trailer": 
    break;
    case "resume": text = document.getElementById("content").scr = "/resume/index.html";
    break;
    case "portfolio": text = document.getElementById("content").scr = "/portfolio/index.html";
    break;
    case "contact": 
    break;
    default:
    break;
  }
}
