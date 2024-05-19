Feature: Brands Test
Scenario: Test Scenario Read Json
    * def data = read('.datos.json')
    * def email = data.email
    * def password = data.password
    Given url 'https://automationexercise.com/api/verifyLogin'
    And form field email = email
    And form field password = password
    When method POST
    Then status 200
    * print response
    * print 'Response Time:', responseTime, 'ms'
    And assert responseTime < 1000
    * def message = response.message
    * print 'Message:', message
    * eval if (message == 'User exists!') karate.log('El usuario existe en el sistema')


