Feature: Brands Test
Scenario: Test Scenario Read Json
    Given url 'https://automationexercise.com/api/createAccount?'
    And form field name = "agu"
    And form field email = "agu@mail.com"
    And form field password = "1234"
    And form field lastname = "fer"
    And form field firstname = "albert"
    And form field address1 = "casa 123"
    And form field country = "alemania"
    And form field state = "berlin"
    And form field city = "zeiplig"
    And form field zipcode = 12353
    And form field mobile_number = 1223525353
    When method POST
    Then status 200
    * print response
    * print 'Response Time:', responseTime, 'ms'
    And assert responseTime < 4000
    * def message = response.message
    * print 'Message:', message
    * eval if (message == 'User created!') karate.log('El usuario fue creado')