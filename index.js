// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title',
        default: 'This is a Title'
    },
    {
        type: 'input',
        name: 'description',
        message:'Description',
        default: 'This is a description'
    },
    {
        type: 'Input',
        name: 'tableOfContents',
        message:'Table of Contents',
        default: `
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
 `
    },
    {
        type: 'input',
        name: 'installation',
        message:'Installation',
        default: 'This is how to install'
    },
    {
        type: 'input',
        name: 'usage',
        message:'Usage',
        default: 'This is how to use'
    },
    {
        type: 'list',
        name: 'license',
        message:'License',
        choices:['', 'MIT', 'GPL' ,'LGPL' ,'Apache', 'MPL', 'BSD', 'Creative Commons'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'contributing',
        message:'Contributing',
        default: 'This is how to contribute'
    },
    {
        type: 'input',
        name: 'tests',
        message:'Tests',
        default: 'These are some tests'
    },
    {
        type: 'input',
        name: 'email',
        message:'Email',
        default: 'me@joshhensley.com'
    },
    {
        type: 'input',
        name: 'username',
        message:'Github Username',
        default: 'josh-hensley'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => console.error(err));
}

// TODO: Create a function to initialize app
function init() {
    console.log("README generator.");
    const data = inquirer.prompt(questions);
    data.then(d => {
        const md = generateMarkdown(d);
        writeToFile("README.md", md);
    });
}

// Function call to initialize app
init();
