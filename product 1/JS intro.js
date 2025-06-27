// --- Game State ---
// The number the player needs to guess
let secretNumber;

// --- Element References ---
// We get the elements once and store them in constants for efficiency
const guessInput = document.getElementById("myinput");
const feedbackText = document.getElementById("mytext2");

// --- Functions ---
/**
 * Generates a new secret number between 1 and 30 and resets the game state.
 */
function startNewGame() {
    secretNumber = Math.floor(Math.random() * 30) + 1;
    feedbackText.textContent = ''; // Clear previous feedback
    feedbackText.className = 'feedback'; // Reset class for styling
    guessInput.value = ''; // Clear the input field
    guessInput.focus(); // Set focus to the input field for the user
}

/**
 * Checks the player's guess against the secret number and provides feedback.
 * This function is called by the 'onclick' attribute of the button in the HTML.
 */
function checkGuess() {
    const userGuess = parseInt(guessInput.value, 10);

    // Validate the input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 30) {
        feedbackText.textContent = 'Please enter a valid number between 1 and 30.';
        feedbackText.className = 'feedback error';
        return; // Stop the function here
    }

    // Compare the guess and provide feedback
    if (userGuess === secretNumber) {
        feedbackText.textContent = `Correct! The number was ${secretNumber}. A new game has started!`;
        feedbackText.className = 'feedback correct';
        startNewGame(); // Start a new round
    } else if (userGuess < secretNumber) {
        feedbackText.textContent = 'Too low! Try again.';
        feedbackText.className = 'feedback incorrect';
    } else {
        feedbackText.textContent = 'Too high! Try again.';
        feedbackText.className = 'feedback incorrect';
    }
    guessInput.value = ''; // Clear input for the next guess
    guessInput.focus();
}

// --- Initial Setup ---
// Start the first game when the script loads
startNewGame();