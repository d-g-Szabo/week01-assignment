// Function to accept cookies
function acceptCookies() {
  // Set cookiesAccepted to true
  cookiesAccepted = true;
  console.log("Cookies accepted!");
  // Hide the cookie notification
  document.querySelector(".cookie").style.display = "none";
}

// Function to add content to a specified place
function addContent(placeName, buttonName) {
  const content = document.createElement("div");
  // Add the 'content' class to the div
  content.classList.add("content");

  // Check what the placeName is and add the content accordingly
  if (placeName === ".home") {
    content.innerHTML = `
        <p>
        Boeing will launch its first-ever Starliner astronaut mission for NASA as early as May 6, 2024 on a critical test flight to show its commercial space capsule is ready to ferry crews to and from the International Space Station. <br/>The so-called Starliner Crew Flight Test will launch on a weeklong mission to the ISS from Space Launch Complex 41 of the Cape Canaveral Space Force Station in Florida on May 6. Liftoff is set for 10:34 p.m. EDT (0234 May 7 GMT), with landing set for a week later in the southwestern U.S. Follow our live updates of the Boeing Crew Flight Test mission here from launch to landing!
        </p>
    `;
  } else if (placeName === ".tickets") {
    content.innerHTML = `
        <p>
        A ticket for a 90-minute trip to space will set you back $450,000 (£356,000). According to Virgin Galactic, it's a price people are willing to pay. "Demand is high", the company's website says, with several hundred customers already in line to fly. What does this mean for the future of space tourism? 
        </p>
        `;
  } else if (placeName === ".pricing") {
    content.innerHTML = `
        <p>
        The cost of space travel will decrease as technology advances and more companies enter the market. <br/>SpaceX, Blue Origin, and Virgin Galactic are leading the way in commercial space travel, with plans to offer suborbital and orbital flights to the public. <br/>The cost of a ticket to space is currently around $250,000-$500,000, but prices are expected to drop to $50,000-$100,000 within the next decade. <br/>Space tourism will become more accessible to the general public as the industry grows and competition increases. <br/>The future of space travel is bright, with the potential for regular commercial flights to the Moon, Mars, and beyond.
        </p>
        `;
  }

  // Append the created content to the specified place in the document
  document.querySelector(placeName).appendChild(content);
  // Change the text of the button to "Hide Content"
  document.getElementById(buttonName).innerText = "Hide Content";
}

// Function to remove content from a specified place
function removeContent(placeName, buttonName) {
  // Remove the last child of the specified place in the document (i.e., the content div)
  document
    .querySelector(placeName)
    .removeChild(document.querySelector(placeName).lastChild);
  // Change the text of the button back to "Read More"
  document.getElementById(buttonName).innerText = "Read More";
}

// Set cookies to false initially
let cookiesAccepted = false;

// Get the accept cookies button from the HTML
const acceptCookiesButton = document.getElementById("accept-cookies");

// Add an event listener to the accept cookies button that calls the acceptCookies function when clicked
acceptCookiesButton.addEventListener("click", acceptCookies);

//////////////////////////
// Add event listener to the home-button
const readMoreButton = document.getElementById("home-button");

let homeButtonClicked = false;

// Add an event listener to the read more button
readMoreButton.addEventListener("click", function () {
  if (!homeButtonClicked) {
    // If the home button has not been clicked, add content and set homeButtonClicked to true
    addContent(".home", "home-button");
    homeButtonClicked = true;
  } else {
    // If the home button has been clicked, remove content and set homeButtonClicked to false
    removeContent(".home", "home-button");
    homeButtonClicked = false;
  }
});

// Add event listener to the tickets-button
const ticketsButton = document.getElementById("tickets-button");

let ticketsButtonClicked = false;

ticketsButton.addEventListener("click", function () {
  if (!ticketsButtonClicked) {
    addContent(".tickets", "tickets-button");
    ticketsButtonClicked = true;
  } else {
    removeContent(".tickets", "tickets-button");
    ticketsButtonClicked = false;
  }
});

// Add event listener to the pricing-button
const pricingButton = document.getElementById("pricing-button");

let pricingButtonClicked = false;

pricingButton.addEventListener("click", function () {
  if (!pricingButtonClicked) {
    addContent(".pricing", "pricing-button");
    pricingButtonClicked = true;
  } else {
    removeContent(".pricing", "pricing-button");
    pricingButtonClicked = false;
  }
});
