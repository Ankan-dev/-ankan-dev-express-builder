import { execSync } from "child_process";
import chalk from "chalk";
import path from "path";
import fs from "fs-extra";

export const EjsSetup = (projectDir: string, packageManager: string, language: string,database:string) => {

    const dbChoice = database || "None"
    console.log("Database selected: ", chalk.green(dbChoice))

    switch (packageManager) {
        case "npm": {
            execSync("npm i ejs", {
                cwd: projectDir,
                stdio: "inherit"
            })
            break
        }

        case "yarn": {
            execSync("yarn add ejs", {
                cwd: projectDir,
                stdio: "inherit"
            })
            break
        }

        case "pnpm": {
            execSync("pnpm add ejs", {
                cwd: projectDir,
                stdio: "inherit"
            })
            break
        }

        default: {
            console.log(chalk.red("Nothing is selected"))
        }
    }

    const appFilePath = path.join(projectDir, "src", "app", language === "Typescript" ? "app.ts" : "app.js");
    const ejsAppFilePath = path.join(__dirname, "..", "..", "template", "Ejs", language, dbChoice, language === "Typescript" ? "app.ts" : "app.js");

    fs.copySync(ejsAppFilePath, appFilePath, {
        overwrite: true
     })

     const viewsDir = path.join(projectDir, "src", "views");
     fs.ensureDirSync(viewsDir);

     const indexViewPath = path.join(__dirname, "..", "..", "template", "Ejs", "views", "index.ejs");
     const indexViewDestPath = path.join(viewsDir, "index.ejs");

     fs.copySync(indexViewPath, indexViewDestPath, {
        overwrite: true
     })
}

