// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GPL"){
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "LGPL"){
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Apache"){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license ==="MPL"){
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "BSD"){
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Creative Commons"){
    return "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "GPL"){
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "LGPL"){
    return "(https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Apache"){
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license ==="MPL"){
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "BSD"){
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "Creative Commons"){
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = `## <a name="license"></a>License

  `;
  if (license === "MIT"){
    section += `[MIT]${renderLicenseLink(license)}`;
  } else if (license === "GPL"){
    section += `[GPL]${renderLicenseLink(license)}`;
  } else if (license === "LGPL"){
    section += `[LGPL]${renderLicenseLink(license)}`;
  } else if (license === "Apache"){
    section += `[Apache]${renderLicenseLink(license)}`;
  } else if (license ==="MPL"){
    section += `[MPL]${renderLicenseLink(license)}`;
  } else if (license === "BSD"){
    section += `[BSD]${renderLicenseLink(license)}`;
  } else if (license === "Creative Commons"){
    section += `[Creative Commons]${renderLicenseLink(license)}`;
  } else {
    section = "";
  }
  return section;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

${data.tableOfContents}

## <a name="Installation"></a>Installation

${data.installation}

## <a name="Usage"></a>Usage

${data.usage}

${renderLicenseSection(data.license)}

## <a name="contributing"></a>Contributing

${data.contributing}

## <a name="tests"></a>Tests

${data.tests}

## <a name="questions"></a>Questions

If you have questions you can reach me at ${data.email}. Add me on [Github](github.com/${data.username}).
`;
}

export default generateMarkdown;
