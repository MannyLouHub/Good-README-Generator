// function to generate markdown for README
function generateMarkdown(response) {
  return `
# ${response.title}

# Table of Content
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)


## Description:
    ${response.description}

## Installation:
    ${response.installation}

## Usage:
    ${response.usage}
    
## Contribution:
    ${response.contribution}


`;
}

module.exports = generateMarkdown;
