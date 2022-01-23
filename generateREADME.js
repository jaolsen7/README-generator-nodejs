const generateREADME = ({title, description, installation, usage, credits, license, tests, github, email}, badgeChoice) =>
`# ${title} ${badgeChoice}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## License

${license}

## Tests

${tests}

## Questions

If you have additional questions, please contact me using the links below:

GitHub: [https://github.com/${github}](https://github.com/${github})

Email: [${email}](${email})`

module.exports = generateREADME;