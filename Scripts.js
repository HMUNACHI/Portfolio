$(document).ready(function() {
  $("#search").click(function() {
    var text = $("#input-box").val();
    text = encodeURI(text);
    var url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
      text +
      "&format=json&callback=?";
    console.log(url);
    $.getJSON(url, function(data) {
      $("#list").html("");
      for (var i = 0; i < data[1].length; i++) {
        $("#list").prepend(
          "<li><a href=" +
            data[3][i] +
            " target=" +
            "blank" +
            "><h1>" +
            data[1][i] +
            "</h1></a><p>" +
            data[i][1] +
            "</p></li>"
        );
      }
    });
  });
});
