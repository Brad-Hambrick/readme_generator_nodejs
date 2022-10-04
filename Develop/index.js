//  Link required packages: inquirer, file system, generateMarkdown.js
const inquirer = require('inquirer');
const fs = require('fs');
const readmeTemp = require('./utils/generateMarkdown');

//  Created an array of questions to call with inquirer

      const questions =  [
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
            choices: ['MIT', 'Boost', 'ODbL'],
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
        }
    ]

// function in order to call inquirer prompts and then create the readme file
    function askQuestions() {
        return inquirer.prompt(questions)
        .then((answers) => {
            const markdown = readmeTemp.generateTemp(answers)
            fs.writeFile('README.md', markdown, (err)=>{
                if(err){
                    console.log(err)
                }
                console.log('Your readme has been successfully created')
            })
            return answers
        })
       
  
    }

    askQuestions();
