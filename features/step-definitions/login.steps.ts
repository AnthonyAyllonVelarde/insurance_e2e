import { Given, When, Then } from '@wdio/cucumber-framework';


import initialScreen from '../screenobjects/android/login/home/initial.screen.js';
import enteryouryapeScreen from '../screenobjects/android/login/login/enteryouryape.screen.js';
import enteryourpasswordScreen from '../screenobjects/android/login/login/enteryourpassword.screen.js';
import validatecodeScreen from '../screenobjects/android/login/login/validationotp/validatecode.screen.js';
import validatedeviceScreen from '../screenobjects/android/login/login/validationotp/validatedevice.screen.js';
import welcomeyaperoScreen from '../screenobjects/android/mainmenu/menu/welcomeyapero.screen.js';

Given(/^el usuario está registrado en Yape y presiona el boton "Ya tengo una cuenta"$/, async () => {
    await browser.pause(5000)
    await initialScreen.alreadyHaveAccount();

})

Given(/^el usuario ingresa su (.*) y (.*)$/, async (username: string, password: string) => {
    await enteryouryapeScreen.loginAccount(username);
    await enteryourpasswordScreen.enterPassword(password);
    await browser.pause(3000);
})
Given(/^el usuario ingresa su código OTP, que le llega al (.*)$/, async (phone: string) => {
    await validatecodeScreen.validateOtp(phone);
    await browser.pause(3000);
})

Given(/^el usuario ingresa su código OTP de dispositivo, si se le solicita al (.*)$/, async (username: string) => {
    await validatedeviceScreen.validateOtpDevice(username);
})

Given(/^cierra el popup de bienvenida siempre y cuando se muestre$/, async () => {
    await welcomeyaperoScreen.closePromotion();
})