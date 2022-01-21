// TODO: Include packages needed for this application
const fs = require('fs');
const { prompt } = require('inquirer');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    'Project Name:',
    'Project Description:',
    'Installation:',
    'Usage:',
    'License:',
    'Contributor:',
    'Test:',
    'Email:'
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt([
        {
            type: 'input',
            message: `${questions[0]}`,
            name: 'name'
        },
        {
            type: 'input',
            message: `${questions[1]}`,
            name: 'description'
        },
        {
            type: 'input',
            message: `${questions[2]}`,
            name: 'installation'
        },
        {
            type: 'input',
            message: `${questions[3]}`,
            name: 'usage'
        },
        {
            type: 'list',
            message: `${questions[4]}`,
            name: 'license',
            choices: ['mit', 'isc', 'ODbl']
        },
        {
            type: 'input',
            message: `${questions[5]}`,
            name: 'contribution'
        },
        {
            type: 'input',
            message: `${questions[6]}`,
            name: 'test'
        },
        {
            type: 'input',
            message: `${questions[7]}`,
            name: 'question'
        },
    ])
        .then((Response) => {
            console.log(Response);
            const newFile = generateMarkdown(Response)
            writeToFile('README.md',newFile)
    
        }
        )
}

// Function call to initialize app
init();
