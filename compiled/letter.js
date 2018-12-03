"use strict";
exports.__esModule = true;
exports.Letter = function (character) {
    this.character = character;
    this.guessed = false;
    this.retVal = function () {
        if (this.guessed) {
            return this.character;
        }
        else {
            return "_";
        }
    };
    this.checkVal = function (guess) {
        console.log(this.character, guess);
        if (this.character === guess) {
            this.guessed = true;
            return true;
        }
        else {
            return false;
        }
    };
};
//# sourceMappingURL=letter.js.map