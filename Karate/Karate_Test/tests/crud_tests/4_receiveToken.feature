
Feature: Busqueda de archivo binario

Scenario: 5 - Test Scenario Search File
* def data = read('../../data/sirv.json')
* def request_token = data
  Given url 'https://api.sirv.com/v2/token'
  And request request_token
  When method post
  Then status 200
  * def formattedToken = '{"token":"' + response.token + '"}'
  * eval karate.write(formattedToken, 'token.json')