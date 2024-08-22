// Packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

//  An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title',
        default: 'This is a Title'
    },
    {
        type: 'editor',
        name: 'description',
        message:'Description',
        default: 'Describe your application'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message:'Table of Contents (use default, if no changes are to be made.)',
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
        type: 'editor',
        name: 'installation',
        message:'Installation',
        default: 'Explain how to install.'
    },
    {
        type: 'editor',
        name: 'usage',
        message:'Usage',
        default: 'Explain how to use.'
    },
    {
        type: 'list',
        name: 'license',
        message:'License (if none, select the blank option)',
        choices:['', 'MIT', 'GPL' ,'LGPL' ,'Apache', 'MPL', 'BSD', 'Creative Commons'],
        default: 'MIT'
    },
    {
        type: 'editor',
        name: 'contributing',
        message:'Contributing (use default, unless you want to write your own guidelines)',
        default: 'If you wish to contribute, please follow these [guidelines](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).'
    },
    {
        type: 'editor',
        name: 'tests',
        message:'Tests',
        default: 'Tests go in here.'
    },
    {
        type: 'input',
        name: 'email',
        message:'Email',
        default: 'your email'
    },
    {
        type: 'input',
        name: 'username',
        message:'Github Username',
        default: 'your github username'
    }
];

// Creates and writes README file.
function writeToFile(fileName, data) {
    fs.writeFile(`./generated/${fileName}`, data, err => console.error(err));
}

// Function that runs at start.
function init() {
    console.log(`
=====================================================================
                          README generator
=====================================================================
Answer prompts.  Some prompts use your default text editor.  Write 
submission into temp file, save, then exit to submit.  README will be
generated and placed in "./generated" upon completion.
=====================================================================`);
    const data = inquirer.prompt(questions);
    data.then(d => {
        const md = generateMarkdown(d);
        writeToFile("README.md", md);
    });
}

init();
