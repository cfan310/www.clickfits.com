/*alert("Are you ready to shop?");

document.getElementById("searchBox").value = "hi";


function getRandomColor() {
  // declare reusable function
  let letters = "0123456789ABCDEF"; // hexadecimal stored in var letters
  let color = "#"; // hash symbol stored in var color
  for (let i = 0; i < 6; i++) {
    // for loop iterating 0 to 5, inclusive
    color += letters[Math.floor(Math.random() * 16)]; // we are now adding to the color variable by getting a random number between 0 and 15
  }
  return color; // our return output will be something like #B47B29   6 characters
}

console.log(getRandomColor());

//loops the following:

//0: #B
//1: #B4
//2: #B47
//3: #B47B
//4: #B47B2
//5: #B47B29

//let letterList = "CJUEDMOA";

//console.log(letterList[3]);
*/
function getRandomColor() {
  let hexaLetters = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hexaLetters[Math.floor(Math.random() * 16)]; // max corresponds to the index of numbers (how many i's? in this case, we have 10) 0-9 inclusive
  }
  return color;
}

console.log(getRandomColor());

function changeColor() {
  let newColor = getRandomColor();
  document.body.style.backgroundColor = newColor; // refer to document > body > style for CSS > css field > store as getRandomColor function
}

// we will loop 3 times to get something like this:

// #840
