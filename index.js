window.addEventListener("load", init);

var auto;
var lampa;
var piros;
var sarga;
var zold;

function ID(elem) {
  return document.getElementById(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function init() {
  auto = document.querySelector(".auto");
  lampa = document.querySelector(".lampa");
  piros = document.querySelector(".piros");
  sarga = document.querySelector(".sarga");
  zold = document.querySelector(".zold");
  lampaValtasa();
}
function lampaValtasa() {
    piros.style.opacity = "1";
        zold.style.opacity = "0.2";
        sarga.style.opacity = "0.2";
setInterval(() => {
    setTimeout( () => {
        piros.style.opacity = "1";
        zold.style.opacity = "0.2";
        sarga.style.opacity = "0.2";
      },1000);
      setTimeout(() => {
        piros.style.opacity = "0.2";
        zold.style.opacity = "0.2";
        sarga.style.opacity = "1";
      },2000);
      setTimeout(() => {
        piros.style.opacity = "0.2";
        zold.style.opacity = "1";
        sarga.style.opacity = "0.2";
        autoMozgas();
      },3000);
}, 3000); 
}

function autoMozgas(){
        auto.classList.add("balroljobbra");
}
