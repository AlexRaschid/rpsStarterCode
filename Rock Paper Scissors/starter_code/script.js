// Task 1: Create a function that randomly chooses among 'rock', 'paper', or 'scissors'.
var generateComputerChoice = function () {
    // Task 1, Step 1: Create an array with three elements ("rock", "paper" and "scissors").
        var rps = ["rock", "paper", "scissors"];
    // Task 1, Step 2: Use the JavaScript Math function to generate a random whole
    // number between 0 and 2. Be sure to save it to a variable.
        var random = Math.round(Math.random() * 2);
    // Task 1, Step 3: Use this randomly generated number to pull a value from the
    // array (eg myArray[randomNum])
        var randomVal = rps[random];
        
    // Task 1, Step 4: return this new value
        return randomVal;
};

// Task 2: Create a function that compares the userChoice and the computerChoice
// to decide who won.
var pickWinner = function (userChoice, computerChoice) {
    console.log("user choice: " + userChoice);
    console.log("computer choice: " + computerChoice);
    // Task 2, Step 1: Create an "if/else if/else" statement that compares the
    // userChoice and computerChoice under any possible game outcome.
       if(userChoice == computerChoice){
           console.log("Draw!");
           $(".winner").text("Draw! No winner :(");
           
       }else if(userChoice == "rock" && computerChoice == "scissors" ||
                userChoice == "paper" && computerChoice == "rock" ||
                userChoice == "scissors" && computerChoice == "paper"){
                
                console.log("User Won");
                $(".winner").text("User wins");
           
           
           
       }else if(computerChoice == "rock" && userChoice == "scissors" ||
                computerChoice == "paper" && userChoice == "rock" ||
                computerChoice == "scissors" && userChoice == "paper"){
                    
                    
                console.log("Computer Won");
                $(".winner").text("Computer wins");
           
           
           
       }
    // Task 2, Step 2: Depending on who is the winner of the game console.log
    // either "user wins", "computer wins" or "draw"

    // Task 4: Show `computerChoice` in HTML after the words "Computer's choice:"
    
    // Task 5: Show the winner in HTML after the word "Winner:"
};

/* DOCUMENT READY: Everything inside this function will happen after
   the user's browser has finished loading the webpage. */
$(document).ready(function() {

    // This line calls the `generateComputerChoice` function and assigns its
    // return value to the variable `computerChoice`.
    var computerChoice = generateComputerChoice();

    // This line sets `userChoice` variable to 'rock'. This value can be changed
    // manually when testing in the console.
    
            $(".choice").click(function(event){
                console.log(event);
                console.log(event.target);
                var userChoice;
                
                
                
                if(event.target.id == "rock"){
                    userChoice = "rock";
                    
                }else if(event.target.id == "paper"){
                    userChoice = "paper";
                    
                    
                }else if(event.target.id == "scissors"){
                    userChoice = "scissors";
                    
                }
                    
                
                pickWinner(userChoice, computerChoice);
            });
    // Task 3: To be completed AFTER this game functions in the console.
    // Set `userChoice` to "null" and create click handlers that changes the
    // value of userChoice based on the item the user clicks on the HTML page.

    // This line calls the `pickWinner` function with the `userChoice` variable
    // and the `computerChoice` variable.
    
    //Final Task: comment out the pickWinner function on the line above and place it within your click functions created in Task 3.
    //this is done so the computer does not pick its throw until the user has also done so.
    

});
