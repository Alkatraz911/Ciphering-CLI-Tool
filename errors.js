

class InvalidConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidConfigError';
        this.isCustom = true;
    }
}



export { InvalidConfigError };