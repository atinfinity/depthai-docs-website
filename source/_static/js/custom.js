var navside = null;

window.onload = function(){
    navside  = document.getElementsByClassName("wy-nav-side")[0];
}

window.onscroll = function() {
  if (window.pageYOffset < 50) {
    navside.style.top = "50px";
  } else {
    navside.style.top = "0px";
  }
}
