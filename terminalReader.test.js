import { TerminalReader } from "./terminalReader.js";

test('test termina reader', () => {
    const err = new Error();
    expect(() => errorHandler(err)).toThrow(err); 
});