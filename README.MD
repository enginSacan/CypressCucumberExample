# Cypress with Cucumber Test Automation

## Overview
This project contains automated test scenario for checking product headers contains what we searched for in amazon.nl

## Test Scenarios
### Customer will get the list of product
Background:
    Given Amazon Application page should open

  Scenario Outline: Customer wants to see the products that want to search
    When Customer wants to search <product>
    Then Customer should see the results for <product>
  Examples:
    | product       |
    | iphone        |
    | samsung       |


## Running the Tests
1. Clone the repository.
2. Navigate to the project directory.
3. Run commands below last command will generate the cucumber.json in the folder cucumber-json:
   ```bash
   npm install
   npm test
   npm run generate:report

4. You can run your tests with Docker file also

You can check the results under folder `cypress/cucumber-json`