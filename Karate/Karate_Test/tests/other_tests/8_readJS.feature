Feature: Leer datos JS

Scenario: 8.1 - Test Scenario - Pruebas JS
    # * def users = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }]
    # * eval users.forEach(user => karate.log('Hello, ' + user.name + '!'))
    * def randomUsername = 'user' + Math.floor(Math.random() * 1000)
    * def randomEmail = 'user' + Math.floor(Math.random() * 1000) + '@example.com'
    * print randomEmail
    * print randomUsername

Scenario: 8.2 - Test Scenario - Pruebas JS 2
    * def users = karate.read('../../data/salute.js')
    * eval users.forEach(user => karate.log('Hello, ' + user.name + '!'))

Scenario: 8.3 - Test Scenario - Pruebas JS 3
    * def respuesta = read('../../data/saludos.js')
    * def val = respuesta()
    * print val


    