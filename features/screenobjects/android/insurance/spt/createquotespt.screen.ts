import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class CreateQuoteSPT extends BaseScreen {
    // btnDineroMasSeguro
    public get btnSaferMoney() {
        return $(Constants.BTN_DINERO_MAS_SEGURO);
    }

    public async selectSaferMoney() {
        await browser.pause(3000);
        await this.btnSaferMoney.click();
    }
}

export default new CreateQuoteSPT();