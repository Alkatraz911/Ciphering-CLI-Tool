import path from 'path';
import fs from 'fs';
import  { inputStream } from './inputStream.js';

const inputStreamFinder = (args) => {
    let allowedArgs = ['-c','--config','-i','--input','-o','--output'];
    let inputFile;
    args.map((el,i) => {
        if (el === '-i'|| el === '--input') {
            inputFile = args[i+1];
        } 
    })
    if  (allowedArgs.includes(inputFile) || inputFile === undefined) {
        return process.stdin;
        
    } else {
        let pathToInput = `${path.dirname(process.argv[1])}\\${inputFile}`
        fs.access(pathToInput, fs.constants.F_OK, (err => {
            if (err) {
                process.stderr.write('Incorrect input file or no acces to it!');
                process.exit(1);
            }   
        }));
        return new inputStream(pathToInput, { highWaterMark: 16 });
    }
}

export { inputStreamFinder }