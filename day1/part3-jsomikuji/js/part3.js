let timer;

$("#btn-start").on("click", function () {
  timer = setInterval(function () {
    const randomNum = Math.ceil(Math.random() * 5);
    let img;
    if (randomNum === 1) {
      img = "images/daikichi.svg";
    } else if (randomNum === 2) {
      img = "images/kichi.svg";
    } else if (randomNum === 3) {
      img = "images/suekichi.svg";
    } else if (randomNum === 4) {
      img = "images/syoukichi.svg";
    } else {
      img = "images/kyou.svg";
    }
    $("#result-img").attr("src", img);
  }, 50);
});

$("#btn-stop").on("click", function () {
  clearInterval(timer);
});
