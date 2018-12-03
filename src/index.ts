import { Word } from "./word";

export const Game = function() {
    this.guessesRemaining = 10;

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
        const selectedWord = new Word(randomWord);

        if (selectedWord) {
            return true;
        } else {
            return false;
        }
    };
};
