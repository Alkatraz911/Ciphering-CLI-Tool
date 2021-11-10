import { Writable } from 'stream';
import fs from 'fs';

class outputStream extends Writable {
  
    constructor(path) {
        super();
        this.path = path;
      }

      _construct(callback) {
        fs.open(this.path, 'a',(err, fd) => {
          if (err) {
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
}

export { outputStream }