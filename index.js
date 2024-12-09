const {convert} = require('bpmn-to-image');
const fs = require('fs');

const input = 'resources/example.bpmn';

const outputFolder = 'output';
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

const output = `${outputFolder}/example.png`;

function convertBpmnToImage() {
  convert(input, output)
    .then(() => console.log('Conversion successful'))
    .catch(err => console.error(err));
}

convertBpmnToImage();