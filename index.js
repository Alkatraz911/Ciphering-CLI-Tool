import { TerminalReader } from './terminalReader.js';
import { exit } from 'process';

let input;
let output;
let config;

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
    
    for (const el of config) {
        if (el.length > 2 || !allowedArgs.includes(el)) {
            process.stderr.write('Invalid config!')
        }

    }

}

let args = new TerminalReader().read();
argumentChecker(args)
configChecker(args)




// pipeline(
//     input_stream, // input file stream or stdin stream
//     transform_stream, // Transform stream
//     output_stream // output file stream or stdout stream
// )