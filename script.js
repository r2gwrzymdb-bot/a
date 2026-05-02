const messages = [
  "I made this simple thing just for you… 💖",
  "You mean a lot more than you think 🌸",
  "I just want you to smile today ✨",
  "And always remember… you’re special 💕"
];

let i = 0;

function nextText(){
  i++;
  if(i >= messages.length) i = 0;

  document.getElementById("text").innerText = messages[i];
}