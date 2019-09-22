const darkMode = document.querySelector("#darkMode");

function changeTheme(ev) {
  if (ev.target.tagName === "BUTTON") {
    document.body.classList.toggle("darkMode");
  }
}

darkMode.addEventListener("click", changeTheme);
