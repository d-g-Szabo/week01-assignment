function acceptCookies() {
  cookiesAccepted = true;
  console.log("Cookies accepted!");
  document.querySelector(".cookie").style.display = "none";
}

let cookiesAccepted = false;

const acceptCookiesButton = document.getElementById("accept-cookies");

acceptCookiesButton.addEventListener("click", acceptCookies);
