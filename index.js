import { TerminalReader } from './terminalReader.js';
import { exit, stdin } from 'process';
import { CeasarTransform } from './CeasatTransform.js'
import  { inputStream } from './inputStream.js';
import { outputStream } from './outputStream.js';
import { pipeline } from 'stream';
import path from 'path';

const argumentChecker = (args) => {
    let allowedArgs = ['-c','--config','-i','--input','-o','--output'];
    let argsNumber = 0;
    
    for (const el of allowedArgs) {
        if (args.includes(el)) {
            argsNumber += 1;
        }
    }

    if (argsNumber > 3 ) {
        process.stderr.write('To many arguments!');
        exit(1);

    } else {
        let configArgNumber = 0;
        let inputArgNumber = 0;
        let outputArgNumber = 0;
        for (const el of args) {
            if (el ==='-c' || el === '--config') {
                configArgNumber += 1;
            }
            if (el ==='-i'|| el === '--input') {
                inputArgNumber += 1;
            } 
            if (el ==='-o' || el === '--output') {
                outputArgNumber += 1;
            } 
        }
        if (configArgNumber === 0){
            process.stderr.write('Config argument is missing!');
            exit(1);
        } else if (inputArgNumber > 1 || outputArgNumber > 1 || configArgNumber > 1) {
            process.stderr.write('To many arguments!');
            exit(1);
        }

    }

    





}

const configChecker = (args) => {
    const allowedArgs = ['C1','C0','R1','R0','A']
    let config = args.includes('-c')? args[args.indexOf('-c')+1] : args[args.indexOf('--config')+1];
    config = config.split('-')
    let result = []
    for (const el of config) {
        if (el.length <= 2 && allowedArgs.includes(el)) {
            result.push(el)
        } else {
            process.stderr.write('Invalid config!')
           exit(1);
        }
    }
    return result;
}

const configParser =  (config,arr) => {
    for (const el of config) {
        if (el === 'C1') {
            arr.push(new CeasarTransform(el)); 
        } else if (el === 'C0') {
            arr.push(new CeasarTransform(el));
        } else if (el === 'R1') {
    
        } else if (el === 'R0') {
    
        } else if (el === 'A') {
    
        }
    }
}

let transformArr = [];
let args = new TerminalReader().read();
argumentChecker(args);

let config = configChecker(args);

configParser(config,transformArr);


let input = new inputStream(`${path.dirname(process.argv[1])}\\input.txt`, { highWaterMark: 64 });
let output = new outputStream(`${path.dirname(process.argv[1])}\\test.txt`);

pipeline(
    input,
    ...transformArr,
    output,
    (err) => {
        if (err){
            console.log(err)
        }
        console.log("Finished successfully")
    }
) 


