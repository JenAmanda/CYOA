const storyPages = [
    {
        id: -2,
        text: "This is the stats page for your character",
        choices: [
            { id: -2, text: "Return to the story", nextPageId: "prevPageId" }
        ]
    },
    {
        id: -1,
        text: "Identity Quest is a CYOA (aka choose your own adventure) originally made in 2022 for a highschool ELA project. The story follows a girl named Cece Salad and her journey growing up.\n\n I have implemented my own user interface based on my past project and insirpation from Choiceofgames.com. This is a basic CYOA that utilizes html, js, and css. \n\nI hope you enjoy it!",
        choices: [
            { id: -1, text: "Return to the story", nextPageId: "prevPageId" }
        ]
    },
    {
        id: 1,
        text: "You find yourself in a dark forest. What do you do? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n \n Hi Gary",
        choices: [
            { id: 1, text: "Go deeper into the forest", nextPageId: 2 },
            { id: 2, text: "Look for a way out", nextPageId: 3 }
        ]
    },
    {
        id: 2,
        text: "You encounter a mysterious creature. What is your next move?",
        choices: [
            { id: 3, text: "Try to communicate", nextPageId: 4 },
            { id: 4, text: "Run away", nextPageId: 5 }
        ]
    },
    // Add more pages as needed
];

let currentPageId = 1;
const pageHistory = [];

// Function to initialize the game
function startGame() {
    showStoryPage(currentPageId);
}

// Function to display a story page
function showStoryPage(pageId) {
    const page = storyPages.find(page => page.id === pageId);
    if (page) {
        document.getElementById('story-text').innerText = page.text;
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = '';
        page.choices.forEach(choice => {
            const choiceButton = document.createElement('button');
            choiceButton.innerText = choice.text;
            choiceButton.classList.add('choice-button');
            choiceButton.addEventListener('click', () => {
                const nextPage = choice.nextPageId === "prevPageId" ? pageHistory.pop() : choice.nextPageId;
                chooseOption(nextPage);
            });
            choicesContainer.appendChild(choiceButton);
        });
    }
}

// Function to handle user's choice
function chooseOption(nextPageId) {
    if (nextPageId !== "prevPageId") {
        pageHistory.push(currentPageId);
    }
    currentPageId = nextPageId;
    showStoryPage(currentPageId);
}

// Function to restart the game
function restartGame() {
    currentPageId = 1; // Reset to the first page
    pageHistory.length = 0; // Clear the history
    showStoryPage(currentPageId);
}

function aboutGame(){
    if (currentPageId > 0) {
        pageHistory.push(currentPageId);
    }
    currentPageId = -1;
    showStoryPage(currentPageId);
}

function statGame(){
    if (currentPageId > 0) {
        pageHistory.push(currentPageId);
    }
    currentPageId = -2;
    showStoryPage(currentPageId);
}

// Start the game when the page loads
window.onload = startGame;

// Event listener for restart button
document.getElementById('restart-button').addEventListener('click', restartGame);
document.getElementById('stats-button').addEventListener('click', statGame);
document.getElementById('about-button').addEventListener('click', aboutGame);
