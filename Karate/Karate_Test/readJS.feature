Feature: Leer datos JS

Scenario: Pruebas JS
    # * def users = [{ name: 'John' }, { name: 'Jane' }, { name: 'Bob' }]
    # * eval users.forEach(user => karate.log('Hello, ' + user.name + '!'))
    * def randomUsername = 'user' + Math.floor(Math.random() * 1000)
    * def randomEmail = 'user' + Math.floor(Math.random() * 1000) + '@example.com'
    * print randomEmail
    * print randomUsername

Scenario: Pruebas JS 2
    * def users = karate.read('./data/salute.js')
    * eval users.forEach(user => karate.log('Hello, ' + user.name + '!'))

Scenario: Saludar al usuario
    * def respuesta = read('/data/saludos.js')
    * def val = respuesta()
    * print val


    