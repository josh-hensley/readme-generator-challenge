// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Title',
        default: ''
    },
    {
        type: 'input',
        name: 'Description',
        message:'Description',
        default: ''
    },
    {
        type: 'Input',
        name: 'tableOfContents',
        message:'Table of Contents',
        default: `[Installation](#Installation)
        [Usage](#Usage)
        [License](#License)
        [Contributing](#Contributing)
        [Tests](#Tests)
        [Questions](#Questions)
        `
    },
    {
        type: 'input',
        name: 'Installation',
        message:'Installation',
        default: ''
    },
    {
        type: 'input',
        name: 'Usage',
        message:'Usage',
        default: ''
    },
    {
        type: 'list',
        name: 'License',
        message:'License',
        choices:['', 'MIT', 'GPL' ,'LGPL' ,'Apache', 'MPL', 'BSD', 'Creative Commons'],
        default: ''
    },
    {
        type: 'input',
        name: 'Contributing',
        message:'Contributing',
        default: ''
    },
    {
        type: 'input',
        name: 'Tests',
        message:'Tests',
        default: ''
    },
    {
        type: 'input',
        name: 'Questions',
        message:'Questions',
        default: ''
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {
    console.log("README generator.");
    let data = inquirer.prompt(questions);
    data.then(value => console.log(value));
}

// Function call to initialize app
init();
