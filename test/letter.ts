import { expect } from 'chai';

const arrayHere: string[] = ["hi", "there"];

describe('Letter Functionality', () => {
    it('testing out basic functionality', () => {
        expect(arrayHere[0]).to.equal("hi");
    });
    it('testing out basic functionality 2', () => {
        expect(arrayHere[1]).to.equal("there");
    });
});