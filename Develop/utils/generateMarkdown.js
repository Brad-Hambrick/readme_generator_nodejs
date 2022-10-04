// Created a class in order to render the license badges, license links, and the readme template
class readmeTemp {

// Grabbing the license badges
  static renderLicenseBadge(license) {
    const badges = {
      MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      Boost: '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
      ODbL:'![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)'
    }
    return badges[license]
  }

// Grabbing the license links
  static renderLicenseLink(license) {
    const links = {
      MIT: 'https://opensource.org/licenses/MIT',
      Boost: 'https://www.boost.org/LICENSE_1_0.txt',
      ODbL:'https://opendatacommons.org/licenses/odbl/'
    }
    return links[license]
  }

// Create the Readme Template and input the answers from inquirer prompts
  static generateTemp(answers) {
  return `
  ${this.renderLicenseBadge(answers.licensing)}

  [Click here to vist the licensing link](${this.renderLicenseLink(answers.licensing)})
  
  # ${answers.title}
  
  # [Click here to visit the Deployed Application](${answers.deployed})
  
  ## Table Of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
      
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## Contributors
  ${answers.contributors}
  
  ## Testing
  ${answers.testing}
  
  # Questions
  All questions should be directed to @${answers.email}
  
  GitHub Profile: [Click here to visit GitHub Profile](https://github.com/${answers.githubProfile})
  
  GitHub Repository: [Click here to visit Github Repo](${answers.githubRepo})
  
      `;
  }
}

//  Export class back to index.js file
module.exports = readmeTemp;
