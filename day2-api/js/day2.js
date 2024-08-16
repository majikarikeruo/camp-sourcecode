$("#btn").on("click", function () {
  const artistName = $("#keyword").val();
  const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&term=YOASOBI`;

  $.getJSON(requestUrl, function (data) {
    //　情報を取得できた後にやりたいことをここに書く
    console.log(data);

    const randomNum = Math.floor(Math.random() * data.results.length);
    const targetSong = data.results[randomNum].previewUrl;
    $("#audio").attr("src", targetSong);
    $("#audio")[0].volume = 0.1; // volumeは任意。
    $("#audio")[0].play();

    // 以下は一応入れてますが、やるとしてもたぶんコピペで駆け抜けになると思われるしやらないかも
    for (let i = 0; i < data.results.length; i++) {
      const music = `<div class="music">
        <img src="${data.results[i].artworkUrl100}" alt="${data.results[i].trackName}">
        <div class="music-content">
          <p class="track-name">${data.results[i].trackName}</p>
          <p class="artist-name">${data.results[i].artistName}</p>
        </div>
      </div>`;
      $("#result").append(music);
    }
  });
});
