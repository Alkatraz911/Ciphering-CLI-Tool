import { errorHandler } from "./errorHandler.js";
import { InvalidConfigError } from './errors.js';


test('test  errorHandler default error test', () => {
    const err = new Error();
    expect(() => errorHandler(err)).toThrow(err); 
});


