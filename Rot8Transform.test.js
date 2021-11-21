import { rot8, transformUpperChar, transformLowerChar } from './Rot8Transform.js';

test('test transformUpperChar expected I', async () => {
    const str = 'A';
    const shift =  8;
    const result = await transformUpperChar(str,shift);
    expect(result).toBe('I'); 
});

test('test transformLowerChar expected s', async () => {
    const str = 'a';
    const shift =  -8;
    const result = await transformLowerChar(str,shift);
    expect(result).toBe('s'); 
});

test('test rot8 encoding expected iii', async () => {
    const str = 'aaa';
    const shift =  'R1'
    const result = await rot8(shift,str);
    expect(result).toBe('iii'); 
});

test('test rot8 encoding expected iii', async () => {
    const str = 'AAA';
    const shift =  'R1'
    const result = await rot8(shift,str);
    expect(result).toBe('III'); 
});

test('test rot8 decoding expected ', async () => {
    const str = 'AAA';
    const shift =  'R0'
    const result = await rot8(shift,str);
    expect(result).toBe('SSS'); 
});

test('test rot8 decoding expected ', async () => {
    const str = 'aaa';
    const shift =  'R0'
    const result = await rot8(shift,str);
    expect(result).toBe('sss'); 
});

test('test rot8 skipping non a-z,A-Z symbols encode mode', async () => {
    const str = '!!!';
    const shift =  'R1'
    const result = await rot8(shift,str);
    expect(result).toBe('!!!'); 
});

test('test rot8 skipping non a-z,A-Z symbols decode mode', async () => {
    const str = '!!!';
    const shift =  'R0'
    const result = await rot8(shift,str);
    expect(result).toBe('!!!'); 
});