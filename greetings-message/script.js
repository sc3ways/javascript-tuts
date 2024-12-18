function greetingApp(person = "Dear") {
  let hours = new Date().getHours();

  // hours = 19;
  let greetingMsg = document.querySelector("#gMessage");
  if (!greetingMsg) {
    console.error("Error: Element with id 'greetingMsg' not found.");
  }

  if (hours >= 5 && hours < 12) {
    greetingMsg.innerText = `Good Morning ${person}`;
    greetingMsg.className = "green";
  } else if (hours >= 12 && hours < 18) {
    greetingMsg.innerText = `Good Afternoon ${person}`;
    greetingMsg.className = "orange";
  } else {
    greetingMsg.innerText = `Good Night ${person}`;
    greetingMsg.className = "blue";
  }
}
greetingApp("Sunil G");
