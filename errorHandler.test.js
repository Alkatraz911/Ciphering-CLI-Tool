import { errorHandler } from "./errorHandler.js";
import { InvalidConfigError } from './errors.js';
import {jest} from '@jest/globals';



test('test  errorHandler default error test', () => {
    const err = new Error();
    expect(() => errorHandler(err)).toThrow(err); 
});


test('test  errorHandler custom error test', () => {
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
    const err = new InvalidConfigError();
    errorHandler(err);
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
});

