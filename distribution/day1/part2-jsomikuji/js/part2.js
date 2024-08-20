// let timer;

$("#btn-start").on("click", function () {
  // timer = setInterval(function () {
  const randomNum = Math.ceil(Math.random() * 5);
  let img;
  if (randomNum === 1) {
    img = "images/daikichi.svg";
    $("#result-text").html("大吉");
  } else if (randomNum === 2) {
    img = "images/kichi.svg";
    $("#result-text").html("中吉");
  } else if (randomNum === 3) {
    img = "images/suekichi.svg";
    $("#result-text").html("末吉");
  } else if (randomNum === 4) {
    img = "images/syoukichi.svg";
    $("#result-text").html("小吉");
  } else {
    img = "images/kyou.svg";
    $("#result-text").html("凶");
  }
  $("#result-img").attr("src", img);
  // }, 50);
});

// $("#btn-stop").on("click", function () {
//   clearInterval(timer);
// });
