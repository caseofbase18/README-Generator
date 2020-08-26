// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-blueviolet.svg)
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  To install the proper data dependencies, run the following command: ${data.installation}.
  ## Usage
  ${data.usage}
  ## License
  This project is licensed under the ${data.license} license.
  ## Contributing
  ${data.contribution}
  ## Tests
  Run the following command to run tests: ${data.instructions}.
  ## Questions
  GitHub: [${data.github}](https://github.com/${data.github})  

  You can reach me at my email address, ${data.email}, for any additional questions.
  
  

`;
}

module.exports = generateMarkdown;
