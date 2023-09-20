let colors  = ['#DC143C', '#89CFF0', '#FFEA00', '#FAA0A0', '#0BDA51', 'darkorchid'];

let guessNumber = 0;

let guessPosition = 0;

let solution =[];

//Generates a random combo of colors
function generateRandomColors(colors) {
   let a = colors[Math.floor(Math.random() * colors.length)];
   let b = colors[Math.floor(Math.random() * colors.length)];
   let c = colors[Math.floor(Math.random() * colors.length)];
   let d = colors[Math.floor(Math.random() * colors.length)];
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
    const currentHoleId = `hole${currentHoleIndex}`;
    const currentHoleElement = document.getElementById(currentHoleId);
    let flag = 0;
    for (let i = 0; i < playerGuesses.length && flag === 0; i++) {
        for (let j = 0; j < playerGuesses[i].length && flag === 0; j++){
            if (playerGuesses[i][j]===0) {
            playerGuesses[i][j] = event.target.value;     // How can I stop it from filling all arrays,        
            console.log(playerGuesses[i]);                // not just one?  I need to link the submit button to it moving onto hole line 2, etc.
            currentHoleElement.style.backgroundColor = event.target.value; 
            flag = 1
            console.log(j, playerGuesses[i].length);
            if (j === 3) {
                const disableColors = document.querySelectorAll(".colorHole")
                disableColors.forEach(function(color){
                color.disabled = true;})
            }
            colorCompare(i, j);
            } 
        }
    }
      currentHoleIndex++;     
      if (currentHoleIndex >= 32) {
        currentHoleIndex = 0;
    }
}  

function colorCompare(i, j) {
     if (playerGuesses[i][j]===solution[j]) {
        console.log("right colour, right place");
    }
    else if (solution.includes (playerGuesses[i][j]))
        console.log("Right colour, wrong place");
    else {
        console.log("Wrong");
    }
}