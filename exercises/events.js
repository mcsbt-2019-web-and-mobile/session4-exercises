"use strict";

// add a handler to button 1 so it changes the background of the page when clicked
let button1 = document.querySelector(".button1");
function consoleLogging() {
    console.log("button 1 clicked");
}
button1.addEventListener("click", consoleLogging);
// add a handler to button 2 so it adds the text "dynamically created" to the <h1>
// add a handler to button 3 so it changes the color of the text in the title