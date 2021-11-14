class TerminalReader  {
    constructor() {

    }

    read() {
        this.args = process.argv.slice(2);
        return this.args
    }

}

export { TerminalReader }
