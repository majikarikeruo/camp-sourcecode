const playBtn = document.getElementById("play-btn");
const fastPlayBtn = document.getElementById("fast-play-btn");
const stopBtn = document.getElementById("stop-btn");
const video = document.querySelector("video");

playBtn.addEventListener("click", () => {
  console.log("再生");
  video.playbackRate = 1;
  video.play();
});

fastPlayBtn.addEventListener("click", () => {
  console.log("10倍速で再生");
  video.playbackRate = 10;
  video.play();
});

stopBtn.addEventListener("click", () => {
  console.log("停止");
  video.pause();
});
