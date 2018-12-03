// constructor function for creating student objects
export const Letter = function(character: string) {
    this.character = character;
    this.guessed = false;

    this.retVal = function() {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    };

    this.checkVal = function(guess: string) {
        if (this.character === guess) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    };
};
