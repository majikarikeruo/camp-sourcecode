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

let count = 0; // 0票からスタート。変数countの目的は「現在の票数」を記憶させる場所。

//clickされたときに行いたいプログラムを実行する
$("#btn-kinoko").on("click", function () {
  // 現在の票数を確認し、確認したデータに1を足す
  // 1を足したら、現在の票数は「０->1」に変わるので、現在の状態を再度記憶させる
  // 頭にletやconstがない場合、元々用意されている変数の中身を上書きすることができる
  count = count + 1;

  $(`#count-kinoko`).html(`${count}票`); // 変数名を()の中に指定すれば、記憶させておいた情報を指定した場所に表示させたりすることができます！
});

// LINEメッセージ
$("#line-message-btn").on("click", function () {
  const message = $("#line-message-input").val();
  $("#line-message-text").append(`<p>${message}</p>`);
});

// 画像切り替え
$("#image-switch-btn1").on("click", function () {
  $("#image-switch-image1").attr("src", "images/stamp18.png");
});

$("#image-switch-btn2").on("click", function () {
  $("#image-switch-image1").attr("src", "images/stamp3.png");
});
