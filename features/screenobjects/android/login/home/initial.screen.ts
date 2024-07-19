import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";
// import Page from './page.js';


class InitialScreen extends BaseScreen {
    public get btnCreateAccount() {
        return $(Constants.BTN_CREAR_UNA_CUENTA);
    }

    public get btnAlreadyHaveAccount() {
        // return $("~Ya tengo una cuenta");
        // const selector = 'new UiSelector().description("Ya tengo una cuenta")';
        // return $(`android=${selector}`);
        return $(Constants.BTN_YA_TENGO_UNA_CUENTA);
    }

    public async alreadyHaveAccount() {
        await this.btnAlreadyHaveAccount.click();
    }

}

export default new InitialScreen();