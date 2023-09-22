let colors  = ['#DC143C', '#89CFF0', '#FFEA00', '#FAA0A0', '#0BDA51', 'darkorchid'];

let solution =[];

let currentHoleIndex = 0;

let currentIndicatorHoleIndex = 0;

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
}
generateRandomColors(colors);


const playerGuesses = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];

let color;

function chosenColor(event) {
    const currentHoleId = `hole${currentHoleIndex}`;
    const currentHoleElement = document.getElementById(currentHoleId);
    let flag = 0;
    let flag2 = 0;
    const submitButton = document.getElementById("submit");
    let currentLine = 0;
     for (let i = 0; i < playerGuesses.length && flag === 0; i++) {
        for (let j = 0; j < playerGuesses[i].length && flag === 0; j++){
            if (playerGuesses[i][j]===0) {
            playerGuesses[i][j] = event.target.value;        
            console.log(playerGuesses[i]);            
            currentHoleElement.style.backgroundColor = event.target.value; 
            flag = 1
            console.log(j, playerGuesses[i].length);
            if (j === 3 && flag2 === 0) {
                const disableColors = document.querySelectorAll(".colorHole")
                disableColors.forEach(function(color){
                color.disabled = true;})
                flag2 = 1; 
                }
            } 
            currentLine = i;
            colorCompare(i, j);
        }
    }
    submitButton.addEventListener("click", function(){
        flag2 = 0;
        console.log(playerGuesses[currentLine]);
        console.log(solution);
        const disableColors = document.querySelectorAll(".colorHole")
        if (playerGuesses[currentLine].toString() === solution.toString()) {
            console.log("You win");
            document.getElementById("solutionHole0").style.backgroundColor = `${solution[0]}`;
            document.getElementById("solutionHole1").style.backgroundColor = `${solution[1]}`;
            document.getElementById("solutionHole2").style.backgroundColor = `${solution[2]}`;
            document.getElementById("solutionHole3").style.backgroundColor = `${solution[3]}`;
            document.getElementById("header").innerHTML = "YOU WIN";
        }
                disableColors.forEach(function(color){
                color.disabled = false;})
                if (currentHoleIndex >= 32) {
                    document.getElementById("solutionHole0").style.backgroundColor = `${solution[0]}`;
                    document.getElementById("solutionHole1").style.backgroundColor = `${solution[1]}`;
                    document.getElementById("solutionHole2").style.backgroundColor = `${solution[2]}`;
                    document.getElementById("solutionHole3").style.backgroundColor = `${solution[3]}`;
                }           
    })
      currentHoleIndex++;     
}  

function colorCompare(i, j) {
    const currentIndicatorHoleId = `indicatorHole${i}${j}`;
    const currentIndicatorHoleElement = document.getElementById(currentIndicatorHoleId);
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function() {
    if (playerGuesses[i][j] === solution[j]) {
        // If the color is correct and in the right place
        currentIndicatorHoleElement.style.backgroundColor = "green";
    } else if (solution.includes(playerGuesses[i][j])) {
        // If the color is correct but in the wrong place
        currentIndicatorHoleElement.style.backgroundColor = "yellow";
    } else {
        // If the color is  wrong
        currentIndicatorHoleElement.style.backgroundColor = "";
    }
})
}


// Make solution holes reveal solution if player guesses correctly