# Mastermind game project

**Overview:**

Mastermind is a code-breaking game where a player guesses a hidden sequence of colours. They then receive feedback after each guess to help decipher the code. I made it using HTML, CSS and Javascript.

**Day 1**

 In terms of HTML, I created sections for the game board, solution holes, player holes, indicator holes, and colour selection board, and structured the layout with designated divs and sections for each game element.

Then in terms of styling,  specifically the layout, I opted to use flexbox for an organised, symmetrical display.  I styled the overall layout structure, sizes, and colours for the game elements and applied specific styles to individual components such as the colour holes, solution holes, and indicator holes.

To do: 
	Implement functionality for the game logic, allowing players to make guesses  and receive feedback. Connect the HTML structure with JavaScript to enable interactivity.

**Day 2**

In terms of HTML, I replaced colour div elements with buttons to allow colour selection for player guesses. I also Introduced a ‘New game’ button at the end of the colour selection section.

For the styling, I adjusted the appearance and spacing of certain game elements for improved aesthetics.

Day 2 saw the implementation of Javascript. I implemented a generateRandomColours function to create a random colour combination for the game's solution; initiated a player guesses array to store player guesses, ;defined the chosenColor function to update the player's guess based on the colour selected, and added event listeners to colour selection buttons to trigger the chosenColor function for colour selection.

**Day 3**

Day 3 was essentially building up the javascript. I defined a ‘colors’ array  containing colour codes for the game, initiated variables called guessNumber and guessPosition to manage player guesses. In terms of functions,  generateRandomColors(colors) Created a random combination of colours for the game solution. This function populates the solution array and updates the display to show the solution colours. 
chosenColor(event) I Altered this function to enable colour selection for player guesses.
It tracks the current hole index for the guess, handles the colour selection and insertion into the playerGuesses array, manages the process of moving to the next hole in the sequence, disables colour selection after a full guess (four colours) is made, and invokes the colorCompare(i, j) function to check the correctness of the guessed colours.
colorCompare(i, j) compares the guessed colours against the solution, providing feedback based on the correctness of colour and position.
These updates introduced colour selection functionality for player guesses, managed the comparison of guessed colours with the solution, and enhanced the overall gameplay experience.

**Day 4**

In terms of html,  I adjusted the indicator board's layout and structure (indicatorBoardWholes) to accommodate multiple lines for indicating guess accuracy.

Javascript, I initiated variables currentHoleIndex and currentIndicatorHoleIndex to manage the current guess and indicator holes respectively. 
colorCompare(i, j) I modified this function to be triggered upon clicking the submit button and sets the colours of the indicator holes based on the correctness of guessed colours (green for correct colour and position, yellow for correct colour but wrong position).

These updates significantly improved the game's interface and functionality, allowing for better visualisation of guesses and their accuracy.

**Day 5**

In terms of html,  I added a rules section (rulesContainer) containing instructions for playing the game, added 2 new colour buttons representing different colours for player selection as I wanted to make it slightly trickier to guess, included a "New Game" button to reload the game, as well as a "New Game" button to reload the game and a "Game Rules" button to display the rules on click.

For css, I styled various elements including colour buttons, game board sections, and buttons for a better visual experience.

Javascript, I included a show function to display game rules when the corresponding button is clicked, and a close function to hide the rules section when the "Close" button is clicked.

Overall, Day 5 seems to have significantly improved the game's UI by providing instructions and enhancing the overall aesthetic appeal.
