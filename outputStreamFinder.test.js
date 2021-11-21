import { outputStreamFinder } from "./outputStreamFinder";
import { Writable } from 'stream';


test('test return of process.stout',  () => {
    const arr = [];
    const result =  outputStreamFinder(arr);
    expect(result).toEqual(process.stdout);
});

test('test return of OutputStream',  () => {
    const arr = ['-o','output.txt'];
    const result =  outputStreamFinder(arr);
    expect(result).toBeInstanceOf(Writable);
});

