import { Transform } from 'stream'
import { ceaser } from './ceaser.js'

class CeasarTransform extends Transform {
    constructor(mode,opt) {
        super(mode,opt);
        this.mode = mode;
        
    }

    _transform(chunk,encoding,callback) {
        callback(null, ceaser(this.mode,chunk.toString()))
    }
}

export { CeasarTransform }