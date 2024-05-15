Feature: Brands Test

Scenario: Verificar que el servicio esté disponible
    Given url 'https://automationexercise.com/api/brandsList'
    When method GET
    Then status 200
    * print response
    * eval karate.write(response, 'response.json')

Scenario: Test Scenario 2
    * def param = read('data.js')
    * def val = param()
    Given url 'https://automationexercise.com/api/searchProduct'
    And form field search_product = val
    When method POST
    Then status 200
    * print response
    * eval karate.write(response, 'responseProduct.json')
    * eval karate.write(response, 'responseProduct.csv')

Scenario: Test Scenario 3
    * def data = read('datos.json')
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
    * match response.message == 'User exists!'
    # * eval karate.write(response, 'responseProduct.json')
    # * eval karate.write(response, 'responseProduct.csv')