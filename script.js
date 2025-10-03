function toggleTheme() {
  let body = document.querySelector("body");

  if (
    !body.classList.contains("theme-1") &&
    !body.classList.contains("theme-2")
  ) {
    body.classList.add("theme-1");
  } else if (body.classList.contains("theme-1")) {
    body.classList.remove("theme-1");
    body.classList.add("theme-2");
  } else if (body.classList.contains("theme-2")) {
    body.classList.remove("theme-2");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", toggleTheme);

function cosyButton() {
  let name = prompt("What is your name?");
  name = name.toLowerCase().trim();

  let nameFormat = name.charAt(0).toUpperCase() + name.slice(1);

  let book = prompt("What are you currently reading?");
  book = book.toLowerCase().trim();

  let bookFormat = book
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  if (name && book) {
    alert(
      "Lovely to meet you, " +
        nameFormat +
        "! Thanks for sharing, I’ll add " +
        bookFormat +
        " to my TBR 📚✨"
    );
  } else if (name && !book) {
    alert(
      "Nice to meet you, " +
        nameFormat +
        "! Hope you find a great read to get cosy with soon ☕📖"
    );
  } else if (!name && book) {
    alert(
      bookFormat +
        " sounds like a wonderful pick! Adding it straight to my TBR list 📖💡"
    );
  } else {
    alert(
      "No worries! Wishing you a cosy moment with a good book when the time feels right 🌙✨"
    );
  }
}

let cosyAwaits = document
  .querySelector(".container button")
  .addEventListener("click", cosyButton);
