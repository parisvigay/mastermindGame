let colors  = ['#DC143C', '#89CFF0', '#FFEA00', '#FAA0A0', '#0BDA51', 'darkorchid'];

let solution =[];

let currentHoleIndex = 0;

let currentSolutionHoleIndex = 0;

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
            colorCompare(i, j);
            } 
        }
    }
    submitButton.addEventListener("click", function(){
        flag2 = 0;
        const disableColors = document.querySelectorAll(".colorHole")
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
    const currentSolutionHoleId = `SolutionHole${currentSolutionHoleIndex}`;
    const currentSolutionHoleElement = document.getElementById(currentSolutionHoleId);
    if (playerGuesses[i][j]===solution[j]) {
        console.log("right colour, right place");
        currentSolutionHoleElement.style.backgroundColor = "green"
    }
    else if (solution.includes (playerGuesses[i][j]))
        console.log("Right colour, wrong place");
    else {
        console.log("Wrong");
    }
    currentSolutionHoleIndex++;
}
// Make solution holes original colour before player wins