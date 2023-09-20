// state variables
// let mainBoard; // 8 rows of holes plus one row of solution holes
// let winner; // Null = didn't work out solution; Winner = did work out solution
// let solutionHoles; // Will reveal sedret colours once player has had 8 tries and/or won 

let colors  = ['#DC143C', '#89CFF0', '#FFEA00', '#FAA0A0', '#0BDA51', 'darkorchid'];

let guessNumber = 0;

let guessPosition = 0;

//Generates a random combo of colors
function generateRandomColors(colors) {
   let a = colors[Math.floor(Math.random() * colors.length)];
   let b = colors[Math.floor(Math.random() * colors.length)];
   let c = colors[Math.floor(Math.random() * colors.length)];
   let d = colors[Math.floor(Math.random() * colors.length)];
    let solution = [];
    solution.push(a);
    solution.push(b);
    solution.push(c);
    solution.push(d);
    console.log(solution);
    document.getElementById("solutionHole0").style.backgroundColor = `${solution[0]}`;
    document.getElementById("solutionHole1").style.backgroundColor = `${solution[1]}`;
    document.getElementById("solutionHole2").style.backgroundColor = `${solution[2]}`;
    document.getElementById("solutionHole3").style.backgroundColor = `${solution[3]}`;
}
generateRandomColors(colors);

const playerGuesses = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];

let currentHoleIndex = 0;

function chosenColor(event) {
    // document.getElementById("hole0").style.backgroundColor = (event.target.value);
    // console.log(playerGuesses[0]);

    const currentHoleId = `hole${currentHoleIndex}`;
    const currentHoleElement = document.getElementById(currentHoleId);

    for (let i = 0; i < playerGuesses.length; i++) {
        for (let j = 0; j < playerGuesses[i].length; j++){
            if (playerGuesses[i][j]===0) {
            playerGuesses[i][j] = event.target.value;                 // How can I stop it from filling all arrays,        
            console.log(playerGuesses[0]);                            // not just one?    
            currentHoleElement.style.backgroundColor = event.target.value;
            break; 
            } 
        }
    }
      currentHoleIndex++;     
      if (currentHoleIndex >= 31) {
        currentHoleIndex = 0;
    }
}  




//Guess array of 8 arrays - query selector all
//for each - click event - next available 0 (1 is already assigned)

// guess position, change index in playerGuesses array to chosen colour. Update the class of the individual hole with selected colour.
// update player guesses variable to a colour string
// if guess position = 3, increase guess number by 1
// guess number effects which purple array. guess position is the individual value

//function finds first available 0 - replace the 0 and break the function
//loop through arrays