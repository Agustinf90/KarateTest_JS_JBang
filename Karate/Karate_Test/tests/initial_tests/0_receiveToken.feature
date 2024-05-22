
Feature: Busqueda de archivo binario

Scenario: 0 - Test Scenario Receive token
* def data = read('../../data/sirv.json')
* def request_token = data
  Given url 'https://api.sirv.com/v2/token'
  And request request_token
  When method post
  Then status 200
  # # * def token = response.token
  # * def formattedToken = '{"token":"' + token + '"}'
  # * eval karate.write(formattedToken, 'token.json')