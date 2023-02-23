// http://api.quotable.io/random

// o fetching quote from quotable
// o if no quote then run random quote
// o Show loading screen
// o share on twitter

// x catch fetching quote fail error
// x get previous quote

const quoteBtn = document.getElementById("new-quote");
const quoteContent = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const loader = document.getElementById("loader");
const quoteText = document.getElementById("quote-container");
const tweetBtn = document.getElementById("twitter");

function loading() {
  loader.hidden = false;
  quoteText.hidden = true;
}
function complete() {
  if (!loader.hidden) {
    loader.hidden = true;
    quoteText.hidden = false;
  }
}

async function randomQuote() {
  loading();
  await fetch("http://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quoteContent.innerText = result.content;
      quoteAuthor.innerText = result.author;
    });
  complete();
}

if (quoteContent.innerText === "") {
  randomQuote();
}

function tweetQuote() {
  const quote = quoteContent.innerText;
  const author = quoteAuthor.innerText;
  const tweeterUrl = `https://twitter.com/intent/tweet?text=${quote}%0A- ${author}`;
  console.log(tweeterUrl);
  window.open(tweeterUrl, "_blank");
}

quoteBtn.addEventListener("click", randomQuote);
tweetBtn.addEventListener("click", tweetQuote);
