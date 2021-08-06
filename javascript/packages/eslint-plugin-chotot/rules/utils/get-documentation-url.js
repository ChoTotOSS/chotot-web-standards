'use strict';
const path = require('path');
// const packageJson = require('../../package.json');

const repoUrl = 'https://github.com/chototoss/chotot-web-standards';

module.exports = (filename) => {
  const ruleName = path.basename(filename, '.js');
  return `${repoUrl}//blob/main/javascript/packages/eslint-plugin-chotot/docs/rules/${ruleName}.md`;
};
