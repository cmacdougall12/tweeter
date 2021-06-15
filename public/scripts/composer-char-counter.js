//function counts number of characters in the the text area (id= tweet-text) and lets the user know how many characters remain before the max of 140 is surpassed
$(document).ready(function () {
  $("#tweet-text").keyup(function () {
    let count = 140 - $(this).val().length;
    $(".counter").text(count);
    //will change the class to negative-counter which will cause the text to change red in CSS
    if (count < 0) {
      $(".counter").addClass("negative-counter");
    }
  });
});
