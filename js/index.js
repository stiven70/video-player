const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $enlace = document.querySelector("#enlace");
const $fondo = document.querySelector("#colorFondo");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);
$backward.addEventListener("click", handlebackward);
$forward.addEventListener("click", handleforward);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  $enlace.hidden = false;
  $fondo.style.background = "#000000";
  console.log("le diste clic al boton de play");
}
function handlePause() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
  $enlace.hidden = true;
  $fondo.style.background = "#26B4BC";
  console.log("le diste clic al boton de play");
}
function handleforward() {
  $video.currentTime += 10;
}
function handlebackward() {
  $video.currentTime -= 10;
}

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoad);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoad() {
  $progress.max = $video.duration;
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
}
