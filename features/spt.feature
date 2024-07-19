Feature: Compra de seguros SPT en Yape

  Background:
    Given el usuario está registrado en Yape y presiona el boton "Ya tengo una cuenta"

  Scenario Outline: [CDP_01][Happy Path][AUTO-FRONT] Validar compra de seguro SPT
    And el usuario ingresa su <username> y <password>
    And el usuario ingresa su código OTP, que le llega al <phone>
    And el usuario ingresa su código OTP de dispositivo, si se le solicita al <username>
    And cierra el popup de bienvenida siempre y cuando se muestre
    Given el usuario en el menú selecciona el boton "Ver mas"
    And el usuario selecciona el boton Seguros
    And el usuario realiza la cotización del seguro SPT
    When el usuario visualiza los datos del seguro SPT cotizado
    And el usuario confirma la compra del seguro SPT
    Then el usuario debería visualizar el winstate con los datos del seguro SPT comprado y vuelve al menú principal

    Examples:
      | username                   | password | phone     | message                        |
      | pedro@mailinator.com |   999999 | 943014123 | You logged into a secure area! |
     