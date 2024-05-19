Feature: Brands Test

Scenario: Verificar que el servicio esté disponible
    Given url 'https://automationexercise.com/api/brandsList'
    When method GET
    Then status 200
    * print response
    * print 'Response Time:', responseTime, 'ms'
    # * eval karate.write(response, 'response.json')