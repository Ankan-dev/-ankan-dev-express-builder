import { execSync } from "child_process";
import chalk from "chalk";
import path from "path";
import fs from "fs-extra";

export const EjsSetup = (projectDir: string, packageManager: string, language: string) => {

    console.log("Setting up EJS template engine...")

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

    const appFilePath = path.join(projectDir, language === "Typescript" ? "src/app/app.ts" : "src/app/app.js");
    const ejsAppFilePath = path.join(__dirname, "../../template/Ejs", language, language === "Typescript" ? "app.ts" : "app.js");

    fs.copySync(ejsAppFilePath, appFilePath, {
        overwrite: true
     })

     const viewsDir = path.join(projectDir, "src/views");
     fs.ensureDirSync(viewsDir);

     const indexViewPath = path.join(__dirname, "../../template/Ejs", "views", "index.ejs");
     const indexViewDestPath = path.join(viewsDir, "index.ejs");

     fs.copySync(indexViewPath, indexViewDestPath, {
        overwrite: true
     })
}

