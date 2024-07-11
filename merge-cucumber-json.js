const fs = require('fs');
const path = require('path');
const jsonMerger = require('json-merger');

const resultsDir = './cypress/cucumber-json';
const outputFile = './cypress/cucumber-json/cucumber.json';

const mergeCucumberJsonFiles = () => {
  const files = fs.readdirSync(resultsDir).filter(file => file.endsWith('.json'));

  const jsonObjects = files.map(file => {
    const filePath = path.join(resultsDir, file);
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  });

  const mergedJson = jsonMerger.mergeObjects(jsonObjects);

  fs.writeFileSync(outputFile, JSON.stringify(mergedJson, null, 2));
  console.log(`Merged ${files.length} cucumber JSON files into ${outputFile}`);
};

mergeCucumberJsonFiles()