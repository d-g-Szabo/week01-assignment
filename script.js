function acceptCookies() {
  cookiesAccepted = true;
  console.log("Cookies accepted!");
  document.querySelector(".cookie").style.display = "none";
}

function addContent() {
  const content = document.createElement("div");
  content.classList.add("content");
  content.innerHTML = `
        <p>
        Boeing will launch its first-ever Starliner astronaut mission for NASA as early as May 6, 2024 on a critical test flight to show its commercial space capsule is ready to ferry crews to and from the International Space Station. <br/>The so-called Starliner Crew Flight Test will launch on a weeklong mission to the ISS from Space Launch Complex 41 of the Cape Canaveral Space Force Station in Florida on May 6. Liftoff is set for 10:34 p.m. EDT (0234 May 7 GMT), with landing set for a week later in the southwestern U.S. Follow our live updates of the Boeing Crew Flight Test mission here from launch to landing!
        </p>
    `;
  document.querySelector(".home").appendChild(content);
  document.getElementById("home-button").innerText = "Hide Content";
}

function removeContent() {
  document.querySelector(".content").remove();
  document.getElementById("home-button").innerText = "Read More";
}

let cookiesAccepted = false;

const acceptCookiesButton = document.getElementById("accept-cookies");

acceptCookiesButton.addEventListener("click", acceptCookies);

const readMoreButton = document.getElementById("home-button");

let homeButtonClicked = false;

readMoreButton.addEventListener("click", function () {
  if (!homeButtonClicked) {
    addContent();
    homeButtonClicked = true;
  } else {
    removeContent();
    homeButtonClicked = false;
  }
});
