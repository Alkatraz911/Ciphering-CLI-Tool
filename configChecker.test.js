
import { configChecker } from "./configChecker.js";


test('User passes the same cli argument twice; Result: Error message is shown', () => {
    const arr = ['-c', '-c'];
    expect(()=> configChecker(arr)).toThrow('You provided -c argument more than once!');
});

test(`User doesn't pass -c or --config argument; Result: Error message is shown`, () => {
    const arr = ['-i', '-o'];
    expect(()=> configChecker(arr)).toThrow('No config!');
});

test(`User passes incorrent symbols in argument for --config; Result: Error message is shown`, () => {
    const arr = ['-c', 'B5-G6-H4'];
    expect(()=> configChecker(arr)).toThrow('Invalid config!');
});


