// Displays the current date using JavaScript in this format: Wednesday, 24 July 2020.

// An array of the day names
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// An array of the months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentdate = new Date();

document.querySelector("#currentdate").textContent = `${dayNames[currentdate.getDay()]}, ${currentdate.getDay()} ${months[currentdate.getMonth()]} ${currentdate.getFullYear()}`
