import * as inquirer from "inquirer";
import { Game } from "./game";

// Start the application
function play() {
    if (newGame.selectedWord.retWord().includes("_") && newGame.guessesLeft() !== 0) {
        const questionType: inquirer.Questions = [
            {
                message: "Guess a letter!",
                name: "letterGuess",
                type: "input",
            },
        ];

        inquirer.prompt(questionType).then((res: inquirer.Answers) => {
            newGame.selectedWord.guessLetter(res.letterGuess[0]);

            if (newGame.selectedWord.retWord().includes(res.letterGuess[0])) {
                console.log("\x1b[32m", "Correct!\n");
            } else {
                newGame.decrementGuesses();
                console.log("\x1b[31m", `Incorrect - you have ${newGame.guessesLeft()} guesses remaining\n`);
            }
            console.log("\x1b[0m", newGame.selectedWord.retWord().split("").join(" "));
            play();
        });
    } else if (!newGame.selectedWord.retWord().includes("_")) {
        console.log("Congrats - you won!");
    } else if (newGame.guessesLeft() === 0) {
        console.log("You ran out of guesses - oh well!");
    } else {
        console.log("How did you even get here?");
    }
}

const newGame = new Game();
newGame.randomWord();

console.log("Random word has been generated!");

play();
