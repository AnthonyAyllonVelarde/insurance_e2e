import { Constants } from "../../../../support/constants.js";
import redis from "../../../../support/redis.helper.js";
import BaseScreen from "../../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class ValidationCodeScreen extends BaseScreen {
    public get txtOtp() {
        const selector = Constants.TXT_INGRESAR_OTP_PHONE;
        return $(`android=${selector}`)
    }

    public get lnkResendCode() {
        const selector = Constants.LNK_REENVIAR_CODIGO_PHONE;
        return $(`android=${selector}`)
    }
    // Por que no llega el codigo
    public get lnkWhyNotArriveCode() {
        const selector = Constants.LNK_PROQUE_NO_LLEGA_CODIGO_PHONE;
        return $(`android=${selector}`)
    }

    public get btnCodeValidate() {
        return $(Constants.BTN_VALIDAR_CODIGO_PHONE);
    }

    async validateOtp(phone: string): Promise<void> {

        let existeElemento = await this.waitForElement(Constants.BTN_VALIDAR_CODIGO_PHONE);
        let otp = (existeElemento ? await redis.readDataRedis(phone, 1) : "");

        await this.txtOtp.setValue(otp);
        await this.btnCodeValidate.click();
    }

}

export default new ValidationCodeScreen();