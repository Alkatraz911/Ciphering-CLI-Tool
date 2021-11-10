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

// let input = new inputStream(`${path.dirname(process.argv[1])}\\input.txt`, { highWaterMark: 64 });
// input.on('data', (chunk)=>{
//     console.log(chunk.toString());
// })

export { inputStream };