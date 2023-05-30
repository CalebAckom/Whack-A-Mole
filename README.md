# Whack a Mole

## Objective

The objective of this assignment was to create a Whack-a-Mole game using JavaScript, HTML, and CSS. The game is interactive, allowing the user to "whack" moles as they randomly appear on the screen. The assignment primarily focused on implementing the game logic and functionality using JavaScript.

## JavaScript

- Implement a mechanism to randomly generate mole appearances on the screen at different "holes".
  - The moles should appear and disappear after a certain random duration, creating a challenging aspect to the game.
- There should also be a scoring system that increases when a mole is successfully "whacked" with the current score being displayed on the screen and updated it accordingly
- Implement a timer that counts down from a specific duration (e.g., 10 seconds). The game should end when the timer reaches zero.
- Used the Math.random() function in JavaScript to generate random numbers between 0 and 1.
- Used the Math.round() to round up the values to the nearest whole number.
- Used the setTimeout() function in JavaScript to control the duration of mole appearances and disappearances.
- Set different time intervals for moles to create a dynamic gameplay experience.
- Used the setInterval() function to create a countdown timer.
  - When the game starts, all the timers should be cleared.
- Use clearTimeout() and clearInterval() to clean up all the timers.
