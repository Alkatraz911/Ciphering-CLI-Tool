import { Readable } from 'stream';
import fs from 'fs';




class inputStream extends Readable {
     constructor (path,opt){
        super(opt);
        this.path = path;
        this.fd = null;
    }

    _construct (callback) {
        fs.open(this.path, (err, fd) => {
            if (err) {
              callback(err);
            } else {
              this.fd = fd;
              callback();
            }
          });
    }

    _read(n) {
        const buf = Buffer.alloc(n);
        fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
          if (err) {
            this.destroy(err);
          } else {
            this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
          }
        });
      }  
}



export { inputStream };