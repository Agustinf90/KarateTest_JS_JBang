Feature: Brands Test
Scenario: Test Scenario Read Json
    Given url 'https://automationexercise.com/api/updateAccount'
    And form field email = "agu@mail.com"
    And form field password = "1234"
    And form field lastname = "fer22"
    And form field firstname = "albert22"
    And form field country = "fiji"
    And form field state = "ny"
    And form field city = "new york"
    When method PUT
    Then status 200
    * print response
    * print 'Response Time:', responseTime, 'ms'
    And assert responseTime < 7000
    * def message = response.message
    * print 'Message:', message
    * eval if (message == 'User updated!') karate.log('El usuario fue actualizado')