import { pipeline } from 'stream';
import path from 'path';
import fs from 'fs';
import { TerminalReader } from './terminalReader.js';
import  { inputStream } from './inputStream.js';
import { outputStream } from './outputStream.js';
import { argumentChecker } from './argumentChecker.js';
import { configChecker } from './configChecker.js';
import { configParser } from './configParser.js';
import { errorHandler } from './errorHandler.js';


let input_stream;
let output_stream;

const streamFinder = (args) => {
    let allowedArgs = ['-c','--config','-i','--input','-o','--output'];
    let inputFile;
    let outputFile;
    args.map((el,i)=>{
        if (el === '-i'|| el === '--input') {
            inputFile = args[i+1];
        } else if (el === '-o'|| el === '--output') {
            outputFile = args[i+1];
        }
    })
    if  (allowedArgs.includes(inputFile) || inputFile === undefined) {
        input_stream = process.stdin;
        input_stream.setEncoding('utf-8');
    } else {
        let pathToInput = `${path.dirname(process.argv[1])}\\${inputFile}`
        fs.access(pathToInput, fs.constants.F_OK, (err => {
            if (err) {
                process.stderr.write('Incorrect input file or no acces to it!');
                process.exit(1);
            }   
        }));
        input_stream = new inputStream(pathToInput, { highWaterMark: 16 });
    }
    if (allowedArgs.includes(outputFile) || outputFile === undefined) {
        output_stream = process.stdout;
    } else {
        let pathToOutput = `${path.dirname(process.argv[1])}\\${outputFile}`
        fs.access(pathToOutput, fs.constants.F_OK, (err => {
            if (err) {
                process.stderr.write('Incorrect output file or no acces to it!');
                process.exit(1);
            }   
        }));
        output_stream = new outputStream(pathToOutput);
    }
}


let args = new TerminalReader().read();

try {
    argumentChecker(args);
    streamFinder(args);
    pipeline(
        input_stream,
        ...configParser(configChecker(args)),
        output_stream,
        (err) => {
            if (err){
                process.stderr.write(err);
            }
            process.stdout.write("Finished successfully")
        }
    ); 
} catch (e) {
    errorHandler(e);
}










