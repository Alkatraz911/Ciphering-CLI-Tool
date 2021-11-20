import { InvalidConfigError } from './errors.js';

const configChecker = (args) => {
    const allowedArgs = ['C1','C0','R1','R0','A']
    let config;
    let configNum = 0
    for(const el of args) {
        if(el === '-c'|| el === '--config') {
            configNum += 1;
        }
    }
    if (args.includes('-c') && args.includes('--config') || configNum > 1) {
        throw new InvalidConfigError('You provided -c argument more than once!')
    } else if (args.includes('-c')) {
        config = args[args.indexOf('-c')+1];
    } else if (args.includes('--config'))
        config =  args[args.indexOf('--config')+1];
    if(config){
        config = config.split('-')
        let result = []
        for (const el of config) {
            if (el.length <= 2 && allowedArgs.includes(el)) {
                result.push(el)
            } else {
                throw new InvalidConfigError('Invalid config!');
            }
        }
        return result;
    } else {
        throw new InvalidConfigError('No config!')
    }

}

export { configChecker }