let launch = document.getElementById("l");
let launcher = document.getElementById("launcher");
var MyCounter;
var number = 10;
// var audio = new Audio("./sound/Missile.mp3");
var audio = document.getElementsByTagName("audio")[0];
var video = document.getElementsByTagName("video")[0];
var fire = document.getElementById("fcontainer");
var mybox = document.getElementById("show_counter");

loadEventListener();
// loads every events in app
function loadEventListener() {
  launch.addEventListener("pointerup", () => {
    MyTimer = setInterval(counter, 1000, setTimeout(launching, 11000));
    video.style.display = "initial";
    mybox.style.display = "initial";
    video.play();
    launch.style.display = 'none';
  });
}
//
//
function counter() {
  mybox.innerHTML = number;
  number = number - 1;
}
//
//
function reset() {
  clearInterval(MyCounter);
  MyCounter = null;
  number = 10;
  video.load();
  audio.load();
  video.style.display = "none";
  mybox.style.display = "none";
  launcher.style.bottom = "-100px";
  launcher.style.transitionDuration = "1s";
  fire.style.display = "none";
  launch.style.display = 'initial';
}
//
//
function launching() {
  audio.play();
  fire.style.display = "block";
  launcher.style.transition = "bottom";
  launcher.style.transitionDuration = "13s";
  launcher.style.transitionTimingFunction = "cubic-bezier(.82, .1, .14, 1.12)";
  launcher.style.bottom = "150%";
  clearInterval(MyCounter);
  mybox.style.display = "none";
}
