// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
    inquirer.prompt(
        [
        {
            type: 'input',
            message: 'What would you like to name the file?',
            name: 'file',    
        },
        
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },

        {
            type: 'input',
            message: 'What is the link to the Deployed Application?',
            name: 'deployed',
        },
      
        {
            type: 'input',
            message: 'Please enter a description for your project?',
            name: 'description',
        },

        {
            type: 'input',
            message: 'Please describe the installation of your project?',
            name: 'installation',
        },
        
        {
            type: 'input',
            message: 'Please describe the usage of your project?',
            name: 'usage',
        },

        {
            type: 'checkbox',
            message: 'Please select any licensing required for your project?',
            name: 'licensing',
            choices: ['The MIT License', 'Boost Software License', 'Open Database License (ODbL)'],
        },

        {
            type: 'input',
            message: 'Please give credit to any contributors to your project?',
            name: 'contributors',
        },

        {
            type: 'input',
            message: 'Please describe any tests for your project?',
            name: 'testing',
        },

        {
            type: 'input',
            message: 'Please enter your email address',
            name: 'email',
        },

        {
            type: 'input',
            message: 'Please enter the URL for your GitHub Repository',
            name: 'githubRepo',
        },

        {
            type: 'input',
            message: 'Please enter your GitHub Username.',
            name: 'githubProfile',
        },
    ]
    ).then(({
        file,
        title,
        deployed,
        description,
        installation,
        usage, 
        licensing,
        contributors,
        testing,
        email,
        githubRepo,
        githubProfile,
    })=>{   
    const readmeTemp = 

    `
${licensing}

# Title: 
${title}

# Link to Deployed Application: 
[Click here to visit the Deployed Application](${deployed})

## Table Of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
    
## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Contributors
${contributors}

## Testing
${testing}

# Questions
All questions should be directed to @${email}

GitHub Profile: [Click here to visit GitHub Profile](https://github.com/${githubProfile})

GitHub Repository: [Click here to visit Github Repo](${githubRepo})

    `;
    createReadme(file,readmeTemp);
    }
    );


// TODO: Create a function to write README file
function createReadme(fileName,data){
    fs.writeFile(`./${fileName}`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('Your readme has been successfully created')
    })
}
