
Feature: Leer y imprimir un archivo binario

Scenario: File upload API - Binary Encoding Content
Given url 'https://api.sirv.com/v2/files/upload'
And param filename = '/notice3.png'
And header Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6Ik1DR2hBb0NSYnZZR1JxYXZkNHFaTVJLdVJBQyIsImNsaWVudE5hbWUiOiJ0ZXN0Iiwic2NvcGUiOlsiYWNjb3VudDpyZWFkIiwiYWNjb3VudDp3cml0ZSIsInVzZXI6cmVhZCIsInVzZXI6d3JpdGUiLCJiaWxsaW5nOnJlYWQiLCJiaWxsaW5nOndyaXRlIiwiZmlsZXM6cmVhZCIsImZpbGVzOndyaXRlIiwiZmlsZXM6Y3JlYXRlIiwiZmlsZXM6dXBsb2FkOm11bHRpcGFydCIsImZpbGVzOnNoYXJlZEJpbGxpbmciLCJ2aWRlb3MiLCJpbWFnZXMiXSwiaWF0IjoxNzE2MTU4NTg5LCJleHAiOjE3MTYxNTk3ODksImF1ZCI6InJuNWFhMjZoeHBtaW1henFzMmdscG1qZ3lkcng4enFnIn0.e7-9pLYjK5zq8eK_xiO76UW1vatcuS70HUvrHwsW8rQ'
And request read('./utils/notice3.png') 
And header Content-Type = 'image/png'
 When method post
 Then status 200
 * print response


Scenario: File upload API - Multipart
    Given url 'https://upload.uploadcare.com/base/'
    And multipart file myFile = {read: './utils/notice4.png', filename: 'notice4.png'}
    And multipart field UPLOADCARE_PUB_KEY = '6a56702149520ae291c3'
    When method post
    Then status 200
    * print response
