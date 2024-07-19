import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class MainMenuScreen extends BaseScreen {
    // Ver Mas
    public get btnSeeMore() {
        const selector = Constants.BTN_VER_MAS_MENU_PRINCIPAL;
        return $(`android=${selector}`);
    }

    public async seeMore() {
        await this.btnSeeMore.click();
    }
}

export default new MainMenuScreen();