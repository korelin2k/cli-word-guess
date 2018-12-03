import { expect } from "chai";
import { Letter } from "../src/letter";

describe("Letter Functionality", () => {
    it("should return blank space", () => {
        const character: string = "c";
        const letter: any = new Letter(character);
        expect(letter.retVal()).to.equal("_");
    });
    it("should check letter and return false if not correct", () => {
        const character: string = "c", guess: string = "d";
        const letter: any = new Letter(character);
        expect(letter.checkVal(guess)).to.equal(false);
    });
    it("should check letter and return true if correct", () => {
        const character: string = "c", guess: string = "c";
        const letter: any = new Letter(character);
        expect(letter.checkVal(guess)).to.equal(true);
    });
    it("should return letter", () => {
        const character: string = "c", guess: string = "c";
        const letter: any = new Letter(character);
        letter.checkVal(guess);
        expect(letter.retVal()).to.equal("c");
    });
});
