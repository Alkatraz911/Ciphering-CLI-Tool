import path from 'path';
import fs from 'fs';
import { outputStream } from './outputStream.js';

const outputStreamFinder = (args) => {
    let allowedArgs = ['-c','--config','-i','--input','-o','--output'];
    let outputFile;
    args.map((el,i) => {
        
         if (el === '-o'|| el === '--output') {
            outputFile = args[i+1];
        }
    })

    if (allowedArgs.includes(outputFile) || outputFile === undefined) {
        return process.stdout;
    } else {
        let pathToOutput = `${path.dirname(process.argv[1])}\\${outputFile}`
        fs.access(pathToOutput, fs.constants.F_OK, (err => {
            if (err) {
                process.stderr.write('Incorrect output file or no acces to it!');
                process.exit(1);
            }   
        }));
        return new outputStream(pathToOutput);
    }
}

export { outputStreamFinder }