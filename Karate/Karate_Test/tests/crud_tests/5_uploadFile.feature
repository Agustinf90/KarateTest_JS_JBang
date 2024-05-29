Feature: Leer y imprimir un archivo binario

Scenario: 5.1 -Test Scenario File upload API - Binary Encoding Content
* def data = read('../../data/tokens.json')
* def request_token = data.token
  Given url 'https://api.sirv.com/v2/files/upload'
  And param filename = '/notice3.png'
  And header Authorization = request_token
  And request read('../../utils/notice3.png') 
  And header Content-Type = 'image/png'
  When method post
  Then status 200
  * print response

Scenario: 5.2 - Test ScenarioFile upload API - Multipart
* def data = read('../../data/tokens.json')
* def request_key = data.public_key
  Given url 'https://upload.uploadcare.com/base/'
  And multipart file myFile = {read: '../../utils/notice4.png', filename: 'notice4.png'}
  And multipart field UPLOADCARE_PUB_KEY = request_key
  When method post
  Then status 200
  * print response
