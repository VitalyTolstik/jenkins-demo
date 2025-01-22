import { expect } from 'chai';

describe("test suite 1", () => {
    it("test 1", async () => {
        await new Promise(resolve => setTimeout(() => {
            console.log("test 1 processing...");
            resolve();
        }, 1500));
        expect(true).to.be.true;
    });

    it("test 2", async () => {
        await new Promise(resolve => setTimeout(() => {
            console.log("test 2 processing...");
            resolve();
        }, 1000));
        expect(true).to.be.true;
    });

    it("test 3", async () => {
        await new Promise(resolve => setTimeout(() => {
            console.log("test 3 processing...");
            resolve();
        }, 500));
        expect(true).to.be.true;
    });
});