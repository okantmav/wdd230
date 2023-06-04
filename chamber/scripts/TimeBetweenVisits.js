function displayTimeBetweenVisits() {
    // Get the current date and time.
    const now = new Date();
  
    // Get the user agent.
    const userAgent = navigator.userAgent;
  
    // Check if the user agent is stored in local storage.
    if (localStorage.getItem("userAgent") === userAgent) {
      // Get the last time the user visited the page.
      const lastVisit = new Date(localStorage.getItem("lastVisit"));
  
      // Calculate the time between visits.
      const timeBetweenVisits = Math.round((now - lastVisit) / (1000 * 60 * 60 * 24));
  
      // Display the time between visits.
      document.querySelector("#timeBetweenVisits").textContent = timeBetweenVisits + " days";
    } else {
      // The user is visiting the page for the first time.
      localStorage.setItem("userAgent", userAgent);
      localStorage.setItem("lastVisit", now);
      document.querySelector("#timeBetweenVisits").textContent = "first visit";
    }
  }
  
  // On page load, call the displayTimeBetweenVisits function.
  window.onload = displayTimeBetweenVisits;
  