import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class WinStateSPT extends BaseScreen {

    public get btnGoHome() {
        return $(Constants.BTN_IR_INICIO_WINSTATE_SPT)

    }

    public async goMainMenu() {
        await browser.pause(3000);
        await this.btnGoHome.click();
    }

}

export default new WinStateSPT();