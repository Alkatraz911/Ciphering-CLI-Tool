import { inputStreamFinder } from "./inputStreamFinder";


test(`User passes -o argument with path that doesn't exist or with no read access`, () => {
    const arr = ['-o', 'output.txt'];
    expect(async () => {
        try {
            await inputStreamFinder(arr);
        } catch (e){
           expect(e).toThrow('Incorrect input file or no acces to it!');
        }
       inputStreamFinder(arr);
    })
});