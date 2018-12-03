import { Letter } from "./letter";

export const Word = function(word: string) {
    this.wordChoice = word;
    this.obWord = [];

    this.init = () => {
        let i: number = 0;
        for (i; i < this.wordChoice.length; i++) {
            this.obWord[i] = new Letter(this.wordChoice[i]);
        }
    };

    this.retWord = () => {
        let i: number = 0;
        let currentWord: string = "";
        for (i; i < this.wordChoice.length; i++) {
            currentWord += this.obWord[i].retVal();
        }

        return currentWord;
    };

    this.guessLetter = (character: string) => {
        let i: number = 0;
        for (i; i < this.wordChoice.length; i++) {
            this.obWord[i].checkVal(character);
        }
    };
};
