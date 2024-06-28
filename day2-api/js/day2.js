$("#btn").on("click", function () {
  const artistName = $("#keyword").val();
  const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&term=YOASOBI`;

  $.getJSON(requestUrl, function (data) {
    //　情報を取得できた後にやりたいことをここに書く
    console.log(data);
    const randomNum = Math.floor(Math.random() * data.results.length);
    const targetSong = data.results[randomNum].previewUrl;
    $("#audio").attr("src", targetSong);
    $("#audio")[0].volume = 0.1; // volumeは任意
    $("#audio")[0].play();

    // 以下は一応入れてますが、やるとしてもたぶんコピペで駆け抜けになると思われるしやらないかも
    data.results.forEach(function (result) {
      const trackName = result.trackName;
      const artistName = result.artistName;
      const artworkUrl = result.artworkUrl100;
      const music = `<div class="music">
        <img src="${artworkUrl}" alt="${trackName}">
        <div class="music-content">
          <p class="track-name">${trackName}</p>
          <p class="artist-name">${artistName}</p>
        </div>
      </div>`;
      $("#result").append(music);
    });
  });
});
