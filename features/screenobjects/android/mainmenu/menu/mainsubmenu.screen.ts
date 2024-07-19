import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class MainSubMenuScreen extends BaseScreen {
    // Seguros
    public get btnInsurance() {
        const selector = Constants.BTN_SEGUROS_MENU_PRINCIPAL;
        return $(`android=${selector}`)
    }
    // SOAT
    public get btnSOAT() {
        const selector = Constants.BTN_SOAT_MENU_PRINCIPAL;
        return $(`android=${selector}`)
    }

    public async selectSOAT() {
        await this.btnSOAT.click();
    }

    public async selectInsurance() {
        await browser.pause(3000);
        await this.btnInsurance.click();
    }
}

export default new MainSubMenuScreen();