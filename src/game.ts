import { Word } from "./word";

export class Game {
    public guessesRemaining: number;
    public selectedWord: Word;

    constructor() {
        this.guessesRemaining = 10;
    }

    public guessesLeft() {
        return this.guessesRemaining;
    }

    public decrementGuesses() {
        this.guessesRemaining--;
    }

    public randomWord() {
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

        if (this.selectedWord) {
            return true;
        } else {
            return false;
        }
    }
}
