Feature: Brands Test

Scenario: 0 - Test Scenario Get Test - Write json / csv with response
    Given url 'https://automationexercise.com/api/brandsList'
    When method GET
    Then status 200
    * print response
    * print 'Response Time:', responseTime, 'ms'
    * eval karate.write(response, 'responseProduct.json')
    * eval karate.write(response, 'responseProduct.csv')