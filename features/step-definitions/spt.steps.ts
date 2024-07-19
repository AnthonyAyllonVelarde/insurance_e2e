import { Given, When, Then } from '@wdio/cucumber-framework';

import mainsubmenuScreen from '../screenobjects/android/mainmenu/menu/mainsubmenu.screen.js';
import createquoteSPTScreen from '../screenobjects/android/insurance/spt/createquoteSPT.screen.js';
import resultquoteSPTScreen from '../screenobjects/android/insurance/spt/resultquoteSPT.screen.js';
import confirmquotesptScreen from '../screenobjects/android/insurance/spt/confirmquotespt.screen.js';
import winstatesptScreen from '../screenobjects/android/insurance/spt/winstatespt.screen.js';

Given(/^el usuario selecciona el boton Seguros$/, async () => {
    await mainsubmenuScreen.selectInsurance();

})

Given(/^el usuario realiza la cotización del seguro SPT$/, async () => {
    await createquoteSPTScreen.selectSaferMoney();

})

Given(/^el usuario visualiza los datos del seguro SPT cotizado$/, async () => {
    await resultquoteSPTScreen.selectContinue();

})

Given(/^el usuario confirma la compra del seguro SPT$/, async () => {
    await confirmquotesptScreen.buyInsuranceSPT();

})

Given(/^el usuario debería visualizar el winstate con los datos del seguro SPT comprado y vuelve al menú principal$/, async () => {
    await winstatesptScreen.goMainMenu();

})

