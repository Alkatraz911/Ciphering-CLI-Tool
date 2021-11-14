import { InvalidConfigError } from './errors.js';

const configChecker = (args) => {
    const allowedArgs = ['C1','C0','R1','R0','A']
    let config = args.includes('-c')? args[args.indexOf('-c')+1] : args[args.indexOf('--config')+1];
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