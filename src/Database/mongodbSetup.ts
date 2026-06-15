import { execSync } from "child_process";
import chalk from "chalk";
import path from "path";

import fs from "fs-extra";

export const GenerateMongoDbSetup = (projectDir: string, packageManager: string, language: string) => {


    switch (packageManager) {
        case "npm": {
            execSync("npm install mongoose", {
                cwd: projectDir,
                stdio: "inherit"
            })
            break
        }

        case "yarn": {
            execSync("yarn add mongoose", {
                cwd: projectDir,
                stdio: "inherit"
            })
            break
        }

        case "pnpm": {
            execSync("pnpm add mongoose", {
                cwd: projectDir,
                stdio: "inherit"
            })
            break
        }

        default: {
            console.log(chalk.red("Nothing is selected"))
        }
    }


    const dest = language === "Javascript" ? path.join(projectDir, "src", "config", "dbConfig.js") : path.join(projectDir, "src", "config", "dbConfig.ts");
    const source = language === "Javascript" ? path.join(__dirname, '..', '..', 'template', 'MongoDbSetup', 'Javascript', 'dbConfig.js') : path.join(__dirname, '..', '..', 'template', 'MongoDbSetup', 'Typescript', 'dbConfig.ts');

    fs.copySync(source, dest, {
        overwrite: true
    })

    const modelDest = path.join(projectDir, "src", "models");
    const modelSource = path.join(__dirname, '..', '..', 'template', 'MongoDbSetup', "models")

    fs.copySync(modelSource, modelDest, {
        overwrite: true
    })

    const appDest = language === "Javascript" ? path.join(projectDir, "src", "app", "app.js") : path.join(projectDir, "src", "app", "app.ts");
    const appSource = language === "Javascript" ? path.join(__dirname, '..', '..', 'template', 'MongoDbSetup', "Javascript", "app.js") : path.join(__dirname, '..', '..', 'template', 'MongoDbSetup', "Typescript", "app.ts")

    fs.copySync(appSource, appDest, { overwrite: true })
}