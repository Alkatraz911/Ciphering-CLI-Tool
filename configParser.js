import { CeasarTransform } from './CeasatTransform.js';
import { rot8Transform } from './Rot8Transform.js';
import { atbashTransform } from './AtbashTransform.js';

const configParser =  (config) => {
    let arr = [];
    for (const el of config) {
        if (el === 'C1') {
            arr.push(new CeasarTransform(el)); 
        } else if (el === 'C0') {
            arr.push(new CeasarTransform(el));
        } else if (el === 'R1') {
            arr.push(new rot8Transform(el));
        } else if (el === 'R0') {
            arr.push(new rot8Transform(el));
        } else if (el === 'A') {
            arr.push(new atbashTransform());
        }
    }
    return arr;
}

export { configParser };