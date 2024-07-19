import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class ResultQuoteSPT extends BaseScreen {

    public get btnContinue() {
        return $(Constants.BTN_CONTINUAR_COTIZACION_SPT);
    }

    public async selectContinue() {
        await browser.pause(3000);
        await this.btnContinue.click();
    }
}

export default new ResultQuoteSPT();