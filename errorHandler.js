

const errorHandler = (err) => {
    const  { isCustom }   =  err;
    if (isCustom) {
        process.stderr.write(err.message);
        process.exit(1);
    } else {
        throw err;
    }
}

export { errorHandler };