import { Transform } from 'stream'

const ALPHABET_LENGTH = 26;
const CHAR_CODE_UP = 65;
const CHAR_CODE_LOW = 97;

const transformUpperChar = (char,shift) => {
    let newCharCode =  (char.charCodeAt(0) - CHAR_CODE_UP + shift) % ALPHABET_LENGTH;
    if(newCharCode < 0){
        newCharCode += ALPHABET_LENGTH;
    }
    newCharCode += CHAR_CODE_UP;
    return String.fromCharCode(newCharCode);
}

const transformLowerChar = (char,shift) => {
    let newCharCode =  (char.charCodeAt(0) - CHAR_CODE_LOW + shift) % ALPHABET_LENGTH;
    if (newCharCode < 0) {
        newCharCode += ALPHABET_LENGTH;
    }
    newCharCode += CHAR_CODE_LOW;
    return String.fromCharCode(newCharCode);
}

const ceaser = (mode,input) => {

    if (mode === 'C1') {
        let letters = input.split('');
        let result = letters.map((el) => {
            let num = el.charCodeAt(0)
            if  (num > 96 && num < 123)  {
                return transformLowerChar(el,1);
            } else if (num > 64 && num < 91) {
                return transformUpperChar(el,1);
             } else {
                return el;
             }
        });
        return result.join('');
    } else if (mode === 'C0') {
        let letters = input.split('');
        let result = letters.map((el) => {
            let num = el.charCodeAt(0)
            if  (num > 96 && num < 123)  {
                return transformLowerChar(el,-1);
            } else if (num > 64 && num < 91) {
                return transformUpperChar(el,-1);
             } else {
                return el;
             }
        });
        return result.join('');
    }
}

class CeasarTransform extends Transform {
    constructor(mode,opt) {
        super(mode,opt);
        this.mode = mode;
        
    }

    _transform(chunk,encoding,callback) {
        callback(null, ceaser(this.mode,chunk.toString()))
    }
}

export { CeasarTransform }