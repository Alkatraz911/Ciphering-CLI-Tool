
import { InvalidConfigError } from "./errors.js";

const argumentChecker = (args) => {
    let allowedArgs = ['-c','--config','-i','--input','-o','--output'];
    let argsNumber = 0;
    
    for (const el of allowedArgs) {
        if (args.includes(el)) {
            argsNumber += 1;
        }
    }

    if (argsNumber > 3 ) {
        throw new InvalidConfigError('To many flags!')
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
            throw new InvalidConfigError('Config flag is missing!');
        } else if (inputArgNumber > 1 || outputArgNumber > 1 || configArgNumber > 1) {
            throw new InvalidConfigError('To many flags!');
        }   
    }
}

export { argumentChecker };