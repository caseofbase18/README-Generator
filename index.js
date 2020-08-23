var fs = require("fs")
var inquirer = require("inquirer")
var generateMarkdown = require("./utils/generateMarkdown")

inquirer.prompt([
    {name: "title", message: "What is the title of your project?", type: "input"},  
    {name: "description", message: "Describe your project: ", type: "input"}, 
    {name: "installation", message: "What are the installation instructions?", type: "input"} 

]).then(function(response){
    
    // console.log(generateMarkdown(response))
    fs.writeFile("test.md", generateMarkdown(response), function(error, data){
        if (error) throw error 
        console.log("your file is created")
    })
})