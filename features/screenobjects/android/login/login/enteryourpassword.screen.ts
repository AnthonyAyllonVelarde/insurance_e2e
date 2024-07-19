import BaseScreen from "../../commons/base.screen.js";
import { $ } from '@wdio/globals'


class EnterYourPasswordScreen extends BaseScreen {
    public btnTypedNumber(number: string) {
        return $("//android.widget.TextView[@text='" + number + "']");
    }

    public async enterPassword(password: string) {
        for (let i = 0; i < password.length; i++) {
            let digit = password.charAt(i);
            await this.btnTypedNumber(digit).click();
        }

    }
}

export default new EnterYourPasswordScreen();