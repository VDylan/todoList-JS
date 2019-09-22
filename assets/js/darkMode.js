function changeTheme(buttonText) {
    var body = document.getElementById("body");
    var currentClass = body.className;
    body.className = currentClass == "lightMode" ? "darkMode" : "lightMode";
  
    if (buttonText.value === "Dark Mode") {
      buttonText.value = "Light Mode";
    } else {
      buttonText.value = "Dark Mode";
    }
  }