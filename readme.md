# Tic Tac Toe - Weekend Lab

**Objective:** Build a tic-tac-toe game in HTML, CSS, and jQuery.

This week, we learned about working with conditionals and loops, as well as writing functions. We also learned about the structure of the DOM and how we can interact with it using CSS and jQuery.

For your first weekend lab, we'll be making a tic-tac-toe game using your knowledge and skills from this week.

## Minimum Requirements

* A user should be able to click on a square to make a move.
* Every click should alternate between marking an `X` and an `O` in the square.
* A cell should not be able to replayed once marked.
* Users should be able to click a "reset" button to clear all `X`'s and `O`'s from the board.

## Bonus

* Display a message to indicate which player's turn is about to be played (`X` or `O`).
* If a player wins with three in a row, stop the game and alert the winner, then reset the board. **Hint:** Determine a set of winning combinations. Check those combinations against the board contents after every move.
* Display separate colors for `X`'s and `O`'s. **Hint:** Use jQuery to add a CSS class to the square when a player makes a move.

## Getting Started

X1. Fork this repo, and clone it into your `develop` folder on your local machine.

X2. Use `index.html` as your starting point on this project. There is already some starter code in `index.html`, `main.css`, and `main.js`.

3. Make sure that jQuery and Bootstrap's CSS are linked in `index.html`. Also link your custom CSS and JavaScript files to `index.html`.

## Gameplay Suggestions

1. Use the `$()` jQuery function with CSS selectors to locate the DOM elements your user will click. Try this in your console to make sure your selection works.

2. After you find the elements, set up a click event listener for those elements. Start by simply logging a message that the element was clicked.

3. Most of your game logic will happen when a user clicks one of the squares on the board. **Here are some hints:**

	* You need to check whether a square is empty.
	* You need to keep track of whose turn it is. This will be important when deciding whether to draw an `X` or an `O`. Try storing the turn as a variable.
	* Your reset button should change the board back to its initial empty configuration.
	* **(For the bonus)** Write a separate function to check for a winner. When will you need to call this function?

## Submission

* As you make code changes, frequently commit and push to GitHub.
* Once you've finished the assignment and pushed your work to GitHub, make a pull request from your fork to the original repo.
