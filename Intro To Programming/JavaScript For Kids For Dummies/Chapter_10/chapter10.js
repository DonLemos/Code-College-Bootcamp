let replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);

function replaceIt() {
    let storyDiv = document.getElementById("Story");
}


var adj1 = "<span class='replacement'>" + document.
    getElementById("adj1").value + "</span>";

/* Insert more variable definitions here*/

let theStory;

theStory = "<h1>Douglas's Dance Party</h1>";

theStory += "One " + adj1 + " day,";

/* Put the rest of the story here, using the += operator */

storyDiv.innerHTML = theStory;
