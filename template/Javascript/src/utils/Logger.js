import chalk from 'chalk';

 class logger {
    info(message){
        console.log(chalk.blue(`[INFO] ${message}`));
    }

    warn(message){
        console.log(chalk.yellow(`[WARN] ${message}`));
    }

    error(message){
        console.log(chalk.red(`[ERROR] ${message}`));
    }
}

const log = new logger();

export default log;