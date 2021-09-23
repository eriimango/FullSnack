
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  window.localStorage.setItem("isDarkMode", "true");
}

// When browser window loads, check dark mode
window.onload = function() {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";

  if (isDarkMode) {
    document.body.style.background = "#CFE2F3";
    document.getElementById("text").innerHTML = "Turn on the lights!";
    document.getElementById("text").style.color = "#140931"
    document.getElementById("checkbox").checked = false;
  } else {
    document.body.style.background = "#140931";
    document.getElementById("text").innerHTML = "Turn off the lights!";
    document.getElementById("text").style.color = "#CFE2F3"
    document.getElementById("checkbox").checked = true;
  }
}

// Toggle dark mode
function toggle() {
  const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";

  if (isDarkMode) {
    window.localStorage.setItem("isDarkMode", "false");
    document.body.style.background = "#140931";
    document.getElementById("text").innerHTML = "Turn off the lights!";
    document.getElementById("text").style.color = "#CFE2F3"
    document.getElementById("checkbox").checked = true;
  } else {
    window.localStorage.setItem("isDarkMode", "true");
    document.body.style.background = "#CFE2F3";
    document.getElementById("text").innerHTML = "Turn on the lights!";
    document.getElementById("text").style.color = "#140931"
    document.getElementById("checkbox").checked = false;
  }
}
