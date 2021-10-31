import minimist from "minimist";

let args = minimist(process.argv.slice(2))
if(args.a)
console.log(args)
process.stdin.resume()