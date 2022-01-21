// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.badge === null){
    return ""
  }
  return license.badge
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.link === null){
    return ""
  }
  return license.link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.section === null){
    return ""
  }
  return license.section
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}💎
## ${data.description}💎







`;
}

module.exports = generateMarkdown;
