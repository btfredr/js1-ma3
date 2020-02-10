// Task 1, converting a function to an arrow loop
const taskOneArrow = (a, b) => {
    return a - b;
};

// Task 2, fetching game names from API and console logging them out
const baseUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(baseUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        gameNames(json);
    })
    .catch(function(error) { 
        console.log(error)
    });

function gameNames(json) {
    const games = json.results;
    for(let i = 0; i < games.length; i++){
        console.log(json.results[i].name)
    }
};

// Task 3, replacing word in sentence
let randomSentence = "These cats are outrageous.";

let replaceWord = randomSentence.replace("cats", "giraffes");

console.log(replaceWord);

/*
Had to comment out so that I can run the code for the remaining tasks

// Task 4, checking userId value of given URL and redirecting based on the variable
const newURL = ("https://my.site.com?userId=7");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let = userId = "userId";

if (params.has(userId)) {
    userId = params.get("userId");
} else {
    document.location.href = "./third.html";
};

if (params.has(userId < 10)) {
    userId = params.get("userId");
} else {
    document.location.href = "./first.html";
};

if (params.has(userId >= 10)) {
    userId = params.get("userId");
} else {
    document.location.href = "./second.html";
};

*/

// Task 5, making a function to remove button from parent element

function removeButton(details) {
    console.dir(details);
    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");
    container.removeChild(button);
};

removeButton();


// Task 6, creating a new list item, naming it, and putting in the list after the first item
const listItem = document.querySelector(".animals");
const cows = document.querySelector(".cows");
const birds = document.createElement("li");

birds.className = "parrots";

const birdsText = document.createTextNode("Parrots");

birds.appendChild(birdsText);

listItem.appendChild(birds)

cows.after(birds);

// Task 7
const gamesURL2 = "https://api.rawg.io/api/games/3801";

fetch(gamesURL2)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        document.querySelector(".rating").innerText = json.rating;
    })
    .catch(function(error) { 
        console.log(error)
    });


