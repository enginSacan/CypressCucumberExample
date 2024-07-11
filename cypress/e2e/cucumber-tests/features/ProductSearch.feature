Feature: Customer will get the list of product

  Background:
    Given Amazon Application page should open

  Scenario Outline: Customer wants to see the products that want to search
    When Customer wants to search <product>
    Then Customer should see the results for <product>
  Examples:
    | product       |
    | iphone        |
    | samsung       |