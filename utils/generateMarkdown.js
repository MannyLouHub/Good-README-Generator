// function to generate markdown for README
function generateMarkdown(response) {
  return `
# **[${response.title}](https://github.com/${response.username}/${response.title})**



# Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Tests](#tests)
- [Email Address](#email)
- [Username](#username)



## Description:
    ${response.description}

## Installation:
    ${response.installation}

## Usage:
    ${response.usage}
    
## License
    ${response.license}
    
## Contribution:
    ${response.contribution}

## Tests
    ${response.tests}

## Email Address
    ${response.email}

## GitHub Username
    My Github is [${response.username}](https://github.com/${response.username})
`;
}

module.exports = generateMarkdown;
