/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = function (tweets) {
  let tweetContainer = "";
  for (const tweet of tweets) {
    tweetContainer += createTweetElement(tweet);
  }
  return tweetContainer;
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
  $('main').append(renderTweets(data));
});



