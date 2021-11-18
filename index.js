import { pipeline } from 'stream';
import { TerminalReader } from './terminalReader.js';
import { argumentChecker } from './argumentChecker.js';
import { configChecker } from './configChecker.js';
import { configParser } from './configParser.js';
import { errorHandler } from './errorHandler.js';
import { inputStreamFinder } from './inputStreamFinder.js';
import { outputStreamFinder } from './outputStreamFinder.js'


try {
    let args = new TerminalReader().read();
    argumentChecker(args);
    let input_stream = inputStreamFinder(args);
    let output_stream = outputStreamFinder(args);
    pipeline(
        input_stream,
        ...configParser(configChecker(args)),
        output_stream,
        (err) => {
            if (err){
                process.stderr.write(err);
            }
            process.stdout.write("Finished successfully")
        }
    ); 
} catch (e) {
    errorHandler(e);
}










