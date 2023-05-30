// Get all the mole holes
const holes = document.querySelectorAll('.hole');
// Get the score and timer elements
const scoreBoard = document.querySelector('.score');
const timer = document.querySelector('.timer');
// Get the start button
const startButton = document.querySelector('button');

// Initialize audio object
const hitSound = new Audio('pop.mp3');

// Function to play hit sound effect
function playHitSound() {
    hitSound.currentTime = 0; // Reset the sound to the beginning
    hitSound.play();
}

let score = 0;
let timeUp = false;
let countdown;

// Function to randomly select a hole
function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    return hole;
}

// Function to make the mole appear
function peep() {
    const hole = randomHole(holes);
    hole.classList.add('up');

    // Randomly generate the duration for mole appearance
    const time = Math.round(Math.random() * 800 + 200); // Between 200ms and 1000ms

    // Use setTimeout to make the mole disappear after the duration
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) {
            peep();
        }
    }, time);
}

// Function to start the game
function startGame() {
    score = 0;
    scoreBoard.textContent = score;
    timeUp = false;
    startButton.disabled = true;

    // Reset the countdown timer to the specified duration (e.g., 10 seconds)
    const countdownDuration = 10;
    timer.textContent = countdownDuration;

    // Start the countdown timer
    countdown = setInterval(() => {
        countdownDuration--;
        timer.textContent = countdownDuration;

        if (countdownDuration === 0) {
            clearInterval(countdown);
            timeUp = true;
            startButton.disabled = false;
        }
    }, 1000);

    peep(); // Start making the moles appear
}

// Function to handle whacking a mole
function whack(e) {
    if (!e.isTrusted) return; // Prevent fake click events

    if (e.target.classList.contains('mole')) {
        score++; // Increase the score
        e.target.parentNode.classList.remove('up'); // Hide the mole
        playHitSound(); // Play sound when mole is hit
        scoreBoard.textContent = score; // Update the score on the screen
    }
}

// Add event listener to each mole hole for whack action
holes.forEach(hole => {
    hole.addEventListener('click', whack);
});

// Add event listener to the start button
startButton.addEventListener('click', startGame);
