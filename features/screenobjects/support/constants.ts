export class Constants {
  static BTN_CREAR_UNA_CUENTA: string = "~Crear una cuenta";
  static BTN_YA_TENGO_UNA_CUENTA: string = '//android.widget.Button[@content-desc="Ya tengo una cuenta"]';
  static TXT_CORREO_USUARIO: string = "//android.widget.EditText";
  static BTN_CONTINUAR: string = "~Continuar";
  static TXT_INGRESAR_OTP_PHONE: string = 'new UiSelector().className("android.widget.EditText")';
  static LNK_REENVIAR_CODIGO_PHONE: string = 'new UiSelector().text("REENVIAR CÓDIGO")';
  static LNK_PROQUE_NO_LLEGA_CODIGO_PHONE: string = 'new UiSelector().className("android.view.View").instance(7)';
  static BTN_VALIDAR_CODIGO_PHONE: string = "~Validar código";
  static TXT_INGRESAR_OTP_DISPOSITIVO: string = 'new UiSelector().className("android.widget.EditText")';
  static LNK_REENVIAR_CODIGO_DISPOSITIVO: string = 'new UiSelector().className("android.widget.Button").instance(0)';
  static BTN_VALIDAR_CODIGO_DISPOSITIVO: string = "~Validar código";
  static BTN_DINERO_MAS_SEGURO: string = `//android.widget.TextView[contains(@text,"Dinero más")]`;
  static BTN_CONTINUAR_COTIZACION_SPT: string = `~Continuar`;
  static CHK_TERMINOS_Y_CONDICIONES_COMPRA_SPT: string = `//android.widget.CheckBox`;
  static BTN_COMPRA_SPT: string = `~Comprar seguro`;
  static BTN_IR_INICIO_WINSTATE_SPT: string = `~Ir a inicio`;
  static BTN_VER_MAS_MENU_PRINCIPAL: string = 'new UiSelector().text("Ver más")';
  static BTN_SEGUROS_MENU_PRINCIPAL: string = 'new UiSelector().text("Seguros")';
  static BTN_SOAT_MENU_PRINCIPAL: string = 'new UiSelector().text("Seguros")';
  static BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE: string = `//*[@resource-id="buttonClose"]`;
  static BTN_CONOCER_MAS_BIENVENIDA_YAPE: string = 'new UiSelector().description("Conocer más")';
  
}