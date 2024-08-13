/**
 * $()
 *
 * $().on('click', function() {
 *
 * })
 *
 * const season = "";
 * let votesCount = "";
 */

console.log(46); //数値の1が表示
console.log("日向坂"); //文字の1が表示
console.log("日向坂46"); //こんにちはいう文字が表示

let kinokoCount = 0;
$("#btn-kinoko").on("click", function () {
  kinokoCount = kinokoCount + 1;
  $(`#count-kinoko`).html(kinokoCount);
});

$("#btn-takenoko").on("click", function () {
  let votesCount = parseInt($(`#count-takenoko`).html()) + 1;
  $(`#count-takenoko`).html(votesCount);
  $("#gage-takenoko").animate({ height: `${10 * votesCount}px` }, 500);
});
