import { Constants } from "../../../support/constants.js";
import BaseScreen from "../../commons/base.screen.js";

import { $ } from '@wdio/globals'

class WelcomeYaperoScreen extends BaseScreen {
    // close
    public get btnClose() {
        return $(Constants.BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE);
    }
    // Conocer Mas
    public get btnKnowMore() {
        const selector = Constants.BTN_CONOCER_MAS_BIENVENIDA_YAPE;
        return $(`android=${selector}`);
    }

    // Cierra la ventana de promoción
    public async closePromotion() {

        let existeElemento = await this.waitForElement(Constants.BTN_CLOSE_PANTALLA_BIENVENIDA_YAPE,);

        if (existeElemento)
            await this.btnClose.click();
    }
}

export default new WelcomeYaperoScreen();