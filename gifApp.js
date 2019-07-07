$(document).ready(function() {
  //creating array to store GIF categories
  var topics = ["Office", "Corporate", "Programmer", "IT", "Leadership"];
  //iterate array to create button for each
  for (var i = 0; i < topics.length; i++) {
    $(".gif-button-div").append(
      "<button class=button button5>" + topics[i] + "</button>"
    );
  }

  $("#add-button").click(function() {
    var newCategory = $("#userText").val();
    topics.push(newCategory);
    //alert("New list: " + topics);
    $(".gif-button-div").append(
      " <button class=button button5>" + newCategory + "</button> "
    );
    console.log(topics);
    console.log(newCategory);
    $("#userText").val("");
  });
});
