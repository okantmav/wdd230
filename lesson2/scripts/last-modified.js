// Display the date and time that the file was last modified.

let date = new Date(document.lastModified);
let lastupdated = ` ${date.getMonth()}/${date.getDay()}/${date.getFullYear()} ${date.toLocaleTimeString('en-GB')}`

document.querySelector("#lastupdated").textContent = lastupdated;