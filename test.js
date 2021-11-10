import  { inputStream } from './inputStream.js';
import { outputStream } from './outputStream.js';
import { pipeline } from 'stream';
import path from 'path';

let input = new inputStream(`${path.dirname(process.argv[1])}\\input.txt`, { highWaterMark: 64 });
let output = new outputStream(`${path.dirname(process.argv[1])}\\test.txt`);

pipeline(
    input,
    output,
    (err) => {
        if (err){
            console.log(err)
        }
        console.log("Finished successfully")
    }
) 

// input.on('data', (chunk) => {
//     console.log(chunk.toString())
// });