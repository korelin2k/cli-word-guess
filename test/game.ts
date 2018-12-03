import { expect } from "chai";
import { Game } from "../src/game";

describe("Game Functionality", () => {
    it("should return the number of guesses left", () => {
        const game: any = new Game();
        expect(game.guessesLeft()).to.equal(10);
    });
    it("should increment the guesses", () => {
        const game: any = new Game();
        game.decrementGuesses();
        expect(game.guessesLeft()).to.equal(9);
    });
    it("should return a random word", () => {
        const game: any = new Game();
        expect(game.randomWord()).to.equal(true);
    });
});
