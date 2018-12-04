// constructor function for creating student objects
export class Letter {
    public character: string;
    public guessed: boolean;

    constructor(character: string) {
        this.character = character;
        this.guessed = false;
    }

    public retVal() {
        if (this.guessed) {
            return this.character;
        } else {
            return "_";
        }
    }

    public checkVal(guess: string) {
        if (this.character === guess) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}
