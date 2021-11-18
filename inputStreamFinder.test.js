import { inputStreamFinder } from "./inputStreamFinder";


test(`User passes -i argument with path that doesn't exist or with no read access`, () => {
    const arr = ['-i', 'input.txt'];
    expect((done) => {
        try {
            expect(inputStreamFinder(arr)).toThrow('Incorrect input file or no acces to it!');
            done();
        } catch (e){
            done(e);
        }
        inputStreamFinder(arr);
    })
});
