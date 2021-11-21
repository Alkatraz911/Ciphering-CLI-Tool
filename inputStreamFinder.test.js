import { inputStreamFinder } from "./inputStreamFinder";
import { Readable } from 'stream';
import {jest} from '@jest/globals';



// test(`User passes -i argument with path that doesn't exist or with no read access`, async () => {
//     const arr = ['-i', 'inpu.txt'];
//     try{
//         await inputStreamFinder(arr);
//     } catch(e){
//         const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
//         expect(mockExit).toHaveBeenCalledWith(1);
//         mockExit.mockRestore();
//     }
// });

test('test return of process.stdin',  () => {
    const arr = [];
    const result =  inputStreamFinder(arr);
    expect(result).toEqual(process.stdin);
});

test('test return of InputStream',  () => {
    const arr = ['-i','input.txt'];
    const result =  inputStreamFinder(arr);
    expect(result).toBeInstanceOf(Readable);
});