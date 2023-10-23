/* .js files add interaction to your website */
var quoteList= [
'"You are not your illness. You have an individual story to tell. You have a name, a history, a personality. Staying yourself is part of the battle. "— Julian Seifter', 
'"Happiness can be found even in the darkest of times, if one only remembers to turn on the light." — Albus Dumbledore', 
'"Promise me you’ll always remember: You’re braver than you believe, and stronger than you seem, and smarter than you think." — Christopher Robin from Winnie the Pooh', 
'"There is hope, even when your brain tells you there isn’t." — John Green'
];

var quote = document.getElementById("quote");
var quoteBtn = document.getElementById("quoteBtn");
var count = 0;

if (quoteBtn){
  quoteBtn.addEventListener("click", displayQuote);
}

function displayQuote(){
  quote.innerHTML = quoteList[count];
  count++;
  if (count==quoteList.length){
    count=0;
  }
}