Feature: Send JSON body in a POST request

Scenario: 6 - Test Scenario Send a JSON body to the Facebook Graph API
  * def data = read('../../data/whatsapp.json')
  * def request_url = data.url
  * def request_data = data.token
  Given url data.url
  And header Authorization = request_data
  # And headers { Authorization: 'Bearer ' }
  And request {"messaging_product": "whatsapp", "to": "54111540843674", "type": "template", "template":{"name": "utility", "language":{"code": "es_AR"}}}
  When method post
  Then status 200
  * print response
  # Add more checks below based on your response expectations
  # And match response == { your expected response here }