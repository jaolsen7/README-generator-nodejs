const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = require("./generateREADME.js");

const init = () => {
    inquirer
            .prompt([
                {
                  type: 'input',
                  name: 'title',
                  message: 'What is your project title?',
                },
                {
                  type: 'input',
                  name: 'description',
                  message: 'Provide a short description explaining the what, why, and how of your project.',
                },
                {
                  type: 'input',
                  name: 'installation',
                  message: 'What are the steps required to install your project?',
                },
                {
                  type: 'input',
                  name: 'usage',
                  message: 'Provide instructions and examples for use.',
                },
                {
                  type: 'input',
                  name: 'credits',
                  message: 'List your collaborators, if any, with links to their GitHub profiles.',
                },
                {
                  type: 'list',
                  name: 'license',
                  message: 'Choose a license.',
                  choices: ['MIT', 'GNU GPLv3', 'ISC', 'Apache'],
                },
                {
                    type: 'input',
                    name: 'tests',
                    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.',
                  },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your GitHub username?',
                  },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email?',
                  },
              ])
            .then((responses) => {
                let badgeChoice = "";
                switch (responses.license) {
                    case "MIT":
                        badgeChoice = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                    break;
                    case "GNU GPLv3":
                        badgeChoice = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                    break;
                    case "ISC":
                        badgeChoice = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
                    break;
                    case "Apache":
                        badgeChoice = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                    break;
                }

                const readmeContent = generateREADME(responses, badgeChoice);

                fs.writeFile('README.md', readmeContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created README.md!')
                );
            });
};
init();