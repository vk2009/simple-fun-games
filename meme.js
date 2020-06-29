$(document).ready(function() {
  $('h1').addClass('animate__animated animate__heartBeat');

  // Initialize global variables
  var bordersOn = true;
  var rotation = 0;
  var imageClicked = false;
  
  
  $('#width-height').click(e => {
    var width = prompt("Width");
    var height = prompt("Height");
    $('#image-area').css('width', width + 'px');
    $('#image-area').css('height', height + 'px');
    $('.text-box').css('width', (width - 20) + 'px');
    $('.text-box').css('height', (height - 220) + 'px');
  });
  
  // When the first text field button is clicked,
  $('#first-input-button').click(e => {
    // get the value from the input box
    var string = $('#first-input').val();
    // set the first image text box to that value
    $('#first').text(string);
    // and then clear the text from the field by setting it to an empty string
    $("#first-input").val('');
  });
  
  // When the second text field button is clicked,
  $('#second-input-button').click(e => {
    // get the value from the input box
    var string2 = $('#second-input').val();
    // set the first image text box to that value
    $('#second').text(string2);
    // and then clear the text from the field by setting it to an empty string
    $("#second-input").val('');
  });
  
  // When the image button is clicked,
  $("#img-button").click(e => {
    // grab the value from the image url input box
    var url = $('#img-url').val();
    // set the background image of the image area to be the url that was pasted in,
    $('#image-area').css('background-image', 'url(' + url + ')');
    // then set the value of the image url input box to an empty string so it empties out
    $("#img-url").val("");
  });
  
  // When the borders button is clicked,
  $("#borders-button").click(e => {
    // If the borders are on,
    if (bordersOn) {
      // turn the tracking variable to off for the next click
      bordersOn = false;
      // then target the text boxe class and remove the borders
      $(".text-box").css("border", "none");
      // then, finally change the text on the button
      $("#borders-button").text("Enable Borders");
    } else {
      bordersOn = true;
      $("#borders-button").text("Disable Borders");
      $(".text-box").css("border", "1px solid white");
    }
  });
  
  $("#rotate-left").click(e => {
    // If the image hasn't been rotated,
    if (rotation === 0) {
      // we'll turn it one turn to the left, which is 360deg - 90deg, or 270deg
      rotation = 270;
    // If it has been rotated,
    } else {
      // just subtract 90deg
      rotation = rotation - 90;
    }
    
    
  
    // target the image area and transform it by the amount specified
    $("#image-area").css('transform', 'rotate(' + rotation + 'deg)');
  });
  
  $("#rotate-right").click(e => {
    // If the image hasn't been rotated,
    if (rotation === 0) {
      // we'll turn it one turn to the right, which is 0deg + 90deg, or 90deg
      rotation = 90;
    // If it has been rotated,
    } else {
      // just subtract 90deg
      rotation = rotation + 90;
    }
    
    
  
    // target the image area and transform it by the amount specified
    $("#image-area").css('transform', 'rotate(' + rotation + 'deg)');
  });

  $("#image-area").click(e => {
    // If the image hasn't been rotated,
    if (imageClicked === false) {
      $("#image-area").css('background-image', 'url("data:image/png;base64,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")');
      imageClicked = true;
    } else {
      $("#image-area").css('background-image', 'url("https://www.researchgate.net/profile/Irina_Gladkova/publication/253864235/figure/fig2/AS:668627082694665@1536424527328/The-image-shown-here-is-300-300-pixel-cropped-section-of-a-SEVIRI-Band-2-digital.png")');
      imageClicked = false;
    }

  });
  
  $(document).keydown(function(e){
    var keyThing = e.keyCode;
    if (keyThing === 37) {
      if (rotation === 0) {
      rotation = 270;
      } else {
      // just subtract 90deg
      rotation = rotation - 90;
    }
      $("#image-area").css('transform', 'rotate(' + rotation + 'deg)');
    } else if (keyThing === 39) {
      rotation = rotation + 90;
      $("#image-area").css('transform', 'rotate(' + rotation + 'deg)');
    }
  });
  
});