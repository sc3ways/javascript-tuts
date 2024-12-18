let date = new Date();
let hours = date.getHours();

let greetingMsg = document.querySelector("#gMessage");

if (hours > 5 && hours < 12) {
  greetingMsg.innerText = "Good Morning";
  greetingMsg.classList.add("green");
} else if (hours > 12 && hours < 18) {
  greetingMsg.innerText = "Good Afternoon";
  greetingMsg.classList.add("orange");
} else {
  greetingMsg.innerText = "Good Night";
}
