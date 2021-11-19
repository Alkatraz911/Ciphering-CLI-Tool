import { argumentChecker } from './argumentChecker.js'

test('test argumentChecker expected Error To many flags',  () => {
    const args = ['-c','--config', '-i', '-o'];
    expect(()=>{argumentChecker(args)}).toThrow('To many flags!'); 
});

test('test argumentChecker expected Error To many flags!',  () => {
    const args = ['-c','--config', '-o'];
    expect(()=>{argumentChecker(args)}).toThrow('To many flags!'); 
});

test('test argumentChecker expected Error Config flag is missing!',  () => {
    const args = ['-i', '-o'];
    expect(()=>{argumentChecker(args)}).toThrow('Config flag is missing!'); 
});

