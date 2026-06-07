import { execSync } from "child_process";
import chalk from "chalk";
import path from "path";
import fs from "fs-extra";


export const GenerateDrizzleSetup = (projectDir: string, packageManager: string, language: string, database: string) => {

    console.log("Database choice: ", database)

    if (database == "MySQL") {
        console.log("continue ...")
        switch (packageManager) {
            case "npm": {
                execSync("npm i drizzle-orm@latest mysql2 && npm i -D drizzle-kit@latest", {
                    cwd: projectDir,
                    stdio: "inherit"
                })
                break
            }

            case "yarn": {
                execSync("yarn add drizzle-orm@latest mysql2 && yarn add -D drizzle-kit@latest", {
                    cwd: projectDir,
                    stdio: "inherit"
                })
                break
            }

            case "pnpm": {
                execSync("pnpm add drizzle-orm@latest mysql2 && pnpm add -D drizzle-kit@latest", {
                    cwd: projectDir,
                    stdio: "inherit"
                })
                break
            }

            default: {
                console.log(chalk.red("Nothing is selected"))
            }
        }
    } else {
        switch (packageManager) {
            case "npm": {
                execSync("npm i drizzle-orm@latest pg && npm i -D drizzle-kit@latest", {
                    cwd: projectDir,
                    stdio: "inherit"
                })
                break
            }

            case "yarn": {
                execSync("yarn add drizzle-orm@latest pg && yarn add -D drizzle-kit@latest", {
                    cwd: projectDir,
                    stdio: "inherit"
                })
                break
            }

            case "pnpm": {
                execSync("pnpm add drizzle-orm@latest pg && pnpm add -D drizzle-kit@latest", {
                    cwd: projectDir,
                    stdio: "inherit"
                })
                break
            }

            default: {
                console.log(chalk.red("Nothing is selected"))
            }
        }

        if (language === "Typescript") {
            execSync("npm i -D @types/pg", {
                cwd: projectDir,
                stdio: "inherit"
            })
        }
    }



    const dbConfigDest = language === "Javascript" ? path.join(projectDir, "src", "config", "dbConfig.js") : path.join(projectDir, "src", "config", "dbConfig.ts");
    const dbConfigSource = language === "Javascript" ? path.join(__dirname, '../../template', database, 'Drizzle', language, 'dbConfig.js') : path.join(__dirname, '../../template', database, 'Drizzle', language, 'dbConfig.ts');

    fs.copySync(dbConfigSource, dbConfigDest, {
        overwrite: true
    })

    const drizzleConfigDest = language === "Javascript" ? path.join(projectDir, "drizzle.config.js") : path.join(projectDir, "drizzle.config.ts");
    const drizzleConfigSource = language === "Javascript" ? path.join(__dirname, '../../template', database, 'Drizzle', language, 'drizzle.config.js') : path.join(__dirname, '../../template', database, 'Drizzle', language, 'drizzle.config.ts')

    fs.copySync(drizzleConfigSource, drizzleConfigDest, {
        overwrite: true
    })

    const schemaDest = path.join(projectDir, "src", "Schema");
    const schemaSource = path.join(__dirname, '../../template', database, 'Drizzle', "Schema")

    fs.copySync(schemaSource, schemaDest, {
        overwrite: true
    })


    const packageJsonPath = path.join(projectDir, "package.json");
    const packageJson = fs.readJSONSync(packageJsonPath);

    packageJson.scripts = {
        ...packageJson.scripts,
        "db:generate": "drizzle-kit generate",
        "db:migrate": "drizzle-kit migrate",
        "db:push": "drizzle-kit push",
        "db:studio": "drizzle-kit studio"
    }

    fs.writeJSONSync(packageJsonPath, packageJson, {
        spaces: 2
    })

}

