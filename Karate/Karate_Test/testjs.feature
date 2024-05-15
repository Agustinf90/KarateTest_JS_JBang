Feature: Leer datos JS

Scenario: Leer datos desde un archivo JS externo
  * def datos = read('data.js')
  * def val = datos()
    * print val

Scenario: Leer funcion JS
    * def datos = function() { return "top3"; }
    * def val = datos()
      * print val