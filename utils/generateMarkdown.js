function renderLicenseBadge(license) {
  if (license === 'mit'){
    return ("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)")
  }else if ( license === 'isc'){
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'ODbl'){
    return '![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)'
  } else {
    return ''
  }
}

function renderLicenseLink(license) {
  if (license === 'mit'){
    return ""
  }else if ( license === 'isc'){
    return ''
  } else if (license === 'ODbl'){
    return '(https://opendatacommons.org/licenses/odbl/)'
  } else {
    return ''
  }
}

function renderLicenseSection(license) {
  if (license === 'mit'){
    return 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.'
  }else if ( license === 'isc'){
    return 'THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.'
  
  } else if (license === 'ODbl'){
    return ''
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);
  const section = renderLicenseSection(data.license);
  let sectionEl = '';
  if (link === ''){
    sectionEl = section
  }else {
    sectionEl = link;
  };
  console.log(sectionEl);
  return `# ${data.name}💎
${badge}
## 📝 Table of Content
*[Introduction](#introduction)  
*[Installation](#installation)  
*[Usage](#usage)  
*[Contribution](#contribution)  
*[Test](#test)  
*[Question](#question)  
*[License](#license)  
## Introduction: 
${data.description}
## 🛠️ Installation required:
${data.installation}
## How to use this application:
${data.usage}
## Contribution:
${data.contribution}
## Test
${data.test}
## Question
If there is any questions, free feel to reach out to me through github or email.  
📧 Email: <${data.question}>  
📂 Github: <${data.github}>  
## License
${sectionEl}  

`;
}
// above is the template of the README file
module.exports = generateMarkdown;
