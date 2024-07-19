import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class ConfirmQuoteSPT extends BaseScreen {
    // chkTerminosYCondiciones
    public get chkTermsAndConditions() {
        return $(Constants.CHK_TERMINOS_Y_CONDICIONES_COMPRA_SPT)

    }
    public get btnBuyInsurance() {
        return $(Constants.BTN_COMPRA_SPT)
    }

    public async buyInsuranceSPT() {
        await browser.pause(3000);
        await this.chkTermsAndConditions.click();
        await this.btnBuyInsurance.click();
    }
}

export default new ConfirmQuoteSPT();