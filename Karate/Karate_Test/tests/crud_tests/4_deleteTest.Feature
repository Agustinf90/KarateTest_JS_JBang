Feature: Brands Test
Scenario: 4 - Test Scenario Get Test 
    Given url 'https://automationexercise.com/api/deleteAccount'
    And form field email = "agu@mail.com"
    And form field password = "1234"
    When method DELETE
    Then status 200
    * print response
    * print 'Response Time:', responseTime, 'ms'
    And assert responseTime <4000
    * def message = response.message
    * print 'Message:', message
    * eval if (message == 'Account deleted!') karate.log('El usuario fue eliminado')