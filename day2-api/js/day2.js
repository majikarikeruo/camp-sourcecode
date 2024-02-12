$("#btn").on("click", function () {
  const artistName = $("#keyword").val();
  const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&term=${artistName}`;

  $.getJSON(requestUrl, function (data) {
    //　情報を取得できた後にやりたいことをここに書く
    console.log(data);
    const randomNum = Math.floor(Math.random() * data.results.length);
    const targetSong = data.results[randomNum].previewUrl;
    $("#audio").attr("src", targetSong);
    $("#audio")[0].volume = 0.1; // volumeは任意
    $("#audio")[0].play();
  });
});
