// constructor function for creating student objects
export const Letter = function(character: string) {
    this.character = character;
    this.guessed = false;

    this.retVal = () => {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    };

    this.checkVal = (guess: string) => {
        if (this.character === guess) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    };
};
