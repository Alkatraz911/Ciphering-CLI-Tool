
import { configParser } from './configParser.js'

test('test configParser expected result length to be 5', async () => {
    const config = ['C1','C0', 'R1', 'R0', 'A'];
    const result = await configParser(config);
    expect(result.length).toBe(5); 
});
