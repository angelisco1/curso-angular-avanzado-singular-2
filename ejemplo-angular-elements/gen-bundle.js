const concat = require('concat');
const path = require('path')

const mainFilePath = path.join(__dirname, 'dist', 'ejemplo-angular-elements', 'main.js')
const polyfillsFilePath = path.join(__dirname, 'dist', 'ejemplo-angular-elements', 'polyfills.js')

const outputFile = path.join(__dirname, 'dist', 'ejemplo-angular-elements', 'bundle.js')

concat([mainFilePath, polyfillsFilePath], outputFile)