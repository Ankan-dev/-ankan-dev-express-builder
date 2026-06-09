#!/usr/bin/env node

import inquirer from "@inquirer/prompts";
import chalk from "chalk"
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";


import { GenerateMongoDbSetup } from "./Database/mongodbSetup";
import { GenerateDrizzleSetup } from "./Database/DrizzleSetup";
import { EjsSetup } from "./Template_Engine/EjsSetup";

const main = async ()=>{
    const projectName = process.argv[2] || "my-app";

    const language = await inquirer.select({
        message: chalk.cyan("Select your language: "),
        choices:[
            {
                name:chalk.yellow("Javascript"),
                value:"Javascript"
            },
            {
                name:chalk.blue("Typescript"),
                value:"Typescript"
            }
        ]
    })

    const packageManager = await inquirer.select({
        message:chalk.cyan("Select Your Package manager"),
        choices:[
            {
                name:chalk.red("NPM"),
                value:"npm"
            },
            {
                name:chalk.blue("YARN"),
                value:"yarn"
            },
            {
                name:chalk.yellow("PNPM"),
                value:"pnpm"
            }
        ]
    })

    const templateDir = path.join(__dirname,'../template',language)
    const projectDir = projectName==="."?process.cwd(): path.join(process.cwd(),projectName)

    fs.copySync(templateDir,projectDir)

    switch(packageManager){
        case "npm":{
            execSync("npm install",{
                cwd:projectDir,
                stdio:"inherit"
            })
            break
        }

        case "yarn":{
            execSync("yarn install",{
                cwd:projectDir,
                stdio:"inherit"
            })
            break
        }

        case "pnpm":{
            execSync("pnpm install",{
                cwd:projectDir,
                stdio:"inherit"
            })
            break
        }

        default:{
            console.log(chalk.red("Nothing is selected"))
        }
    }

    const needDb = await inquirer.select({
        message:chalk.cyan("Do you want to setup a database in your project?"),
        choices:[
            {
                name:chalk.green("Yes"),
                value:true
            },
            {
                name:chalk.red("No"),
                value:false
            }
        ]
    })

    if(needDb){
        const dbChoice = await inquirer.select({
            message:chalk.cyan("Select your database: "),
            choices:[
                {
                    name:chalk.green("MongoDB"),
                    value:"MongoDB"
                },
                // {
                //     name:chalk.green("PostgreSQL"),
                //     value:"PostgreSQL"
                // },
                {
                    name:chalk.green("MySQL"),
                    value:"MySQL"
                }
            ]
        })

        if(dbChoice === "MongoDB"){
            GenerateMongoDbSetup(projectDir,packageManager,language)
        } else {
            console.log("DB choice: ", dbChoice)
            GenerateDrizzleSetup(projectDir,packageManager,language,dbChoice)
        }
    }

    const templateChoice = await inquirer.select({
    message:chalk.cyan("Do you want to add EJS template engine in your project?"),
    choices:[
        {
            name:chalk.green("Yes"),
            value:true
        },
        {
            name:chalk.red("No"),
            value:false
        }
    ]
   })

    if(templateChoice){
        EjsSetup(projectDir,packageManager,language)
    }

    console.log(chalk.green(`your express setup with ${language} is ready....`))
    console.log(chalk.yellow(`To get started:\n1. cd ${projectName}\n2. ${packageManager} run dev`))
}

main()