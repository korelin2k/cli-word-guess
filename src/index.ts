import * as inquirer from "inquirer";
import { Word } from "./word";

export const Game = function() {
    this.guessesRemaining = 10;
    this.selectedWord = "";

    this.guessesLeft = () => {
        return this.guessesRemaining;
    };

    this.decrementGuesses = () => {
        this.guessesRemaining--;
    };

    this.randomWord = () => {
        const wordChoices = [
            "horror",
            "pitch",
            "dissolve",
            "flytrap",
            "aversion",
            "propeller",
            "crusher",
            "project",
            "excuse",
            "cognitive",
            "disciple",
            "gargoyle",
            "blast",
            "rose",
            "bliss",
            "hack",
            "dangerous",
        ];

        const randomWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
        this.selectedWord = new Word(randomWord);
        this.selectedWord.init();

        if (this.selectedWord) {
            return true;
        } else {
            return false;
        }
    };
};

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
            newGame.selectedWord.guessLetter(res.letterGuess);

            if (newGame.selectedWord.retWord().includes(res.letterGuess)) {
                console.log("Correct!");
            } else {
                newGame.decrementGuesses();
                console.log(`Incorrect - you have ${newGame.guessesLeft()} guesses remaining`);
            }
            console.log(newGame.selectedWord.retWord().split("").join(" "));
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
