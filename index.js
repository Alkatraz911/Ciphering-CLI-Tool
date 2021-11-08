import { TerminalReader } from './terminalReader.js';
import { exit, stdin } from 'process';

let input;
let output;
// let config;

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

const charToNum = (char) => {
    return char.charCodeAt(0) - 97
}

const numToChar = (num) => {
    return String.fromCharCode(97 + num)
}

const configChecker = (args) => {
    const allowedArgs = ['C1','C0','R1','R0','A']
    let config = args.includes('-c')? args[args.indexOf('-c')+1] : args[args.indexOf('--config')+1];
    config = config.split('-')
    
    for (const el of config) {
        if (el.length > 2 || !allowedArgs.includes(el)) {
            process.stderr.write('Invalid config!')
        } else {
            return config;
        }

    }

}

const configParser = (config, input = 'abcdefg') => {
    let result='';
    for (const el of config){
        if (el === 'C1') {
            result += ceaser(el, result = input);
        } else if (el === 'C0') {
            result += ceaser(el, input);
        } else if (el === 'R1') {
    
        } else if (el === 'R0') {
    
        } else if (el === 'A') {
    
        }
    }
    console.log(result);
    return result;
}

const ceaser = (mode,input) => {

    if (mode === 'C1') {
        let letters = input.split('');
        let result = letters.map((el) => {
            return numToChar((charToNum(el) + 1) % 26);
        })
        return result.join('');
    } else if (mode === 'C0') {
        let letters = input.split('');
        let result = letters.map((el) => {
            // if (el === 'a') {
            //     el = 
            // }
            return numToChar(((charToNum(el)+26) - 1) % 26);
        })
        return result.join('');
    }
}

let args = new TerminalReader().read();
argumentChecker(args)
let config = configChecker(args);
configParser(config)




// pipeline(
//     input_stream, // input file stream or stdin stream
//     transform_stream, // Transform stream
//     output_stream // output file stream or stdout stream
// )