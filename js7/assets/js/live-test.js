//Testing if I can update index.html with console.logs from main.js.

function displayEverything() {
    let displayJS = document.getElementById("displayJS");
    displayJS.textContent = "Test";
    let updateNode = document.createTextNode(" Create Text Node and Append Child");
    displayJS.appendChild(updateNode);
}

displayEverything();