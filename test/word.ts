import { expect } from "chai";
import { Word } from "../src/word";

describe("Word Functionality", () => {
    it("should return all underlines for each character", () => {
        const wordChoice: string = "christmas";
        const word: any = new Word(wordChoice);
        word.init();
        expect(word.retWord()).to.equal("_________");
    });
    it("should return the word after s was guessed", () => {
        const wordChoice: string = "christmas", guess: string = "s";
        const word: any = new Word(wordChoice);
        word.init();
        word.guessLetter(guess);
        expect(word.retWord()).to.equal("____s___s");
    });
    it("should return the full word", () => {
        const wordChoice: string = "christmas";
        const word: any = new Word(wordChoice);
        word.init();
        word.guessLetter("c");
        word.guessLetter("h");
        word.guessLetter("r");
        word.guessLetter("i");
        word.guessLetter("s");
        word.guessLetter("t");
        word.guessLetter("m");
        word.guessLetter("a");
        expect(word.retWord()).to.equal("christmas");
    });
});
