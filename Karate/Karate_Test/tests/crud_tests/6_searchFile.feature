

Feature: Busqueda de archivo binario

Scenario: 5 - Test Scenario Search File
  * def data = read('../../../target/token.json')
  * def request_token = data.token
  Given url 'https://api.sirv.com/v2/files/search'
  And header Authorization = request_token
  And request {"query":"extension:.png AND mtime:[now-30d TO now] AND -dirname:\\/.Trash","sort":{"filename.raw":"asc"},"from":0,"size":5}
  When method post
  Then status 200
  * print response
