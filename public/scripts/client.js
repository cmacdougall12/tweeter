/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const renderTweets = function (tweets) {
  let tweetContainer = $("#tweets-container").empty();
  for (const tweet of tweets) {
    tweetContainer.prepend(createTweetElement(tweet));
  }
};

const createTweetElement = function (obj) {
  const $tweet = `<article class="tweet-container">
  <header>
  <img src="${obj.user.avatars}">
  <h3>${obj.user.name}</h3>
    <h3 class="handle">${obj.user.handle}</h3>
  </header>
  <div class="content">
    <p>${obj.content.text}
    </p>
  </div>

  <footer>
    <h6 class="time-ago">${timeago.format(obj.created_at)}</h6>
    <h6>
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </h6>
  </footer>
</article>
<br />`;

  return $tweet;
};

$(document).ready(function () {
  $(".new-tweet").hide();
  const loadTweets = function () {
    $.ajax({ method: "GET", url: "/tweets" }).then((data) => {
      renderTweets(data);
    });
  };

  loadTweets();

  $(".new-tweet-form").on("click", function (event) {
    $(".new-tweet-form .error-message").text("");
  });

  $(".new-tweet-form").on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    //edge case: ensure tweet field isn't blank
    if (data.length < 6) {
      return $(".error-message").text("Lost for words? Your tweet is blank!");
    }
    //edge case: alert user if tweet max exceeded
    if (data.length > 145) {
      return $(".error-message").text(
        "Too chatty! Tweet must be 140 words or less"
      );
    }
    //ajax post
    $.ajax({ method: "POST", url: "/tweets", data }).then((data) => {
      $("#tweet-text").val("");
      $(".new-tweet-form output").val("140");
      loadTweets();
    });
  });

  //implement toggle button
  $(".fas.fa-angle-double-down").click(function () {
    $(".new-tweet").slideToggle(1000, function(){
      $('textarea').focus()
    })
  });
});



