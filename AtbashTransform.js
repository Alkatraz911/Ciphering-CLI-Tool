import { Transform } from 'stream';


const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const REVERSED_AlPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse();
const INDEXES_OF_AlPHABET = ALPHABET.map(el => el.charCodeAt());
const INDEXES_OF_REVERSED_AlPHABET = REVERSED_AlPHABET.map(el => el.charCodeAt());

const atbash = (input) => {
    let letters = input.split('');
    let result = letters.map((char) => {
        let num = char.charCodeAt(0);
        if (num > 96 && num < 123) {
            let i = INDEXES_OF_AlPHABET.indexOf(num);
            let reversedIndex = INDEXES_OF_REVERSED_AlPHABET[i];
            return String.fromCharCode(reversedIndex);
        } else if (num > 64 && num < 91) {
            let i = INDEXES_OF_AlPHABET.indexOf(num + 32);
            let reversedIndex = INDEXES_OF_REVERSED_AlPHABET[i] - 32;
            return String.fromCharCode(reversedIndex);
        } else {
            return char;
        }
    });
    return result.join('');
}


class atbashTransform extends Transform {
    constructor(opt) {
        super(opt);
    }

    _transform(chunk, encoding, callback) {
        callback(null, atbash(chunk.toString()));
    }
}

export { atbashTransform, atbash }