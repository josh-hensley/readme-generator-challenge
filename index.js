// Packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

//  An array of questions for user input
const dest = process.argv[2];
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
        type: 'input',
        name: 'installation',
        message:'Installation',
        default: 'Explain how to install.'
    },
    {
        type: 'input',
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
        type: 'input',
        name: 'contributing',
        message:'Contributing (use default, unless you want to write your own guidelines)',
        default: 'If you wish to contribute, please follow these [guidelines](https://www.contributor-covenant.org/version/2/1/code_of_conduct/).'
    },
    {
        type: 'input',
        name: 'tests',
        message:'Tests',
        default: 'Tests go in here.'
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
    },
    {
        type: 'input',
        name: 'path',
        message:'What folder to save in?',
        default: dest ? dest : 'generated/'
    }
];

// Creates and writes README file.
function writeToFile(fileName, data, path) {
    fs.writeFile(`${path}${fileName}`, data, err => err ? console.error(err) : console.log('Success!'));
}

// Function that runs at start.
async function init() {
    console.log(`
=====================================================================
                          README generator
=====================================================================
Answer prompts.  README will be generated and placed in "./generated" 
upon completion.
=====================================================================`);
    const data = await inquirer.prompt(questions);
    writeToFile("README.md", generateMarkdown(data), data.path);
}

init();
