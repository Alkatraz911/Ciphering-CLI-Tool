import { Writable } from 'stream';
import fs from 'fs';

class outputStream extends Writable {
  
    constructor(path) {
        super();
        this.path = path;
      }

      _construct(callback) {
        fs.open(this.path, fs.constants.O_APPEND,(err, fd) => {
          if (err) {
            if (err.errno === -4048) {
              process.stderr.write('No write permission!!!');
              process.exit(1);
            }
            callback(err);
          } else {
            this.fd = fd;
            callback();
          }
        });
      }

      _write(chunk, encoding, callback) {
        fs.write(this.fd, chunk,  callback);
      }

      _destroy(err, callback) {
        if (this.fd) {
          fs.close(this.fd, (er) => {
            if (err) {
              if (err.errno === -4068) {
                process.stderr.write('output should be a .txt file!');
                process.exit(1);
              }
            }
            callback(er || err)});
        } else {
          callback(err);
        }
      }
}

export { outputStream }