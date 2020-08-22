const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
  {
    message: 'Provide the name of your project.',
    name: 'title',
  },
  {
    message: 'Please provide a Description for your project.',
    name: 'description',
  },
  {
    message: 'What is the installation process?',
    name: 'installation',
  },
  {
    message: 'What is the purpose of this project?',
    name: 'usage',
  },
  {
    message: "Who were the contributors to this project?",
    name: "contribution",
  },
];

// function to initialize program
function init() {
  inquirer
      .prompt(questions)
      .then((response) => {
        console.log("Making README");
        fs.writeFileSync('README.md', markdown(response));
      })
      .catch((err) => {
        console.log(err);
      })
  }

// function call to initialize program

init();
