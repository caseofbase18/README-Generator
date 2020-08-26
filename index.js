const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const choices = ["MIT", "Unlicense", "None"]

inquirer.prompt([
    {name: "title", message: "What is the title of your project?", type: "input"},  
    {name: "description", message: "Describe your project: ", type: "input"}, 
    {name: "installation", message: "Installation requirements (command): ", type: "input"},
    {name: "license", message: "Choose a license: " , choices, type: "list"}, 
    {name: "usage", message: "What is the usage of this project?", type: "input"},
    {name: "contribution", message: "What are the contributing guidelines?", type: "input"},
    {name: "instructions", message: "What command is necessary to run tests?", type: "input"},
    {name: "github", message: "Enter GitHub username:", type: "input"},
    {name: "email", message: "Enter email address:", type: "input"}

]).then(function(response){
    
    // console.log(generateMarkdown(response))
    fs.writeFile("test.md", generateMarkdown(response), function(error, data){
        if (error) throw error 
        console.log("Your file is created!")
    })
})