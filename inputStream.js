import fs from 'fs';


let arr = [];
let inputStream;
let args = process.argv.slice(2);

for (const el of args) {

    if (el === '-c') {
        arr.push(el);
    }
}

if (arr.length > 1) {
    process.stderr.write('To many options!');
    process.exit(1);
} else {
    let arr = []
    for(let i = 0; i < args.length+2; i++) {
        arr.push([args.shift().replace('-',''), args.shift()])
    }
     args = new Map(arr);
     args = Object.fromEntries(args);
    if (args.i) {
        inputStream = fs.createReadStream('./input.txt')
    } else {
        inputStream = process.stdin;
    }
}

export { inputStream }
