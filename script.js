// Mock data for demonstration
const storyPages = [
    {
        id: 1,
        text: "You find yourself in a dark forest. What do you do?",
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
            choiceButton.addEventListener('click', () => chooseOption(choice.nextPageId));
            choicesContainer.appendChild(choiceButton);
        });
    }
}

// Function to handle user's choice
function chooseOption(nextPageId) {
    currentPageId = nextPageId;
    showStoryPage(currentPageId);
}

// Start the game when the page loads
window.onload = startGame;
