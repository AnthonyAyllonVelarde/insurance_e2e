import { Constants } from "../../../../support/constants.js";
import redis from "../../../../support/redis.helper.js";
import BaseScreen from "../../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class ValidationDeviceScreen extends BaseScreen {
    public get txtCodeValidation() {
        const selector = Constants.TXT_INGRESAR_OTP_DISPOSITIVO;

        return $(`android=${selector}`)
    }

    public get lnkResendCode() {
        const selector = Constants.LNK_REENVIAR_CODIGO_DISPOSITIVO
        return $(`android=${selector}`)
    }

    public get btnCodeValidate() {
        return $(Constants.BTN_VALIDAR_CODIGO_DISPOSITIVO);
    }

    async validateOtpDevice(userName: string): Promise<void> {
        let existeElemento = await this.waitForElement(Constants.BTN_VALIDAR_CODIGO_DISPOSITIVO, 10000);

        if (existeElemento) {
            let otp = await redis.readDataRedis(userName.toUpperCase(), 1);
            await this.txtCodeValidation.setValue(otp);
            await this.btnCodeValidate.click();
        }
    }

}

export default new ValidationDeviceScreen();