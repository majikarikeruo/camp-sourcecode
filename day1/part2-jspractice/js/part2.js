$("button").on("click", function () {
  const season = $("#season-select").val();
  let votesCount = $(`#${season}-count`).html();
  votesCount = parseInt(votesCount) + 1;
  $(`#${season}-count`).html(votesCount);
  $(`#${season}-gage`).css({
    width: `${votesCount * 10}px`,
  });

  const comment = $("#vote-comment").val();
  $(`#option-${season}`).append(`<div> ${comment}</div>`);
  $("#vote-comment").val("");
});
