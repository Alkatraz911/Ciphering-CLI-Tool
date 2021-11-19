import { atbash } from './AtbashTransform.js';

test('test atbash expected Z', async () => {
    const str = 'A';
    const result = await atbash(str);
    expect(result).toBe('Z'); 
});

test('test atbash', async () => {
    const str = 'a';
    const result = await atbash(str);
    expect(result).toBe('z'); 
});


test('test atbash skipping non a-z,A-Z symbols encode mode', async () => {
    const str = '!!!';
    const result = await atbash(str);
    expect(result).toBe('!!!'); 
});

test('test atbash skipping non a-z,A-Z symbols decode mode', async () => {
    const str = '!!!';
    const result = await atbash(str);
    expect(result).toBe('!!!'); 
});