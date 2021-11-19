import { ceaser, transformUpperChar, transformLowerChar } from './CeasarTransform.js';

test('test transformUpperChar expected B', async () => {
    const str = 'A';
    const shift =  1;
    const result = await transformUpperChar(str,shift);
    expect(result).toBe('B'); 
});

test('test transformLowerChar expected z', async () => {
    const str = 'a';
    const shift =  -1;
    const result = await transformLowerChar(str,shift);
    expect(result).toBe('z'); 
});

test('test ceaser encoding expected BBB', async () => {
    const str = 'AAA';
    const shift =  'C1'
    const result = await ceaser(shift,str);
    expect(result).toBe('BBB'); 
});

test('test cease decoding expected ZZZ', async () => {
    const str = 'AAA';
    const shift =  'C0'
    const result = await ceaser(shift,str);
    expect(result).toBe('ZZZ'); 
});

test('test ceaser skipping non a-z,A-Z symbols encode mode', async () => {
    const str = '!!!';
    const shift =  'C1'
    const result = await ceaser(shift,str);
    expect(result).toBe('!!!'); 
});

test('test ceaser skipping non a-z,A-Z symbols decode mode', async () => {
    const str = '!!!';
    const shift =  'C0'
    const result = await ceaser(shift,str);
    expect(result).toBe('!!!'); 
});