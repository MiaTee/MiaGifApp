$(document).ready(function() {
  //creating array to store GIF categories
  var topics = ["Cats", "Bunnies", "Dogs", "Birds", "Kiwi"];
  //iterate array to create button for each
  for (var i = 0; i < topics.length; i++) {
    $(".gif-button-div").append(
      "<button class=button button5 >" + topics[i] + "</button>"
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
  //AJAX API CALL
  $("button").click(function() {
    console.log("I have been clicked");
    //define api url is where we get cats images from
    var gifKeyword = $(this).val();
    console.log(gifKeyword);
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?api_key=Tnr3edbTpbZKX3OPO5Fboy8UrzRXlCfi&q=kiwi&offset=0&rating=G&lang=en";

    //ajax piece of code which will call the api using GET method
    $.ajax({
      url: queryURL,
      method: "GET"
    })

      //wait until you get a response then execute funtion ()
      .then(function(response) {
        for (var i = 0; i < 10; i++) {
          //get image_original_url from the object response, and store it in imageURl variable
          var imageUrl = response.data[i].images.downsized.url;
          console.log(imageUrl);

          //creating a new image div
          var gifImage = $("<img>");

          //adding/setting the source of the image,  and putting alt attr (thisis the way to set any element attributes)
          gifImage.attr("src", imageUrl);
          gifImage.attr("alt", "gif image");

          //put it all in the images div
          $("#images").append(gifImage);
        }
      });
  });
});
