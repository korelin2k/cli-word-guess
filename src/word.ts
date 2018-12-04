import { Letter } from "./letter";

export class Word {
    public wordChoice: string;
    public obWord: Letter[] = [];

    constructor(word: string) {
        this.wordChoice = word;
        let i: number = 0;
        for (i; i < this.wordChoice.length; i++) {
            this.obWord[i] = new Letter(this.wordChoice[i]);
        }
    }

    public retWord() {
        let i: number = 0;
        let currentWord: string = "";
        for (i; i < this.wordChoice.length; i++) {
            currentWord += this.obWord[i].retVal();
        }

        return currentWord;
    }

    public guessLetter(character: string) {
        let i: number = 0;
        let status: boolean;
        for (i; i < this.wordChoice.length; i++) {
            status = this.obWord[i].checkVal(character);
        }

        return status;
    }
}
