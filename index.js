const fs = require('fs');
const { prompt } = require('inquirer');
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// array of questions used in prompt
const questions = [
    'Project Name:',
    'Project Description:',
    'Installation:',
    'Usage:',
    'License:',
    'Contributors:',
    'Test:',
    'Email:',
    'Github:'
]

// function for writing data into readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'));
}
// prompt for user input
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
        {
            type: 'input',
            message: `${questions[8]}`,
            name: 'github'
        },
    ])
        .then((Response) => {
            const newFile = generateMarkdown(Response)
            writeToFile('README.md',newFile)
    
        }
        )
}

// calling function to execute code
init();
