import chalk from 'chalk';

 class logger {
    info(message:string){
        console.log(chalk.blue(`[INFO] ${message}`));
    }

    warn(message:string){
        console.log(chalk.yellow(`[WARN] ${message}`));
    }

    error(message:string){
        console.log(chalk.red(`[ERROR] ${message}`));
    }
}

const log = new logger();

export default log;